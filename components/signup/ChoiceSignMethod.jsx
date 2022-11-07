import { Pressable,StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import H4_24R from '../../style/H4_24R'
import Button from '../common/Button'
import { useNavigation } from '@react-navigation/native'

const {width} = Dimensions.get('window')

export default function ChoiceSignMethod() {
  const navigation = useNavigation()

  const moveSignupPageHandler = () => {
    navigation.navigate('Signup/Certification')
  }
  const moveSigninPageHandler = () => {
    navigation.navigate('Signin')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <H4_24R>시작하려면{'\n'}로그인 혹은 회원가입이{'\n'}필요합니다.</H4_24R>


      <View style={{marginTop:40}}>

      <Pressable onPress={moveSigninPageHandler} >
      <View style={[styles.button,{backgroundColor:'#2d63e2',borderRadius:8,marginBottom:24}]}>
        <View><Text style={[styles.buttonTitle,{color:'#fff'}]}>로그인</Text></View>
      </View>
      </Pressable>
      
      <Pressable  onPress={moveSignupPageHandler}>
      <View style={[styles.button,{borderColor:'#2D63E2',borderRadius:8}]}>
        <View><Text style={[styles.buttonTitle,{color:'#2D63E2'}]}>회원가입</Text></View>
      </View>
      </Pressable>
      </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    
  },
  header:{
    flex:1,
    backgroundColor:'#fff',
    marginTop:43,
    paddingHorizontal:24
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    height:50,
    borderWidth:1,
    borderColor:'#ccc'
  },
  buttonTitle:{
    textAlign:'center',
    fontFamily:'Noto500',
    fontSize:16
  }
})