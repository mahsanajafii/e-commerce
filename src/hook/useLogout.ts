import { useMutation } from "react-query";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuthStatus } from "../stores/authStore";


export const useLogout = () => {
    const navigate = useNavigate()
    const setIsAuth = useAuthStatus(state => state.setAuth)

    return useMutation(authService.logout, {
        onSuccess: () => {
            setIsAuth(false)
            navigate('/login')
        },
        onError: (error) => {
            console.log('loggout failed :' + error)
        },
    })
}