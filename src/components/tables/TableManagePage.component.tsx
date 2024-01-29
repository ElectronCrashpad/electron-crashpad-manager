import { useEffect, useRef, useState } from 'react';
import { SortOrder } from 'antd/es/table/interface';
import { ActionType, PageContainer, ParamsType, ProColumns, ProTable, RequestData } from '@ant-design/pro-components';
import { Button, Modal, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { createdAt, createdBy, updatedAt, updatedBy } from "../columns/base";
import TableFormModalComponent from '../modals/TableFormModal.component';

const TableManagePage: React.FC<{
    name: string;
    columns: ProColumns[];
    searchMethod: (params: ParamsType & {
        pageSize?: number;
        current?: number;
        keyword?: string;
    }, sort: Record<string, SortOrder>, filter: Record<string, (string | number)[] | null>) => Promise<Partial<RequestData<Record<string, any>>>>;
    createMethod?: (params: ParamsType) => Promise<unknown>;
    updateMethod?: (params: ParamsType, updateFormValues: ParamsType) => Promise<unknown>;
    deleteMethod?: (params: ParamsType) => Promise<unknown>;
    operateNode?: (record: ParamsType) => React.ReactNode;
    actionRef?: React.MutableRefObject<ActionType | undefined>;
}> = (props) => {
    const [createModalVisible, handleCreateModalVisible] = useState<boolean>(false);
    const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
    const [updateFormValues, setUpdateFormValues] = useState<Partial<unknown>>({});
    const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
    const [createLoading, setCreateLoading] = useState<boolean>(false);
    const tableActionRef = useRef<ActionType>();

    useEffect(() => {
        if (props.actionRef && tableActionRef.current) {
            props.actionRef.current = tableActionRef.current;
        }
    }, [tableActionRef]);

    return (
        <PageContainer
            ghost
            header={{
                title: `${props.name}管理`
            }}
        >
            <ProTable
                actionRef={tableActionRef}
                toolBarRender={() => {
                    const renderElements = [];
                    props.createMethod && renderElements.push(<Button key="button" icon={<PlusOutlined />} type="primary" onClick={ () => handleCreateModalVisible(true) }>
                        新建
                    </Button>);
                    return renderElements;
                }}
                rowKey="id"
                columns={[
                    ...props.columns,
                    ...updatedBy,
                    ...createdBy,
                    ...createdAt,
                    ...updatedAt,
                    {
                        title: '操作',
                        dataIndex: 'option',
                        valueType: 'option',
                        render: (_, record) => (
                            <Space>
                                { props.updateMethod && <a
                                    onClick={() => {
                                        setUpdateFormValues(record);
                                        handleUpdateModalVisible(true);
                                    }}
                                >
                                    编辑
                                </a> }
                                { props.deleteMethod && <a
                                    onClick={() => {
                                        Modal.warning({
                                            title: `删除${props.name}`,
                                            content: `确定删除该${props.name}吗？`,
                                            okText: '确定',
                                            cancelText: '取消',
                                            okButtonProps: { loading: deleteLoading },
                                            onOk: async () => {
                                                try {
                                                    setDeleteLoading(true);
                                                    await props.deleteMethod!(record);
                                                    if (tableActionRef.current) {
                                                        tableActionRef.current.reload();
                                                    }
                                                    setDeleteLoading(false);
                                                } catch (error) {
                                                    setDeleteLoading(false);
                                                }
                                            }
                                        });
                                    }}
                                >删除</a> }
                                {props.operateNode && props.operateNode(record)}
                            </Space>
                        ),
                    }
                ]}
                rowSelection={{
                }}
                request={props.searchMethod}
            ></ProTable>
            <TableFormModalComponent
                title={`新建${props.name}`}
                modalVisible={createModalVisible}
                onCancel={() => handleCreateModalVisible(false)}
            >
                <ProTable
                    form={{ loading: createLoading }}
                    onSubmit={async (value) => {
                        try {
                            setCreateLoading(true);
                            await props.createMethod!(value);
                            setCreateLoading(false);
                            handleCreateModalVisible(false);
                            if (tableActionRef.current) {
                                tableActionRef.current.reload();
                            }
                        } catch (error) {
                            setCreateLoading(false);
                        }
                    }}
                    rowKey="id"
                    type="form"
                    columns={[
                        ...props.columns
                    ]}
                />
            </TableFormModalComponent>
            <TableFormModalComponent
                title={`编辑${props.name}`}
                modalVisible={updateModalVisible}
                onCancel={() => handleUpdateModalVisible(false)}
            >
                <ProTable
                    form={{ initialValues: updateFormValues }}
                    onSubmit={async (value) => {
                        await props.updateMethod!(value, updateFormValues);
                        handleUpdateModalVisible(false);
                        setUpdateFormValues({});
                        if (tableActionRef.current) {
                            tableActionRef.current.reload();
                        }
                    }}
                    rowKey="id"
                    type="form"
                    columns={[
                        ...props.columns
                    ]}
                />
            </TableFormModalComponent>
        </PageContainer>
    );
};

export default TableManagePage;