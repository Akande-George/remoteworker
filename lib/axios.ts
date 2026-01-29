import axios from "axios";
import { useAuthStore } from "../store/authStore";

// Helper to get token from Zustand (or localStorage as fallback)
function getToken() {
  try {
    const { token } = useAuthStore.getState();
    if (token) return token;
  } catch {
    return localStorage.getItem("token");
  }
  return null;
}

const instance = axios.create({
  baseURL: "https://api.remoteworkher.com",
  withCredentials: false,
});

// Request interceptor: attach JWT if present
instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor: handle errors globally
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Example: logout on 401 Unauthorized
    if (error.response && error.response.status === 401) {
      try {
        // FIX: Use 'clearUser' instead of 'logout'
        const { clearUser } = useAuthStore.getState();
        clearUser();
      } catch {
        // fallback: clear localStorage
        localStorage.removeItem("token");
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
