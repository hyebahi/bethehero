import axios from 'axios';

const api = axios.create({
    baseURL: "http://betheherobackend-env.eba-hssudvrk.us-east-2.elasticbeanstalk.com",
});

export default api;