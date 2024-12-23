import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 100000,
});

apiClient.interceptors.request.use(
  (config) => {
    // 요청 로깅
    console.log('Request 시작:', config);
    return config;
  },
  (error) => {
    // 요청 에러 처리
    console.error('Request Error:', error);
    return Promise.reject(error);
  },
);

export default apiClient;
