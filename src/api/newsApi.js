import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables()

const newsApi = axios.create({
    baseURL: VITE_API_URL
});

newsApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-jwtoken': localStorage.getItem('token')
    }

    return config;
})

export default newsApi;