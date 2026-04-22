import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3000/api/user",
  withCredentials:true
});

export async function follow(username) {
    try {
        const response = await api.post(`/follow/${username}`);
    return response.data
    }
    catch (error) {
        return error.response?.data || error.message
    }
} 

export async function unfollow(username) {
    try {
     const response = await api.post(`/unfollow/${username}`)   
     return response
    }
    catch (error) {
        return error.response?.data || error.message
    }
}