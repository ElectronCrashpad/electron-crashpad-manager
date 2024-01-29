declare namespace BaseAPI {
    interface IBaseQuery {
        id?: number | null;
        createdAtStart?: Date | null;
        createdAtEnd?: Date | null;
        createdBy?: number | null;
        updatedAtStart?: Date | null;
        updatedAtEnd?: Date | null;
        updatedBy?: number | null;
    };

    interface IPageQuery<T extends IBaseQuery> {
        page?: number | null;
        size?: number | null;
        sort?: string | null;
        order?: string | null;
        query?: T | null;
    }

    interface IBaseEntity {
        id?: number | null;
        createdAt?: Date | null;
        createdBy?: number | null;
        updatedAt?: Date | null;
        updatedBy?: number | null;
    }

    interface IPageVO<T> {
        page: number;
        size: number;
        total: number;
        data: T[];
    }

    interface IError {
        message: string;
    }
};
