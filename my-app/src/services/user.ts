// userService.js
import axiosInstance from './index';

const userService = {

    async getUserById(userId: string) {
        try {
            const response = await axiosInstance.get(`/users/${userId}`);
            return response.data;
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server Error:', error.response.status);
                if (error.response.status === 404) {
                    throw new Error('User not found');
                } else {
                    throw new Error('Server Error');
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No Response:', error.request);
                throw new Error('No Response from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Request Error:', error.message);
                throw new Error('Request Error');
            }
        }
    },

    async registerUser(userData) {
        try {
            const response = await axiosInstance.post('/register', userData);
            return response.data;
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server Error:', error.response.status);
                if (error.response.status === 400) {
                    // Handle validation errors
                    throw new Error(error.response.data.message);
                } else {
                    throw new Error('Server Error');
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No Response:', error.request);
                throw new Error('No Response from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Request Error:', error.message);
                throw new Error('Request Error');
            }
        }
    },

    async loginUser(credentials) {
        try {
            const response = await axiosInstance.post('/login', credentials);
            return response.data;
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server Error:', error.response.status);
                if (error.response.status === 401) {
                    // Handle invalid credentials
                    throw new Error('Invalid email or password');
                } else {
                    throw new Error('Server Error');
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No Response:', error.request);
                throw new Error('No Response from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Request Error:', error.message);
                throw new Error('Request Error');
            }
        }
    },
    // Add other user-related functions here...
};

export default userService;
