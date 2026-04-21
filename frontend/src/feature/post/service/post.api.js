import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3000/api/post",
  withCredentials: true,
});

export async function getFeed() {
    try {
        const response = await api.get("/feed")
    return response.data
    }
    catch (error) {
        const err = error.response?.data || error.message
        return err
    }
}