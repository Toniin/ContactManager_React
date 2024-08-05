import axios from "axios";

export const contactsAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
});

contactsAPI.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("Token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);