import axios from 'axios';
import { API_URL } from '../config';

export function loginUser(data) {
  return axios.post(`${API_URL}/login`, {
    email: data.email,
    password: data.password,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(error.response.data.message || 'Login Failed');
      } else {
        throw new Error('Unable to connect to the server, please try again later');
      }
    });
}