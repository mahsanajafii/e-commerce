import axiosClient from "../api/axiosClient";

const uploadService = {
    uploadImage: async (name: string | File | undefined) => {
        const response = await axiosClient.post('/upload', {
            name
        })

        return response.data
    }
}


export default uploadService