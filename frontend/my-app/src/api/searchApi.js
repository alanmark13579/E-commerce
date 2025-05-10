import axios from 'axios';
import { API_URL } from '../config';

export function searchProduct(productName) {
    return axios.get(`${API_URL}/products`, {
        params: { query: productName }
    })
    .then((response) => response.data)
    .catch((error) => {
        const message =
            error.response?.data?.message || 'Unable to connect to the server, please try again later'
        throw new Error(message)
    })
}
