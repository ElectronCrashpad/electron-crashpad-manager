import axios, { AxiosRequestConfig } from 'axios';

export async function request<T = any>(url: string, options: AxiosRequestConfig<unknown> = {}): Promise<T> {
    try {
        options.url = url;
        const response = await axios.request(options);

        console.log("response", response);
        

        if (response.status < 400 && response.data.code === 0) {
            return response.data.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export function requestBuffer(url: string, option: RequestInit) {
    return fetch(url, option);
}