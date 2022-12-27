import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView,Alert, Button,Text, View, Pressable} from 'react-native';
import Home from '../components/home/Home';
import HomeModal from '../components/sendingBills/homeModal/HomeModal';
import {FCM_KEY} from 'react-native-dotenv';
import { loggedUserState } from '../store/loggedUser';
import { useRecoilState } from 'recoil';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking'
import H2_28M from '../style/H2_28M';
import P_18M from '../style/paragraph/P_18M';



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
  
  /** 로그인 시 요금서 청구 받는 이메일을 당사의 인바운드 이메일로 변경하라는 푸시 알림을 보내는 함수입니다 */
  const hintChangeBillingEmailPushNotification = async (inboundEmail) => {
    try {
      const pushToken = (await Notifications.getDevicePushTokenAsync()).data;
      const { data } = await axios.post('https://fcm.googleapis.com/fcm/send',{
        to: pushToken,
        priority: 'normal',
        data: {
          experienceId: '@ermerskim/tongdoc_app',
          scopeKey: '@ermerskim/tongdoc_app',
          title: `청구서 이메일을 ${inboundEmail}로 변경해주세요!`,
          message: '가입하신 통신사의 고객센터 또는 통신사 앱에서 변경 가능합니다.',
          icon: '../../assets/push.png',
          // prefix를 변경해야함. 
          // kr.co.tongdoc:// 은 foreground 상태에서 이동되긴 하지만 background 상태에서는 이동하지 못함 
          // pageLink에 대한 개선 필요..
          link:`https://tongdoc-9a7a9.page.link/mypage`,
          image:'../assets/icon.png',
        },
      },{
        headers:{
          'Content-Type': 'application/json',
          Authorization: `key=${FCM_KEY}`,
        }
      })
      // 발송 실패가 error로 response 되지 않고 success 처리 후 관련 메세지가 전송되기에 주시해야 합니다.
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

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
              .then((resolve) => {
                if(resolve){
                  hintChangeBillingEmailPushNotification(resolve.inbound_email);
                }
              })
            })
           })
        }
      })
      // Signin 컴포넌트에서 redirect 되면서 route.params를 받아옵니다
      // 위 함수를 실행하기 위해서는 route.params의 값이 필수이기에 의존성 배열의 값을 지우면 안됩니다.
  }, [route]);
  
  return (
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="dark" />
          { (!mainConfiguringData || !diagnosisResultData)
          ? <ActivityIndicator />
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
