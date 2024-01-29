declare namespace ClientAPI {
    interface ICrashpadQuery extends BaseAPI.IBaseQuery {
        productName?: string[],
        version?: string[],
        guid?: string[],
        osarch?: string[],
        pid?: string[],
        plat?: string[],
        platform?: string[],
        process_type?: string[],
        prod?: string[],
        ptype?: string[],
        ver?: string[],
        dmpsPath?: string[],
        notes?: string
    }

    interface ICrashpadEntity extends BaseAPI.IBaseEntity {
        productName?: string[],
        version?: string[],
        guid?: string[],
        osarch?: string[],
        pid?: string[],
        plat?: string[],
        platform?: string[],
        process_type?: string[],
        prod?: string[],
        ptype?: string[],
        ver?: string[],
        dmpsPath?: string[],
        notes?: string
    }

    interface ICrashpadVO extends ICrashpadEntity {
    }
}