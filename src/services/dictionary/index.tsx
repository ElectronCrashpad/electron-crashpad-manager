import * as DictionaryController from './DictionaryController';

enum DictionaryTypeEnum {
    /** 文本 */ TEXT = "text",
    /** 选项 */ SELECT = "select",
    /** 数字 */ NUMBER = "number",
}

export default {
    DictionaryController,
    DictionaryTypeEnum
}