import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const applyInterceptors = (axiosClient: AxiosInstance) => {
    axiosClient.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token = localStorage.getItem('token');

            if (token) {
                config.headers.Authorization = `${token}`;
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosClient.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error) => {
            const status = error.response?.status;

            if (status === 401) {
                console.log('مجاز نیستید');
            } else if (status === 400) {
                console.error('Bad Request: ', error.response?.data);
            } else if (status === 403) {
                console.error('Forbidden');
            } else if (status === 500) {
                console.error('Server Error');
            }

            return Promise.reject(error);
        }
    );
}

export default applyInterceptors;
