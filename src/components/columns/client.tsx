import { ProColumns } from "@ant-design/pro-components";

export const name: ProColumns<ClientAPI.ICrashpadEntity>[] = [{
    title: '产品名称',
    dataIndex: 'productName',
    valueType: 'text'
}];

export const version: ProColumns<ClientAPI.ICrashpadEntity>[] = [{
    title: '产品版本',
    dataIndex: 'version',
    valueType: 'text'
}];

export const ver: ProColumns<ClientAPI.ICrashpadEntity>[] = [{
    title: 'Electron版本',
    dataIndex: 'ver',
    valueType: 'text'
}];

export const platform: ProColumns<ClientAPI.ICrashpadEntity>[] = [{
    title: '平台',
    dataIndex: 'platform',
    valueType: 'text'
}];

export const osarch: ProColumns<ClientAPI.ICrashpadEntity>[] = [{
    title: '架构',
    dataIndex: 'osarch',
    valueType: 'text'
}];
