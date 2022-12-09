import {Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import * as SMS from 'expo-sms';

import H4_24R from '../../style/H4_24R'
import P_14R from '../../style/paragraph/P_14R'
import P_12R from '../../style/paragraph/P_12R'
import P_12M from '../../style/paragraph/P_12M'
import P_16M from '../../style/paragraph/P_16M'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window')

export default function AddFamily() {
  const navigation = useNavigation()
  const [addFamilyForm,setAddFamilyForm] = useState({
    familyName:'',
    familyPhoneNumber:''
  })
  const [SMSContents,setSMSContents] = useState('');
  
  const onChangeTextHandler = useCallback((property,text) => {
    setAddFamilyForm((prev) => ({
      ...prev,
      [property]:text
    }))
  },[])

  const sendSMSConsentHandler = async () => {
    const token = await AsyncStorage.getItem('access');
    let message = '';
    try {
      const { data } = await axios.post(
        'https://api.tongdoc.co.kr/v1/family',
      {
        family_name:addFamilyForm.familyName,
        family_type:'phone',
        phone_number:addFamilyForm.familyPhoneNumber
      },
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setSMSContents(data);
      message = data.send_message
    } catch (error) {
      console.error(error);
    }
    
    const isAvailable = await SMS.isAvailableAsync();
    
    if(isAvailable) {
      try {
        const { result } = await SMS.sendSMSAsync(
          addFamilyForm.familyPhoneNumber,
          message
        )
        navigation.navigate('Diagnosis',{
          add:true
        })
      } catch (error) {
        console.log(error);
      }
    }else{
      console.log('문자 사용 불가능 장치');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
      <H4_24R>가족 등록하기</H4_24R>
      <View style={{marginTop:16}}>
        <P_14R style={{color:'#666'}}>가족 등록은 함께 거주하지 않더라도 가능합니다. (배우자, 부모, 자녀, 형제자매, 며느리, 사위 등)</P_14R>
      </View>
      <View style={{marginTop:40}}>
        <TextInput onChangeText={(text) => onChangeTextHandler('familyName',text)} value={addFamilyForm.familyName} placeholderTextColor="#666" cursorColor="#2d63e2"  style={styles.input} placeholder='가족의 이름(실명)' />
        <TextInput keyboardType='phone-pad'  onChangeText={(text) => onChangeTextHandler('familyPhoneNumber',text)} value={addFamilyForm.familyPhoneNumber} placeholderTextColor="#666" cursorColor="#2d63e2" style={styles.input} placeholder='가족의 휴대폰 번호 (-없이 숫자만 입력해 주세요)' />
      </View>
      <View style={{marginTop:40,backgroundColor:'#F6F9FF',padding:8,borderRadius:8}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        
        <P_12M style={{marginRight:8,color:'#2D63E2'}}>1.</P_12M><P_12R style={{color:'#666',marginVertical:4}}>해당 가족에게 동의 요청 안내 문자를 발송합니다.</P_12R>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <P_12M style={{marginRight:8,color:'#2D63E2'}}>2.</P_12M><P_12R style={{color:'#666',marginVertical:4}}>해당 가족의 휴대폰 요금 청구서를 수신 후 가계통신비 점검이 진행됩니다.</P_12R>
        </View>
      </View>
      <Pressable onPress={sendSMSConsentHandler} style={({pressed}) => [{backgroundColor: pressed ? '#2D63E273' : '#2D63E2'},styles.bottomButton]}><P_16M style={{color:'#fff'}}>문자 동의 요청</P_16M></Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    position:'relative'
  },
  inner:{
    flex:1,
    marginTop:40,
    paddingHorizontal:24,
  },
  input:{
    fontFamily:'Noto400',
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    paddingTop:16,
    paddingBottom:2,
    alignItems:'center',
    justifyContent:'center'
  },
  bottomButton:{
    position:'absolute',
    bottom:0,
    height:58,
    justifyContent:'center',
    alignItems:'center',
    width
  }
})