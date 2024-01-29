import { request } from '../base/request';

export async function getPage(query: BaseAPI.IPageQuery<SkillAPI.ISkillQuery>, options?: { [key: string]: any }) {
    return request<BaseAPI.IPageVO<SkillAPI.ISkillEntity>>('/api/skill', {
        method: 'GET',
        params: query,
        ...(options || {}),
    });
}

export async function add(option: SkillAPI.ISkillEntity) {
    return request<SkillAPI.ISkillEntity>('/api/skill', {
        method: 'POST',
        data: option,
    });
}

export async function update(id: number, option: SkillAPI.ISkillEntity) {
    return request<SkillAPI.ISkillEntity>(`/api/skill/${id}`, {
        method: 'PUT',
        data: option,
    });
}

export async function discard(id: number) {
    return request<SkillAPI.ISkillEntity>(`/api/skill/${id}`, {
        method: 'DELETE',
    });
}

export async function uploadSkillIcon(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return request<string>(`/api/upload/skill-icon`, {
        method: 'POST',
        data: formData,
    });
}

export async function getAllSkill() {
    return request<SkillAPI.ISkillEntity[]>('/api/skill/all', {
        method: 'GET',
    });
}