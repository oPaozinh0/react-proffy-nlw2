import axios from 'axios';

const api = axios.create({
    baseURL: 'http://qu-5yc.anonymous.mobile.exp.direct:3333' 
});

export default api;