import {Dimensions, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import H4_24R from '../../style/H4_24R'
import P_14R from '../../style/paragraph/P_14R'
import P_16M from '../../style/paragraph/P_16M'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import * as SMS from 'expo-sms'
const { width } = Dimensions.get('window');

export default function AddInternet() {
  const navigation = useNavigation()
  const [internetForm,setInternetForm] = useState({
    name:'',
    phoneNumber:''
  })
  const [telecoms,setTelecoms] = useState({
    LG: 'LGU+',
    SKT: 'SKT',
    KT: 'KT',
    
  })
  const [isBorderHighlight,setIsBorderHighlight] = useState(false);
  const [isBorderHighlight2,setIsBorderHighlight2] = useState(false);
  const [isBorderHighlight3,setIsBorderHighlight3] = useState(false);
  const [isChoiceTelecomModalVisible,setIsChoiceTelecomModalVisible] = useState(false);
  const [selectedTelecom,setSelectedTelecom] = useState('')
  const onChangeTextHandler = useCallback((name,text) => {
    setInternetForm((prev) => ({
      ...prev,
      [name]:text
    }))
  },[])


  const showChoiceTelecomModalHandler = useCallback(() => {
    setIsChoiceTelecomModalVisible(prev => !prev);
  }, [])
  
  const postAddInternetHandler = async() => {
    const token = await AsyncStorage.getItem('access');
    let message = '';
    try {
      const { data } = await axios.post('https://api.tongdoc.co.kr/v1/family',{
        "family_name": internetForm.name,
        "family_type": 'internet',
        "phone_number": internetForm.phoneNumber,
        "telecom":selectedTelecom
      },{
        headers: {
          Authorization:` Bearer ${token}`
        }
      })  
      message = data.send_message;
    } catch (error) {
      console.error(error)
    }
    const isAvailable = SMS.isAvailableAsync()
    if(isAvailable){
      
      try {
        const { result } = SMS.sendSMSAsync(
          internetForm.phoneNumber,
          message
        )
        navigation.navigate('Diagnosis',{
          internet:true
        })
      } catch (error) {
        
      }
    }
    
  }
  return (
    <>
    <Modal
    animationType='fade'
    transparent={true}
    visible={isChoiceTelecomModalVisible}
    onRequestClose={showChoiceTelecomModalHandler}
    >
      <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.2)',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:'80%',backgroundColor:'#fff',padding:16,borderRadius:8}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
            <P_16M>통신사 선택하기</P_16M>
            <Pressable onPress={showChoiceTelecomModalHandler}>
            <Image style={{width:16,height:16}} source={require('../../assets/xBtn.png')} />
            </Pressable>
          </View>
          <View>
            <Pressable onPress={() => {setSelectedTelecom(telecoms.SKT); showChoiceTelecomModalHandler() }} style={({pressed}) => [{backgroundColor:pressed ? '#f6f9ff' : '#fff',marginBottom:8}]}>
              <P_14R style={{color:'#333'}}>SKT(SKB)</P_14R>
            </Pressable>
            <Pressable onPress={() => {setSelectedTelecom(telecoms.KT); showChoiceTelecomModalHandler()} } style={({pressed}) => [{backgroundColor:pressed ? '#f6f9ff' : '#fff',marginBottom:8}]}>
              <P_14R style={{color:'#333'}}>KT</P_14R>
            </Pressable>
            <Pressable onPress={() => {setSelectedTelecom(telecoms.LG); showChoiceTelecomModalHandler()} } style={({pressed}) => [{backgroundColor:pressed ? '#f6f9ff' : '#fff',marginBottom:8}]}>
              <P_14R style={{color:'#333'}}>LG U+</P_14R>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>

    <View style={styles.container}>
      <H4_24R>인터넷 가입정보 {'\n'}등록하기</H4_24R>
      <View style={{marginTop:16,marginBottom:40}}>
        <P_14R style={{color:'#666'}}>가족 등록은 함께 거주하지 않더라도 가능합니다. (배우자, 부모, 자녀, 형제자매, 며느리, 사위 등)</P_14R>
      </View>
      
      <Pressable onPress={showChoiceTelecomModalHandler} style={({pressed}) => [styles.inputBox,{borderBottomColor:isBorderHighlight ? '#2D63E2' :'#ddd',backgroundColor:pressed ? '#f6f9ff' : '#fff'}]}>
        <View style={{height:46,flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
        <P_14R style={{color:'#333'}}>{selectedTelecom || '통신사를 선택해주세요'}</P_14R>
        <Image style={{width:30,height:30}} source={require('../../assets/downIcon.png')} />
        </View>
      </Pressable>
      <View style={[styles.inputBox,{borderBottomColor:isBorderHighlight ? '#2D63E2' :'#ddd',}]}>
        <TextInput onFocus={() => setIsBorderHighlight(() => true)} onBlur={() => setIsBorderHighlight(() => false)} placeholderTextColor="#333" onChangeText={(text) => onChangeTextHandler('name',text)} value={internetForm.name} cursorColor="#2d63e2" style={styles.input} placeholder='인터넷 가입 명의자 이름 (실명)' />
      </View>
      <View style={[styles.inputBox,{borderBottomColor:isBorderHighlight2 ? '#2D63E2' :'#ddd',}]}>
        <TextInput onFocus={() => setIsBorderHighlight2(() => true)} onBlur={() => setIsBorderHighlight2(() => false)} placeholderTextColor="#333" onChangeText={(text) => onChangeTextHandler('phoneNumber',text)} value={internetForm.phoneNumber} keyboardType='phone-pad' cursorColor="#2d63e2" style={styles.input} placeholder='명의자 휴대폰 번호 (- 없이 숫자만 입력해 주세요.)' />
      </View>
      <Pressable onPress={postAddInternetHandler} style={({pressed}) => [{backgroundColor:pressed ? '#2D63E278' : '#2d63e2',height:58,alignItems:'center',justifyContent:'center',position:'absolute',bottom:0,width}]}>
        <P_16M style={{color:'#fff'}}>문자 동의 요청</P_16M>
      </Pressable>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:24,
    position:'relative'
  },
  inputBox:{
    borderBottomWidth:1, 
    alignItems:'flex-start',
    justifyContent:'center',
    marginTop:16,
  }
  ,
  input:{ 
    fontFamily:'Noto400',
    fontSize:14,
    height:30,
    width:'100%'
  }
})