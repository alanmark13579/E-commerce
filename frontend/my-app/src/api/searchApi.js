import apiClient from './apiClient';

export function searchProduct(productName) {
    return apiClient
        .get('/products', { params: { query: productName } })
        .then((response) => response.data)
        .catch((error) => {
            const message =
            error.response?.data?.message || 'Unable to connect to the server, please try again later';
            throw new Error(message);
        });
}