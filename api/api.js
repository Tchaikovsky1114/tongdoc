import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CLIENT_ID,CLIENT_SECRET} from 'react-native-dotenv'
const instance = axios.create({
  baseURL: 'https://api.tongdoc.co.kr',
  timeout: 5000,
});

const apis = {
  Signin: async (user) => {

    try {
      const {data} = await instance.post('oauth/token', {  
        grant_type: "password",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username: user.email,
        password: user.password,
        device_token: "1",
        device_type: "android"
      }); 
      if(data){
        const token = await data.access_token;
        await AsyncStorage.setItem('access', token);
      }
    } catch (error) {
      console.error(error);
    }
    
  },
  // required : email,name,password
  signup: async (user) => {
    try {
      await instance.post('register', user, {});
    } catch (error) {
      console.error(error);
      return;
    }
    try {
      const data = await instance.post('oauth/token', {
        grant_type: "password",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username: user.user_email,
        password: user.password,
        device_token: "1",
        device_type: "android"
      });
      const token = data.access_token;
      await AsyncStorage.setItem('access', token);
    } catch (error) {
      console.error(error)
    }
  },
};

export default apis;
