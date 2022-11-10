import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://api.tongdoc.net/auth/api",
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const token = AsyncStorage.getItem("access");

  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  if (token) {
    config.headers["Authorization"] = `Bearer ${AsyncStorage.getItem(
      "access"
    )}`;
  }
  config.headers.Accept = "application/json";
  return config;
});
instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response.status === 401) {
      // window.alert('토큰이 만료되었습니다. 다시 로그인해주세요.');
      AsyncStorage.clear();
    }
  }
);

const apis = {
  Signin: (user) => {
    console.log(user, "1");
    instance.post("/user/login_email", user);
  },
};

export default apis;