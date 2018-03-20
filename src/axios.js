import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://website-krien.firebaseio.com/'
})

export default instance;
