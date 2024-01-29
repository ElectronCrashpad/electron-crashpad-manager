declare namespace CharacterAPI {
    interface ICharacterQuery extends BaseAPI.IBaseQuery {
        nameLike?: string;
        healthPoints?: number;
        features?: number;
        avatarUrl?: string;
        illustrationUrl?: string;
        tagsLike?: string;
        descriptionLike?: string;
    }

    interface ICharacterEntity extends BaseAPI.IBaseEntity {
        name?: string;
        healthPoints?: number;
        avatarUrl?: string;
        illustrationUrl?: string;
        tags?: string;
        description?: string;
    }

    interface ICharacterVO extends ICharacterEntity {
        skills?: SkillAPI.ISkillEntity[];
    }
}