import axios from "axios";

const axiosConfig = axios.create({
    // baseURL: "http://localhost:8000",
    baseURL: "https://themealapi.ayushmay.me/",
    withCredentials: false,
});

export default axiosConfig;
