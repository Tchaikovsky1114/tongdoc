import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLIENT_ID, CLIENT_SECRET } from 'react-native-dotenv';
const instance = axios.create({
  baseURL: 'https://api.tongdoc.co.kr',
  timeout: 5000,
});

instance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('access');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.accept = 'application/json';
  return config;
});

const apis = {
  Signin: async (user) => {
    try {
      const { data } = await instance.post('oauth/token', {
        grant_type: 'password',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username: user.email,
        password: user.password,
        device_token: user.device_token,
        device_type: user.device_type,
      });
      if (data) {
        const token = await data.access_token;
        const refreshToken = await data.refresh_token;
        await AsyncStorage.setItem('access', token);
        await AsyncStorage.setItem('refresh', refreshToken);
        const userInfo = await instance.get('v1/user');
        return userInfo.data;
      }
    } catch (error) {
      console.error(error.response.data);
      return;
    }
  },
};

export default apis;
