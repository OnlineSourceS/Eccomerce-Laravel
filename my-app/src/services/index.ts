// axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Set your base URL here
  timeout: 10000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Set your default headers here
    // You can also add other default headers if needed
    },
  
});

export default instance;
