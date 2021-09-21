import axios from 'axios';

const bridge = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default bridge;