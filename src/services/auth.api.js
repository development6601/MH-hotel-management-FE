import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
});

export const login = async ({ email, role, password }) => {
    
    const response = await api.post('/login', { email, role, password });
    
    // console.log(response.data.user);
    
    return response.data;
}