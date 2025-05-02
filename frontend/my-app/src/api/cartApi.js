import apiClient from './apiClient';

export function getCart() {
    return apiClient
      .get(`/cart`)
      .then((response) => response.data)
      .catch((error) => {
        const message =
          error.response?.data?.message || 'Unable to connect to the server, please try again later';
        throw new Error(message);
      });
  }

export function addCart(Id, quantity) {
    return apiClient
        .post(`/cart/addProduct`,{
            productId: Id, 
            quantity: quantity
        })
        .then((response) => response.data)
        .catch((error) => {
        const message =
            error.response?.data?.message || 'Unable to connect to the server, please try again later';
        throw new Error(message);
        });
}

export function updateCart(items) {
    return apiClient
        .post(`/cart/update`, { items })
        .then((response) => response.data)
        .catch((error) => {
        const message =
            error.response?.data?.message || 'Unable to connect to the server, please try again later';
        throw new Error(message);
        });
    }