import axios from 'axios';
import { API_URL } from '../config';

export function productDetail(productId) {
    return axios.get(`${API_URL}/products/${productId}`)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        if (error.response) {
        throw new Error(error.response.data.message || 'Product Failed');
        } else {
        throw new Error('Unable to connect to the server, please try again later');
        }
    });
  }