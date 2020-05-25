import axios from "axios";

const baseURL = process.env.PUBLIC_URL || "http://localhost:8080/api";

export const axiosInstance = axios.create({
  baseURL,
});
