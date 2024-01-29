declare namespace EffectAPI {
    interface IEffectQuery extends BaseAPI.IBaseQuery {
        nameLike?: string;
        type?: string;
        targetLike?: string;
        descriptionLike?: string;
    }

    interface IEffectEntity extends BaseAPI.IBaseEntity {
        name?: string;
        type?: string;
        target?: string;
        description?: string;
        animationUrl?: string;
        illustrationUrl?: string;
        iconUrl?: string;
    }

    interface IEffectAttribute extends BaseAPI.IBaseEntity {
        effectId?: number;
        attributeCode?: string;
        effectLevel?: number;
        attributeValue?: string;
    }
}