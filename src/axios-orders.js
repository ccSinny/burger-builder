import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-bestburger.firebaseio.com/'
});

export default instance;