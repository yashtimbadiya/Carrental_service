import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.REACT_APP_BACKEND_URL ||
    "http://localhost:3000/",
});

export default axiosInstance;
