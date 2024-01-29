declare namespace DictionaryAPI {
    interface IDictionaryQuery extends BaseAPI.IBaseQuery {
        nameLike: string;
        valueLike: string;
        type: string;
        descriptionLike: string;
        parentId: number;
    }

    interface IDictionaryEntity extends BaseAPI.IBaseEntity {
        name?: string;
        value?: string;
        type?: string;
        description?: string;
        parentId?: number;
    }

    interface IDictionaryTreeVo extends IDictionaryEntity {
        children?: DictionaryTreeVo[];
    }
}