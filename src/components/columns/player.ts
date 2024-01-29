import { ProColumns } from "@ant-design/pro-components";

export const name: ProColumns<PlayerAPI.IPlayerEntity>[] = [{
    title: '名称',
    dataIndex: 'name',
    valueType: 'text'
}];

export const account: ProColumns<PlayerAPI.IPlayerEntity>[] = [{
    title: '账号',
    dataIndex: 'account',
    valueType: 'text'
}];

export const password: ProColumns<PlayerAPI.IPlayerEntity>[] = [{
    title: '密码',
    dataIndex: 'password',
    valueType: 'password',
    hideInTable: true,
    hideInSearch: true
}];