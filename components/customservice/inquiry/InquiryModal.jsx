import { Dimensions,StyleSheet, Text, View,TextInput,Modal, Pressable, Alert, KeyboardAvoidingView, ScrollView, } from 'react-native'
import * as Linking from 'expo-linking'
import React, { useState } from 'react'
import ImageButton from '../../common/ImageButton'
import P_16R from '../../../style/paragraph/P_16R'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import P_14R from '../../../style/paragraph/P_14R';
import P_12R from '../../../style/paragraph/P_12R';
import P_18R from '../../../style/paragraph/P_18R';
import { loggedUserState } from '../../../store/loggedUser';
import { useRecoilState } from 'recoil';


const { width } = Dimensions.get('window');

export default function InquiryModal({isInquiryModalVisible,showInquiryModalHandler}) {
  const navigation = useNavigation()
  const [currentUser,setCurrentUser] = useRecoilState(loggedUserState);
  const [isTitleBorderHighlight,setIsTitleBorderHighlight] = useState(false)
  const [isAlertModalVisible,setIsAlertModalVisible] = useState(false)
  const [inquiryValues,setInquiryValues] = useState({
    subject:'',
    contents:''
  })

  const onChangeTextHandler = (name,text) => {
    if(inquiryValues.contents.length > 299){
      const limitword = inquiryValues.contents.split('')
      limitword.pop()
      setInquiryValues(prev => ({
        ...prev,
        contents:limitword.join('')
      }))
      return;
    }
      setInquiryValues((prev) => ({
        ...prev,
        [name]:text
      }))
  }

  const hintSentInquiryPushNotification = async () => {
    const prefix = Linking.createURL('/');
    const message = {
      to: currentUser.device_token,
      sound:'default',
      title:`1:1 문의가 등록되었습니다.`,
      body: '답변이 도착하면 알려드릴게요',
      data: {
        messageType : 'sendInquiry',
        url: `${prefix}/myinquiry`
      }
    }
      await axios.post('https://exp.host/--/api/v2/push/send',
      message,{
        headers: {
          Accept: 'application/json',
          "Accept-encoding": 'gzip,deflate',
          "Content-Type":"application/json"
        }
      })
  }

  const postInquiryHandler = async () => {
      const token = await AsyncStorage.getItem('access');
      const {subject,contents} = inquiryValues;
      if(subject.length < 10 || contents.length < 10){
        Alert.alert(
          '제목과 내용은 10자 이상이어야 해요',
          '',[
            {
              text:'확인',
              onPress: () => null
            }
          ])
          return;
      }
        try {
          await axios.post('https://api.tongdoc.co.kr/v1/info/question',{
            subject,
            contents
          },{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
          showInquiryModalHandler()
          hintSentInquiryPushNotification()
          navigation.navigate('CustomService')
        } catch (error) {
          console.error(error);
        }
      }
  
  return (
    <>
    {
    isAlertModalVisible
    && <Modal
    animationType='fade'
    transparent={true}
    visible
    onRequestClose={() => setIsAlertModalVisible(prev => !prev)}
    >
      <View style={{backgroundColor:'rgba(0,0,0,0.2)',flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{width:312,height:200,backgroundColor:'#fff',borderRadius:8,justifyContent:'flex-start',alignItems:'center',padding:16}}>
          <View style={{marginTop:24}}>
            <P_18R style={{color:'#333',marginBottom:16,textAlign:'center'}}>작성하신 내용으로 문의할까요?</P_18R>
            <P_12R style={{color:'#666',textAlign:'center'}}>최대 1~3일 소요될 수 있어요.</P_12R>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',width:'100%',marginTop:16,}}>
            <Pressable onPress={() => setIsAlertModalVisible((prev) => !prev)} style={({pressed}) => [{flex:1,marginTop:16,height:50,justifyContent:'center',borderRadius:8,backgroundColor: pressed ? '#F6F9FF' : '#fff'}]}><P_18R style={{textAlign:'center',color:'#2D63E2'}}>취소</P_18R></Pressable>
            <Pressable onPress={postInquiryHandler} style={({pressed}) => [{flex:1,marginTop:16,backgroundColor: pressed ? '#2d75d0' : '#2D63E2',height:50,justifyContent:'center',borderRadius:8}]}><P_18R style={{textAlign:'center',color:'#fff'}}>확인</P_18R></Pressable>
          </View>
        </View>
      </View>
      
    </Modal>
    }
    
    <Modal
    animationType='slide'
    transparent={true}
    visible={isInquiryModalVisible}
    onRequestClose={showInquiryModalHandler}
    >
    <ScrollView contentContainerStyle={styles.scrollViewBox}>  
    <View style={styles.container}>
      <View style={styles.closeBox}>
        <ImageButton onPress={showInquiryModalHandler} buttonStyle={styles.closeButton} imageStyle={{width:24,height:24}} imageURL={require('../../../assets/common/close.png')} />
      </View>

      <View style={[styles.titleBox,{borderBottomColor:isTitleBorderHighlight ? '#2D63E2':'#ddd'}]}>
        <TextInput
        style={styles.input}
        cursorColor="#2D63E2"
        placeholder='제목을 입력해 주세요.'
        value={inquiryValues.subject}
        onChangeText={(text) => onChangeTextHandler('subject',text)}
        onFocus={() => setIsTitleBorderHighlight(true)}
        onBlur={() => setIsTitleBorderHighlight(false)}
        />
        
      </View>

      <View style={styles.contentBox}>
        <TextInput
        style={[styles.input,styles.contentInput]}
        cursorColor="#2D63E2"
        value={inquiryValues.contents}
        onChangeText={(text) => onChangeTextHandler('contents',text)}
        multiline
        numberOfLines={20}
        textAlignVertical="top"
        scrollEnabled
        placeholder='문의 내용을 입력해 주세요.' />
      </View>
      <View style={styles.footer}>
        <P_14R style={{color:inquiryValues.contents.length < 295 ? '#2D63E2' : 'red',marginBottom:24,textAlign:'right',paddingRight:24}}>{inquiryValues.contents.length} / 300</P_14R>
      <Pressable onPress={() => setIsAlertModalVisible(prev => !prev)} style={({pressed}) => [styles.submitButton,{backgroundColor: pressed ? 'rgba(49,99,226,0.78)' :'#2D63E2'}]}>
        <P_16R style={{color:'#fff',textAlign:'center'}}>문의하기</P_16R>
      </Pressable>
      </View>
    
    </View>
    </ScrollView>
  </Modal>
  </>
  )
}

const styles = StyleSheet.create({
  scrollViewBox:{
    position:'relative',
    flex:1,
  },
  container:{
    
    backgroundColor:'#fff',
    flex:1,
    paddingHorizontal:24,
    
  },
  closeBox:{
    alignItems:'flex-end',
    paddingTop:40
  },
  closeButton:{
    width:24,
    height:24,
    justifyContent:'center'
  },
  titleBox:{
    marginTop:40,
    justifyContent:'flex-end',
    borderBottomWidth:1,
    paddingBottom:8,
  },
  contentBox:{
    marginTop:24,
  },
  input:{
    fontFamily:'Noto400',
    paddingLeft:4,
  },
  contentInput:{
    paddingBottom:200
  },
  submitButton:{
    
    width,
    height:58,
    alignItems:'center',
    justifyContent:'center', 
  },
  footer:{
    position:'absolute',
    bottom:0,
  }
})