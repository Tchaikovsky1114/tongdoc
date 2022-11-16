import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'https://api.tongdoc.net/auth/api',
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const token = AsyncStorage.getItem('access');

  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  if (token) {
    config.headers['Authorization'] = `Bearer ${AsyncStorage.getItem(
      'access'
    )}`;
  }
  config.headers.Accept = 'application/json';
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
  Signin: async (user) => {
    const response = await instance.post('/user/login_email', user);
    if (response) {
      const token = response.data.DAT.res_token;
      AsyncStorage.setItem('access', token.access_token);

      return response.data;
    } else {
      return response;
    }
  },
  // required : email,name,password
  signup: async (user) => {
    try {
      const {
        data: {
          DAT: { res_token: token },
        },
      } = await instance.post('user/append_email', user, {});
      AsyncStorage.setItem('access', token.access_token);
    } catch (error) {
      console.error(error);
      return;
    }
    try {
      const response = await instance.post('/user/login_email', user);
      const token = response.data.DAT.res_token;
      AsyncStorage.setItem('access', token.access_token);
      return response.data.MSG;
    } catch (error) {
      const errorResponse = await error.response.data;
      if (errorResponse.DAT) {
        throw errorResponse.DAT;
      }
    }
  },
};

export default apis;
