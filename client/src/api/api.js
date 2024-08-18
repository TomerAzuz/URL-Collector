import axios from 'axios';

function getBaseUrl() {
  return import.meta.env.VITE_API_URL || 'http://localhost:3000';
}

const api = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    if (config.method !== 'get') {
      try {
        const response = await axios.get(`${getBaseUrl()}api/csrf-token`, {
          withCredentials: true
        });
        config.headers['X-CSRF-TOKEN'] = response.data.csrfToken;
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;