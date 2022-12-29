import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  SafeAreaView,Alert} from 'react-native';
import Home from '../components/home/Home';
import HomeModal from '../components/sendingBills/homeModal/HomeModal';
import {FCM_KEY} from 'react-native-dotenv';
import { loggedUserState } from '../store/loggedUser';
import { useRecoilState } from 'recoil';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking'
import H2_28M from '../style/H2_28M';
import P_18M from '../style/paragraph/P_18M';
import LoadingIndicator from '../components/common/LoadingIndicator';



const prefix = Linking.createURL('/')

export default function HomeScreen({ navigation,route }) {
  const [tcom,setTcom] = useState('');
  const [inboundEmail,setInboundEmail] = useState('');
  const [mainConfiguringData, setMainConfiguringData] = useState();
  const [diagnosisResultData, setDiagnosisResultData] = useState();
  const [currentUser,setCurrentUser] = useRecoilState(loggedUserState);
  
  
  /*
  * 어플리케이션 실행 시 유저가 어플리케이션 실행 이력이 있는 경우(asyncStorage에 refreshToken 확인) home으로 이동.
  * refreshToken이 있으면서 로그인 error가 발생하는 경우, AsyncStorage를 비우고 로그인 페이지로 redirecting.
  * 첫 접속 유저일 경우 OnBoarding 페이지로 이동
  */
      const checkExistUserHandler = async () => {      
        const refreshToken = await AsyncStorage.getItem('refresh');
        if(!refreshToken) {
         navigation.navigate('OnBoarding');
         return;
        }
        try {
          const token = await AsyncStorage.getItem('access');
          const {data:userInfo} = await axios.get('https://api.tongdoc.co.kr/v1/user',{
            headers:{
              'accept': 'application/json',
              'Authorization': `Bearer ${token}`,
              'X-CSRF-TOKEN': '4f2F5SrhJHlWgU4n4lw8jnOd3lWlzFHSEtm6wkRl'
            }
          });
          setTcom(() => userInfo.tcom);
          setInboundEmail(() => userInfo.inbound_email);
          return true;
        } catch (error) {
          navigation.navigate('Signin');
          Alert.alert(
            '토큰이 만료되어 로그인 페이지로 이동합니다.',
            '',
            [
              {
                text: '확인',
                onPress: async () => {await AsyncStorage.clear(); navigation.navigate('Signin');}
              }
            ]
            )
            return false;
        }
    }

  
    /** 메인 화면을 구성하는 정보와 유저 정보를 받아오는 함수입니다 */
  const fetchGetMainConfiguringData = async () => {
    
    const token = await AsyncStorage.getItem('access');
    if(!token) return;
    try {
      const { data } = await axios.get('https://api.tongdoc.co.kr/v1', {
        headers: {
          accept: 'applycation/json',
          Authorization: `Bearer ${token}`,
          // 'X-CSRF-TOKEN': 'CJTzj9l5WROahObvRB98RHjc6pNI8rb9T2FEJ9LG'
        },
      });
      return data;
    } catch (error) {
      console.error('1.메인화면');
    }
      
  };
  const fetchGetDiagnosisData = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get('https://api.tongdoc.co.kr/v1/doctor', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data
    } catch (error) {
      console.error('2.진단정보')
    }
  }
  const getUserInfo = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get('https://api.tongdoc.co.kr/v1/user',{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCurrentUser(() => data);
      
      // return 된 data의 inbound_email을 후속 메서드에서 사용합니다. 지우면 안됩니다.
      return data;
      } catch (error) {
        console.error('3.유저정보');
      }
  }
  


  useEffect(() => {
      checkExistUserHandler().then((resolve) => {
        if(resolve){
          fetchGetMainConfiguringData()
          .then((data) => {
            setMainConfiguringData(() => data);
            fetchGetDiagnosisData()
            .then((data) => {
              setDiagnosisResultData(() => data);
              getUserInfo()
            })
           })
          }
        })
      // 의존성 배열의 route
      // Signin 컴포넌트에서 redirect 되면서 route.params를 받아옵니다
      // 위 함수를 실행하기 위해서는 route.params의 값이 필수이기에 의존성 배열의 값을 지우면 안됩니다.
  }, [route]);
  
  return (
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="dark" />
          { (!mainConfiguringData || !diagnosisResultData)
          ? <LoadingIndicator />
          : <>
              <Home
                mainConfiguringData={mainConfiguringData}
                diagnosisResultData={diagnosisResultData}
                fetchGetMainConfiguringData={fetchGetMainConfiguringData}
              />
              {(tcom && inboundEmail) && <HomeModal tongkind={tcom} inBoundEmail={inboundEmail} />}
            </>
          }
      </SafeAreaView>
  );
}
