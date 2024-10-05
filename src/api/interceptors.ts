import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
// import { setIsAdmin } from '../stores/adminStore'
import { useLogout } from "../hook/useLogout";
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
            const logoutMutaion = useLogout()
            const status = error.response?.status;

            if (status === 401) {
                console.log('مجاز نیستید');
            } else if (status === 403) {
                // axiosClient.post('/users/logout')
                // setIsAdmin(false)
                logoutMutaion.mutate()
            }

            return Promise.reject(error);
        }
    );
}

export default applyInterceptors;
