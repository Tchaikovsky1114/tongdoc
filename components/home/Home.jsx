import {
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Alert,
  BackHandler,
  RefreshControl
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Banner from './Banner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AddFamilyBanner from './AddFamilyBanner';
import PhoneContractDateCalculatorBanner from './PhoneContractDateCalculatorBanner';
import TongdocNews from './TongdocNews';
import Reviews from './Reviews';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { loggedUserState } from '../../store/loggedUser';
import Toast from 'react-native-toast-message'

export default function Home() {
  const navigation = useNavigation();
  
  const [isAddFamilyBannerShow, SetIsAddFamilyBannerShow] = useState(true);
  const [mainConfiguringData, setMainConfiguringData] = useState();
  const [diagnosisResultData, setDiagnosisResultData] = useState();
  const [currentUser,setCurrentUser] = useRecoilState(loggedUserState);
  const closeAddFamilyBannerHandler = useCallback(() => {
    SetIsAddFamilyBannerShow(false);
  }, []);

  const showPrepareServiceAlertHandler = useCallback(() => {
    return Alert.alert('현재 서비스 준비 중인 페이지입니다.', '', [
      {
        text: '확인',
        onPress: () => navigation.navigate('Main'),
      },
    ]);
  },[]);

  const goToPageHandler = (page) => {
    navigation.navigate(page);
  };

  /** 메인 화면을 구성하는 정보와 유저 정보를 받아오는 함수입니다 */
  const fetchGetMainConfiguringData = async () => {
    const token = await AsyncStorage.getItem('access');

    try {
      const { data } = await axios.get('https://api.tongdoc.co.kr/v1', {
        headers: {
          accept: 'applycation/json',
          Authorization: `Bearer ${token}`,
          // 'X-CSRF-TOKEN': 'CJTzj9l5WROahObvRB98RHjc6pNI8rb9T2FEJ9LG'
        },
      });
      setMainConfiguringData(data);  
    } catch (error) {
      console.error(error);
    }
    
    try {
      const { data } = await axios.get('https://api.tongdoc.co.kr/v1/user',{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCurrentUser(data);
      } catch (error) {
        console.error(error);
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
      setDiagnosisResultData(data);  
    } catch (error) {
      console.error(error)
    }
  };

  

  // FCM을 사용한다면..?
  // const hintChangeBillingEmailPushNotification = async () => {
  //   try {
  //     await fetch('https://fcm.googleapis.com/fcm/send', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `key=AIzaSyD8VQEdXQpVctHxbq0BV4X2cq7uCnVYrqM`,
  //       },
  //       body: JSON.stringify({
  //         to: currentUser.userPushToken,
  //         priority: 'normal',
  //         data: {
  //           experienceId: '@ermerskim/tongdoc_app',
  //           scopeKey: '@ermerskim/tongdoc_app',
  //           title: `청구서 이메일을  ${currentUser.inbound_email}로 변경해주세요!`,
  //           message: '가입하신 통신사의 고객센터 / 어플리케이션으로 변경 가능합니다! 🌐',
  //           icon: '../../assets/push.png'
  //         },
  //       }),
  //     });  
  //   } catch (error) {
  //     console.error(error)
  //   }
  // };

  /** 로그인 시 요금서 청구 받는 이메일을 당사의 인바운드 이메일로 변경하라는 푸시 알림을 보내는 함수입니다 */
  const hintChangeBillingEmailPushNotification = async () => {
    const message = {
      to: currentUser.device_token,
      sound:'default',
      title:`청구서 이메일을 ${currentUser.inbound_email}로 변경해주세요!`,
      body: '가입하신 통신사의 고객센터 / 어플리케이션으로 변경 가능합니다!',
      data:{
        messageType : 'inboundEmail'
      }
    }
    try {
      await axios.post('https://exp.host/--/api/v2/push/send',
      message,{
        headers: {
          Accept: 'application/json',
          "Accept-encoding": 'gzip,deflate',
          "Content-Type":"application/json"
        }
      })
    } catch (error) {
    console.error(error);  
    }
  }
  const showToast = () => {
    Toast.show({
      type:'refreshToast',
      autoHide:true,
      text1:'페이지 새로고침 ✨',
      visibilityTime:1000,
      position:'bottom',
      bottomOffset:20
    })
  }

  /** 기기의 백버튼을 누르면 splash image로 넘어가는 것이 아니라, 앱 종료를 묻는 알럿이 뜨게 만드는 함수입니다.*/
  const confirmExitAppHandler = useCallback(() => {
    Alert.alert(
      '통신닥터를 종료할까요?',
      '',
      [{
        text: '아니요',
        onPress: () => null,
        style: "cancel"
      },
      {
        text: "네",
        onPress: () => BackHandler.exitApp()
      }],
      {
        cancelable:true
      }
    )
    return true
  },[])

  useEffect(() => {
    fetchGetMainConfiguringData();
    fetchGetDiagnosisData();  
  }, [])

  useEffect(() => {
    if(!currentUser) return;
    hintChangeBillingEmailPushNotification();
  }, [currentUser])
  

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress",confirmExitAppHandler);
    return () => backHandler.remove()
  }, [])
  
  // Notification.addNotificationReceivedListener((notification) => {})
  

  
  return (
    <ScrollView contentContainerStyle={styles.container} refreshControl={
      <RefreshControl
      refreshing={false}
      enabled
      colors={["#fff","#f91","#f51","#c31","#ff3","#2df"]}
      progressBackgroundColor="#4499FA"
      onRefresh={() => {fetchGetDiagnosisData(); showToast();}}
      />
    }>
      
      {mainConfiguringData && diagnosisResultData ? (
        <>
          <View style={styles.topInner}>
            {isAddFamilyBannerShow && (
              <AddFamilyBanner onPress={closeAddFamilyBannerHandler} />
            )}
            <Pressable
              onPress={() => goToPageHandler('Diagnosis')}
              style={({ pressed }) => []}
            >
              <Banner
                diagnosisResultData={diagnosisResultData}
                mainConfiguringData={mainConfiguringData}
              />
            </Pressable>

            <Pressable
              onPress={showPrepareServiceAlertHandler}
              style={({ pressed }) => []}
            >
              <PhoneContractDateCalculatorBanner />
            </Pressable>
            <Pressable
              onPress={showPrepareServiceAlertHandler}
              style={({ pressed }) => []}
            >
              <TongdocNews mainConfiguringData={mainConfiguringData} />
            </Pressable>
          </View>
          <View style={styles.bottomInner}>
            <Reviews mainConfiguringData={mainConfiguringData.doctor.review} />
          </View>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    paddingBottom: 4,
  },
  topInner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  bottomInner: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Banner: {},
  review: {},
  articles: {},
});
