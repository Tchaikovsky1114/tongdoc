import { StyleSheet, Pressable, View,Image,Text,Dimensions } from 'react-native'
import React from 'react'
import { useRecoilValue } from 'recoil'
import {signupState} from '../../store/signup'
import H4_24R from '../../style/H4_24R'
import Button from '../common/Button'


const {width} = Dimensions.get('window')

export default function Welcome() {
  const userInfo = useRecoilValue(signupState);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
      <Image style={styles.welcomeImage} source={require('../../assets/signup/submitsignup.png')} />
      <H4_24R style={{textAlign:'center'}}>{userInfo.name}님 환영합니다:)</H4_24R>
      
      <Button text="확인" onPress={() => {}} buttonStyle={{width}} textStyle={{fontSize:17}} />
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
    marginTop:230,
    justifyContent:'center',
    alignItems:'center'
  }
})