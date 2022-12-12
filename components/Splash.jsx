import { StyleSheet, Image, View, Alert } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {CLIENT_ID,CLIENT_SECRET} from 'react-native-dotenv';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import P_20R from '../style/paragraph/P_20R';
import { version } from '../package.json'




export default function Splash() {
  const navigation = useNavigation();
  // onboarding에서 유저가 어플리케이션 실행 이력이 있는 경우(asyncStorage에 접속 이력) signin page로 redirecting.

  const checkExistUserHandler = async () => {
    const refreshToken = await AsyncStorage.getItem('refresh');
    if(!refreshToken) {
     navigation.navigate('OnBoarding');
    }else{
    try {
      const { data } = await axios.post('https://api.tongdoc.co.kr/oauth/token',{
        "grant_type": "refresh_token",
        "client_id": CLIENT_ID,
        "client_secret":CLIENT_SECRET,
        "refresh_token":refreshToken,
      })
      const newAccessToken = data.access_token;
      const newRefreshToken = data.refresh_token;
      await AsyncStorage.setItem('access', newAccessToken);
      await AsyncStorage.setItem('refresh',newRefreshToken);
      
      const {data:userInfo} = await axios.get('https://api.tongdoc.co.kr/v1/user',{
        headers:{
          'accept': 'application/json',
          'Authorization': `Bearer ${newAccessToken}`,
          'X-CSRF-TOKEN': '4f2F5SrhJHlWgU4n4lw8jnOd3lWlzFHSEtm6wkRl'
        }
      });
      
      navigation.navigate("Home", {
        screen: "Main",
        params: {
          tongkind: userInfo.tcom,
          inBoundEmail: userInfo.inbound_email,
        },
      });
      return userInfo;

    } catch (error) {
      Alert.alert(
        '로그인 과정에서 오류가 발생하였습니다.',
        '불편하시지만 재로그인 부탁드릴게요',
        [
          {
            text: '확인',
            onPress: async () => {await AsyncStorage.clear()}
          }
        ]
        )
      
    }
  }
  }
  
  /** 테스트 시 사용하세요. */
  // const removeAsyncStorage = async () => {
  //   await AsyncStorage.clear()
  // }

  useLayoutEffect(() => {
    // removeAsyncStorage(); 
    checkExistUserHandler();
  }, []);

  return (
    <View style={styles.greeting}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.splashImage}
      />
      <View style={{position:'absolute',bottom:20,justifyContent:'center'}}>
      <P_20R style={{color:'#fff'}}>새로워진 통신닥터! {version ? `ver ${version}` : ''}</P_20R>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greeting: {
    position:'relative',
    flex: 1,
    backgroundColor: '#2D63E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 224,
    height: 87,
  },
  onboarding: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
