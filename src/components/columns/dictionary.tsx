import { ProColumns } from "@ant-design/pro-components";
import DictionaryService from "@/services/dictionary";

export const name: ProColumns<DictionaryAPI.IDictionaryEntity>[] = [{
    title: '名称',
    dataIndex: 'name',
    valueType: 'text',
}];

export const value: ProColumns<DictionaryAPI.IDictionaryEntity>[] = [{
    title: '值',
    dataIndex: 'value',
    valueType: 'text',
}];

export const type: ProColumns<DictionaryAPI.IDictionaryEntity>[] = [{
    title: '类型',
    dataIndex: 'type',
    valueType: 'select',
    valueEnum: {
        [DictionaryService.DictionaryTypeEnum.TEXT]: { text: '文本' },
        [DictionaryService.DictionaryTypeEnum.SELECT]: { text: '选项' },
        [DictionaryService.DictionaryTypeEnum.NUMBER]: { text: '数字' },
    },
}];

export const description: ProColumns<DictionaryAPI.IDictionaryEntity>[] = [{
    title: '描述',
    dataIndex: 'description',
    valueType: 'text',
}];

export const parent: ProColumns<DictionaryAPI.IDictionaryEntity>[] = [{
    title: '父级',
    dataIndex: 'parentId',
    valueType: 'select',
    hideInSearch: true,
    hideInTable: true,
    request: async () => {
        const data = await DictionaryService.DictionaryController.getAllDictionary();

        return data.map(({ id, name }) => ({
            label: name,
            value: Number(id)
        }));
    }
}];