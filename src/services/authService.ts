import axiosClient from "../api/axiosClient";
import { ILoginType, IRegisterType } from '../types/authTypes'


const authService = {
    login: async ({ email, password }: ILoginType) => {
        const response = await axiosClient.post("/users/auth", {
            email,
            password,
        });
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
};

export default authService;
