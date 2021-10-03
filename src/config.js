import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://mogobarealestate.herokuapp.com',
});
