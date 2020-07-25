import axios from 'axios';

const api = axios.create({
    baseURL: "https://ec2-18-220-113-213.us-east-2.compute.amazonaws.com:8080",
});

export default api;