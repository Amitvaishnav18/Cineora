
import axios from "axios";

console.log("API BASE URL:", import.meta.env.VITE_BASE_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export default api;
