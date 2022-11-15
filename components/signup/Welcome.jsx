import { StyleSheet, Pressable, View,Image,Text,Dimensions } from 'react-native'
import React,{useEffect,useRef,useState} from 'react'
import { useRecoilValue } from 'recoil'
import {signupState} from '../../store/signup'
import H4_24R from '../../style/H4_24R'
import Button from '../common/Button'
import useSendPushNotification from './utils/sendPushNotification'
import * as Notifications from 'expo-notifications'

const {width} = Dimensions.get('window')

  // const sendPushNotificationForWelcome = async () => {
  //   await useSendPushNotification({
  //     pushToken:userInfo.userPushToken,
  //     message:'is this working????'
  //   })
  // }

  // useEffect(() => {
  //   sendPushNotificationForWelcome()
  // },[])


export default function Welcome({navigation}) {
  const userInfo = useRecoilValue(signupState);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  async function schedulePushNotification() {
    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `안녕하세요, ${userInfo.name}님! 📬`,
        body: '통신닥터의 회원이 되신 것을 진심으로 축하드립니다!',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  }

  const moveToHomeScreenHandler = () => {
    navigation.navigate('Home')
  }

  useEffect(() => {
    schedulePushNotification()
  },[])


  
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
      <Image style={styles.welcomeImage} source={require('../../assets/signup/submitsignup.png')} />
      <H4_24R style={{textAlign:'center'}}>{userInfo.name}님 환영합니다:)</H4_24R>
      <Button text="확인" onPress={moveToHomeScreenHandler} buttonStyle={{width,position:'absolute',bottom:0}} textStyle={{fontSize:17}} totalTermsCheck />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  welcomeImage:{
    width:120,
    height:100,
    marginBottom:16
  },
  inner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:-96
  }
})