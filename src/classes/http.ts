/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import type { AxiosRequestConfig } from "axios";

class Request {
    instance;
    constructor() {
        const instance = axios.create({
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        instance.interceptors.request.use(
            async (config: AxiosRequestConfig) => {
                return config;
            },
            (error) => {
                Promise.reject(error);
            }
        );

        instance.interceptors.response.use(
            (response) => response,
            async (error: any) => {
                return Promise.reject(error);
            }
        );

        this.instance = instance;
    }

    get = (url: string, params?: any) => {
        return this.instance.get(url, { params });
    };

    post = (url: string, data: any) => {
        return this.instance.post(url, data);
    };

    put = (url: string, data: any) => {
        return this.instance.put(url, data);
    };

    patch = (url: string, data: any) => {
        return this.instance.patch(url, data);
    };

    delete = (url: string, data?: any) => {
        return this.instance.delete(url, { data: data });
    };
}

export default new Request();
