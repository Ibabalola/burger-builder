import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-my-burger-isb.firebaseio.com/'
});