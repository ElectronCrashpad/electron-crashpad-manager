import { request } from '../base/request';

export async function getPage(query: BaseAPI.IPageQuery<EffectAPI.IEffectQuery>, options?: { [key: string]: any }) {
    return request<BaseAPI.IPageVO<EffectAPI.IEffectEntity>>('/api/effect', {
        method: 'GET',
        params: query,
        ...(options || {}),
    });
}

export async function add(option: EffectAPI.IEffectEntity) {
    return request<EffectAPI.IEffectEntity>('/api/effect', {
        method: 'POST',
        data: option,
    });
}

export async function update(id: number, option: EffectAPI.IEffectEntity) {
    return request<EffectAPI.IEffectEntity>(`/api/effect/${id}`, {
        method: 'PUT',
        data: option,
    });
}

export async function discard(id: number) {
    return request<EffectAPI.IEffectEntity>(`/api/effect/${id}`, {
        method: 'DELETE',
    });
}

export async function uploadEffectIcon(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return request<string>(`/api/upload/effect-icon`, {
        method: 'POST',
        data: formData,
    });
}

export async function getAllEffect() {
    return request<EffectAPI.IEffectEntity[]>('/api/effect/all', {
        method: 'GET',
    });
}

export async function getEffectAttributesByEffectId(effectId: number) {
    return request<EffectAPI.IEffectAttribute[]>(`/api/effect-attribute/effect-id/${ effectId }`, {
        method: 'GET'
    })
}

export async function coverAttributeToEffect(effectId: number, effectAttributes: EffectAPI.IEffectAttribute[]) {
    return request<EffectAPI.IEffectEntity>(`/api/effect-attribute/cover/${ effectId }`, {
        method: 'PUT',
        data: effectAttributes
    })
}