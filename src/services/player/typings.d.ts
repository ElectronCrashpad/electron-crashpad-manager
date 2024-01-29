declare namespace PlayerAPI {
    interface IPlayerQuery extends BaseAPI.IBaseQuery {
        nameLike?: string;
        account?: string;
    }

    interface IPlayerEntity extends BaseAPI.IBaseEntity {
        name?: string;
        account?: string;
        password?: string;
    }
}