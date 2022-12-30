import { Pressable,StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import H4_24R from '../../style/H4_24R'

import { useNavigation } from '@react-navigation/native'

export default function ChoiceSignMethod() {
  const navigation = useNavigation()

  const moveSignupPageHandler = useCallback(() => {
    navigation.navigate('Certification')
  },[])
  const moveSigninPageHandler = useCallback(() => {
    navigation.navigate('Signin')
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <H4_24R>시작하려면{'\n'}로그인 혹은 회원가입이{'\n'}필요합니다.</H4_24R>
      <View style={{marginTop:40}}>
      <Pressable onPress={moveSigninPageHandler} style={({pressed}) => [styles.button,{marginBottom:24,backgroundColor: pressed ? 'rgba(45,99,255,0.8)' : 'rgb(45, 99, 226)'}]}>
      <View style={[styles.button]}>
        <View><Text style={[styles.buttonTitle,{color:'#fff'}]}>로그인</Text></View>
      </View>
      </Pressable>
      
      <Pressable  onPress={moveSignupPageHandler} style={({pressed}) => [styles.button,{borderWidth:1,borderColor: pressed ? 'rgba(45,99,255,0.3)' : '#2D63E2'}]}>
        {({pressed}) => <Text style={[styles.buttonTitle,{color:pressed ? 'rgba(45,99,255,0.3)' :'#2D63E2'}]}>회원가입</Text>}
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
    borderColor:'#2d63e2',
    borderRadius:8
    
  },
  buttonTitle:{
    textAlign:'center',
    fontFamily:'Noto500',
    fontSize:16,
  }
})