import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "ko-KR",
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.status_message ?? "오류가 발생했습니다.";
    return Promise.reject(new Error(message));
  },
);
