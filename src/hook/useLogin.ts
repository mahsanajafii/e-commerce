import { useMutation } from 'react-query';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuthStatus } from '../store/authStore';

export const useLogin = () => {
    const navigate = useNavigate()
    const setIsAuth = useAuthStatus(state => state.setAuth)
    return useMutation(authService.login, {
        onSuccess: () => {
            setIsAuth(true)
            setTimeout(() => {
                navigate('/')
            }, 2 * 1000)
        },
        onError: (error) => {
            setIsAuth(false)
            console.error('Login failed :', error);
        },
    });
};