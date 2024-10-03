import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { setIsAdmin } from '../stores/adminStore'
const applyInterceptors = (axiosClient: AxiosInstance) => {
    axiosClient.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
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
            } else if (status === 403) {
                axiosClient.post('/users/logout')
                setIsAdmin(false)
            }

            return Promise.reject(error);
        }
    );
}

export default applyInterceptors;
