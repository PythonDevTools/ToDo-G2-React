import axios from 'axios';
const baseUrlHeroku = 'https://todo-fastapi-pydevt.herokuapp.com/'
const baseUrlLocal = 'http://127.0.0.1:8000/'

export default axios.create({
    baseURL: baseUrlLocal
});
