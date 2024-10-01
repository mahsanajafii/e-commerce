import axiosClient from "../api/axiosClient";

const uploadService = {
    uploadImage: async (name: string) => {
        const response = await axiosClient.post('/upload', {
            name
        })

        return response.data
    }
}


export default uploadService