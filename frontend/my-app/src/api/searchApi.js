import axios from 'axios';
import { API_URL } from '../config';

export function searchProduct(productName) {
    return axios.get(`${API_URL}/products`, {
        params: {
        query: productName
        }
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        if (error.response) {
        throw new Error(error.response.data.message || 'Search Failed');
        } else {
        throw new Error('Unable to connect to the server, please try again later');
        }
    });
  }