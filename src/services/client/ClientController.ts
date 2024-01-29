import { request, requestBuffer } from '../base/request';

export async function getPage(query: BaseAPI.IPageQuery<ClientAPI.ICrashpadQuery>, options?: { [key: string]: any }) {
    return request<BaseAPI.IPageVO<ClientAPI.ICrashpadEntity>>('/api/client/crashpad', {
        method: 'GET',
        params: query,
        ...(options || {}),
    });
}

export async function analysisCrashpadById(id: number) {
    const response = await requestBuffer(`/api/client/crashpad/${id}/analysis`, {
        method: 'POST'
    });
    
    const text = await response.text();

    return text;
}
