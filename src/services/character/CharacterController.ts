import { request } from '../base/request';

export async function getPage(query: BaseAPI.IPageQuery<CharacterAPI.ICharacterQuery>, options?: { [key: string]: any }) {
    return request<BaseAPI.IPageVO<CharacterAPI.ICharacterEntity>>('/api/character', {
        method: 'GET',
        params: query,
        ...(options || {}),
    });
}

export async function add(option: CharacterAPI.ICharacterEntity) {
    return request<CharacterAPI.ICharacterEntity>('/api/character', {
        method: 'POST',
        data: option,
    });
}

export async function update(id: number, option: CharacterAPI.ICharacterEntity) {
    return request<CharacterAPI.ICharacterEntity>(`/api/character/${id}`, {
        method: 'PUT',
        data: option,
    });
}

export async function discard(id: number) {
    return request<CharacterAPI.ICharacterEntity>(`/api/character/${id}`, {
        method: 'DELETE',
    });
}

export async function uploadCharacterAvatar(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return request<string>(`/api/upload/character-avatar`, {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data; charset=utf-8"
        },
        data: formData,
    });
}

export async function uploadCharacterIllustration(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return request<string>(`/api/upload/character-illustration`, {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data; charset=utf-8"
        },
        data: formData,
    });
}
