import axios from 'axios';

const api = axios.create({
    baseURL: "https://tiao.supliu.com.br/api",
    headers: {
        Authorization: "mrmatheusmagnani@gmail.com"
    }
}); 

export default api ;