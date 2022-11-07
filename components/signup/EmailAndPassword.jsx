import {TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import H4_24R from '../../style/H4_24R'
import P_14R from '../../style/paragraph/P_14R'


export default function EmailAndPassword() {
  return (
    <View style={styles.container}> 
    <View style={styles.inner}>
      <View style={styles.heading}>
      <H4_24R>회원가입</H4_24R>
      <P_14R style={styles.subTitle}>서비스 이용을 위해 본인 이메일을 입력해 주세요.</P_14R>
      </View>
        <TextInput />
        <TextInput />
        <TextInput />
        <TextInput />
      <View style={styles.body}>

      </View>
      <View style={styles.bottom}>
        <Text>전체동의</Text>
        <Text>필수</Text>
        <Text>필수</Text>
        <Text>선택</Text>
        <Text>선택</Text>
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
  inner:{
    flex:1,
    marginTop:40,
    paddingHorizontal:24
  },
  heading:{
    flex:2
  },
  body:{
    flex:4
  },
  bottom:{
    flex:4
  },
  subTitle:{
    color:'#666666',
    marginTop:16
  }
})