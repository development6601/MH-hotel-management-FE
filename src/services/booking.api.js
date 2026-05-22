import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/api/booking",
    withCredentials: true
});


export const fetchMyBookings = async () => {
    const response = await api.get('/customer/mybookings');    
    return response.data;
}