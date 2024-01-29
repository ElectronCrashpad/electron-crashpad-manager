declare namespace SkillAPI {
    interface ISkillQuery extends BaseAPI.IBaseQuery {
        nameLike?: string;
        type?: string;
        descriptionLike?: string;
    }

    interface ISkillLevelValueMapItem {
        effectId?: number;
        effectLevel?: number;
        attributeName?: string;
        attributeValue?: number | string;
    }

    interface ISkillEntity extends BaseAPI.IBaseEntity {
        name?: string;
        type?: string;
        levelValueMap?: { [level: number]: ISkillLevelValueMapItem[] };
        description?: string;
        animationUrl?: string;
        illustrationUrl?: string;
        iconUrl?: string;
    }
}