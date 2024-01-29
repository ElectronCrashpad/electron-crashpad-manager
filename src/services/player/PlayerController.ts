import { request } from '../base/request';

export async function getPage(query: BaseAPI.IPageQuery<PlayerAPI.IPlayerQuery>, options?: { [key: string]: any }) {
    return request<BaseAPI.IPageVO<PlayerAPI.IPlayerEntity>>('/api/player', {
        method: 'GET',
        params: query,
        ...(options || {}),
    });
}

export async function add(option: PlayerAPI.IPlayerEntity) {
    return request<PlayerAPI.IPlayerEntity>('/api/player', {
        method: 'POST',
        data: option,
    });
}

export async function update(id: number, option: PlayerAPI.IPlayerEntity) {
    return request<PlayerAPI.IPlayerEntity>(`/api/player/${id}`, {
        method: 'PUT',
        data: option,
    });
}

export async function discard(id: number) {
    return request<PlayerAPI.IPlayerEntity>(`/api/player/${id}`, {
        method: 'DELETE',
    });
}

// 给用户配置游戏角色
export async function configCharacter(id: number, option: { characterIds: number[] }) {
    return request<CharacterAPI.ICharacterEntity[]>(`/api/player-character/${id}`, {
        method: 'PUT',
        data: option,
    });
}

// 获取用户的游戏角色
export async function getCharacterByPlayerId(id: number) {
    return request<CharacterAPI.ICharacterEntity[]>(`/api/player-character`, {
        method: 'GET',
        params: { "player-id": id },
    });
}