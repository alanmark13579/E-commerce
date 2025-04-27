import apiClient from './apiClient';

export function productDetail(productId) {
    return apiClient
      .get(`/products/${productId}`)
      .then((response) => response.data)
      .catch((error) => {
        const message =
          error.response?.data?.message || 'Unable to connect to the server, please try again later';
        throw new Error(message);
      });
  }