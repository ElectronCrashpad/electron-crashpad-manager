import { ProColumns } from "@ant-design/pro-components";

export const createdAt: ProColumns<BaseAPI.IBaseEntity>[] = [{
    title: '创建时间',
    dataIndex: 'createdAt',
    valueType: 'dateTime',
    hideInSearch: true,
    hideInForm: true,
}, {
    title: '创建时间',
    dataIndex: 'createdAt',
    valueType: 'dateTimeRange',
    hideInTable: true,
    hideInForm: true,
    search: {
        transform: (value: any) => {
            return {
                createdAtStart: value[0],
                createdAtEnd: value[1],
            };
        },
    },
}];

export const updatedAt: ProColumns<BaseAPI.IBaseEntity>[] = [{
    title: '更新时间',
    dataIndex: 'updatedAt',
    valueType: 'dateTime',
    hideInSearch: true,
    hideInForm: true,
}, {
    title: '更新时间',
    dataIndex: 'updatedAt',
    valueType: 'dateTimeRange',
    hideInTable: true,
    hideInForm: true,
    search: {
        transform: (value: any) => {
            return {
                updatedAtStart: value[0],
                updatedAtEnd: value[1],
            };
        }
    },
}];

export const createdBy: ProColumns<BaseAPI.IBaseEntity>[] = [{
    title: '创建人',
    dataIndex: 'createdBy',
    hideInSearch: true,
    hideInForm: true,
}, {
    title: '创建人',
    dataIndex: 'createdBy',
    valueType: 'select',
    valueEnum: {
        1: '张三',
        2: '李四',
    },
    hideInTable: true,
    hideInForm: true,
    search: {
        transform: (value: any) => {
            return {
                createdBy: value,
            };
        }
    },
}];

export const updatedBy: ProColumns<BaseAPI.IBaseEntity>[] = [{
    title: '更新人',
    dataIndex: 'updatedBy',
    hideInSearch: true,
    hideInForm: true,
}, {
    title: '更新人',
    dataIndex: 'updatedBy',
    valueType: 'select',
    valueEnum: {
        1: '张三',
        2: '李四',
    },
    hideInTable: true,
    hideInForm: true,
    search: {
        transform: (value: any) => {
            return {
                updatedBy: value,
            };
        }
    },
}];