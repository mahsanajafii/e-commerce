import axios from 'axios';
import applyInterceptors from './interceptors';

const BaseUrl = 'http://185.8.174.74:8090/api';

const axiosClient = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

applyInterceptors(axiosClient);

export default axiosClient;
