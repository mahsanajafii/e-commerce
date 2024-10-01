import axiosClient from "../api/axiosClient";
import { ILoginType, IRegisterType } from '../types/authTypes'
import { setIsAdmin } from "../stores/adminStore";

const authService = {
    login: async ({ email, password }: ILoginType) => {
        const response = await axiosClient.post("/users/auth", {
            email,
            password,
        });
        setIsAdmin(response.data.isAdmin)
        return response.data;
    },

    register: async ({ username, email, password, confirm_Password }: IRegisterType) => {
        const response = await axiosClient.post("/users", {
            username,
            email,
            password,
            confirm_Password,
        });
        return response.data;
    },


    logout: async () => {
        const response = await axiosClient.post('users/logout')
        return response.data
    }
};

export default authService;
