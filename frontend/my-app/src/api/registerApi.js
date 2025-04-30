import axios from 'axios';
import { API_URL } from '../config';

export function registerUser(data) {
  return axios.post(`${API_URL}/register`, {
    name: data.name,
    email: data.email,
    password: data.password,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(error.response.data.message || 'Register Failed');
      } else {
        throw new Error('Unable to connect to the server, please try again later');
      }
    });
}