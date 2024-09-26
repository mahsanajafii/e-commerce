import axiosClient from "../api/axiosClient";

const authService = {
    login: async (email: string, password: string) => {
        try {
            const response = await axiosClient.post("/api/users/auth", {
                email,
                password,
            });
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    register: async (
        username: string,
        email: string,
        password: string,
        confirm_Password: string
    ) => {
        try {
            const response = await axiosClient.post("/api/users", {
                username,
                email,
                password,
                confirm_Password,
            });
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
};

export default authService;
