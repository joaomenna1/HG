import axios from "axios";

const Api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
  timeout: 50000,
});

export default Api;
