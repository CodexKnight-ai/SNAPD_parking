import axios from "axios";
import { store } from "../store/store";
import { login } from "../store/authSlice";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const response = await axios.post("http://localhost:4000/api/v1/users/refresh-token", {}, { withCredentials: true });
        const { accessToken, refreshToken } = response.data.data;

        store.dispatch(login({ ...store.getState().auth.user, accessToken, refreshToken }));
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
