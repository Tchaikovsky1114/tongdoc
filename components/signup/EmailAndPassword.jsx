import {TextInput, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import H4_24R from '../../style/H4_24R'
import P_14R from '../../style/paragraph/P_14R'
import CheckBox from '../common/CheckBox'
import Button from '../common/Button'


export default function EmailAndPassword() {
  const [totalCheck,setTotalCheck] = useState(false)

  const toggleTotalCheckHandler = () => {
    setTotalCheck(prev => !prev)
  }
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
        <View style={styles.checkBoxGroup}>
        <CheckBox style={{marginRight:8}} type="full" onPress={toggleTotalCheckHandler} totalCheck={totalCheck} setTotalCheck={setTotalCheck} />
        <P_14R>전체동의</P_14R>
        </View>
        <View style={styles.checkBoxGroup}>
          <CheckBox style={{marginRight:8}} type="non-outline" totalCheck={totalCheck} setTotalCheck={setTotalCheck}/>
          <P_14R>(필수) 서비스 이용약관</P_14R>
        </View>
        <View style={styles.checkBoxGroup}>
          <CheckBox style={{marginRight:8}} type="non-outline" totalCheck={totalCheck} setTotalCheck={setTotalCheck}/>
          <P_14R>(필수) 개인정보 수집 및 이용동의</P_14R>
        </View>
        <View style={styles.checkBoxGroup}>
          <CheckBox style={{marginRight:8}} type="non-outline" totalCheck={totalCheck} setTotalCheck={setTotalCheck}/>
          <P_14R>(선택) 제3자 정보제공동의</P_14R>
        </View>
        <View style={styles.checkBoxGroup}>
          <CheckBox style={{marginRight:8}} type="non-outline" totalCheck={totalCheck} setTotalCheck={setTotalCheck}/>
          <P_14R>(선택) 마케팅정보 활용 및 수신동의</P_14R>
        </View>
      </View>
      </View>
      <Button onPress={() => {console.log('clicked')}} text="확인" buttonStyle={{backgroundColor:'#2D63E2'}} textStyle={{color:'#fff'}} />
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
  },
  checkBoxGroup:{
    flexDirection:'row',
    rowGap:8,
    marginBottom:8,
    alignItems:'center'
  },
  
})