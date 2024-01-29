import { request } from '../base/request';

export async function getPage(query: BaseAPI.IPageQuery<DictionaryAPI.IDictionaryQuery>, options?: { [key: string]: any }) {
    return request<BaseAPI.IPageVO<DictionaryAPI.IDictionaryEntity>>('/api/dictionary', {
        method: 'GET',
        params: query,
        ...(options || {}),
    });
}

export async function add(option: DictionaryAPI.IDictionaryEntity) {
    return request<DictionaryAPI.IDictionaryEntity>('/api/dictionary', {
        method: 'POST',
        data: option,
    });
}

export async function update(id: number, option: DictionaryAPI.IDictionaryEntity) {
    return request<DictionaryAPI.IDictionaryEntity>(`/api/dictionary/${id}`, {
        method: 'PUT',
        data: option,
    });
}

export async function discard(id: number) {
    return request<DictionaryAPI.IDictionaryEntity>(`/api/dictionary/${id}`, {
        method: 'DELETE',
    });
}

export async function uploadDictionaryIcon(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return request<string>(`/api/upload/dictionary-icon`, {
        method: 'POST',
        data: formData,
    });
}

export async function getAllDictionary() {
    return request<DictionaryAPI.IDictionaryEntity[]>('/api/dictionary/all', {
        method: 'GET',
    });
}

export async function getByNameLike(nameLike: string) {
    return request<DictionaryAPI.IDictionaryEntity[]>(`/api/dictionary/name/${nameLike}`, {
        method: 'GET',
    });
}

export async function getByParentValue(parentValue: string) {
    return request<DictionaryAPI.IDictionaryEntity[]>(`/api/dictionary/parent-value/${parentValue}`, {
        method: 'GET',
    });
}

export async function getTreeByPage(query: BaseAPI.IPageQuery<DictionaryAPI.IDictionaryQuery>) {
    return request<BaseAPI.IPageVO<DictionaryAPI.IDictionaryTreeVo>>('/api/dictionary/tree', {
        method: 'GET',
        params: query,
    });
}