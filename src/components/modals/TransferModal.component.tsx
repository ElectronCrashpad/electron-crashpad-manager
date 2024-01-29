import { Modal, Transfer } from "antd";
import { RenderResult, TransferDirection } from "antd/es/transfer";
import React, { useEffect } from "react";

export interface ITransferModalProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
    onOk: (targetKeys: string[]) => void;
    transferData: { key: string; title: string; }[];
    transferTargetKeys?: string[];
    transferSelectedKeys?: string[];
    transferOnChange?: (nextTargetKeys: string[], direction: string, moveKeys: string[]) => void;
    transferOnSelectChange?: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void;
    transferOnScroll?: (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => void;
    transferRender?: (item: {
        key: string;
        title: string;
    }) => RenderResult;
    transferTitles?: string[];
};

const TransferModal: React.FC<ITransferModalProps> = (props) => {
    const [targetKeys, setTargetKeys] = React.useState<string[]>(props.transferTargetKeys || []);
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>(props.transferSelectedKeys || []);

    useEffect(() => {
        setTargetKeys(props.transferTargetKeys || []);
    }, [props.transferTargetKeys]);

    useEffect(() => {
        setSelectedKeys(props.transferSelectedKeys || []);
    }, [props.transferSelectedKeys]);

    return (
        <Modal
            destroyOnClose
            title={props.title}
            open={props.visible}
            onCancel={() => props.onCancel()}
            onOk={() => props.onOk(targetKeys)}
        >
            <Transfer
                dataSource={props.transferData}
                titles={props.transferTitles}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={(nextTargetKeys, direction, moveKeys) => {
                    setTargetKeys(nextTargetKeys);
                    props.transferOnChange?.(nextTargetKeys, direction, moveKeys);
                }}
                onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
                    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
                    props.transferOnSelectChange?.(sourceSelectedKeys, targetSelectedKeys);
                }}
                onScroll={props.transferOnScroll}
                render={props.transferRender || (item => item.title)}
            />
        </Modal>
    );
};

export default TransferModal;