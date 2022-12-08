import { ActivityIndicator, SafeAreaView, StyleSheet, Text, Modal,View, TextInput } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import H4_24R from '../../style/H4_24R'
import { ScrollView } from 'react-native-gesture-handler'
import ImageButton from '../common/ImageButton'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import InquiryItem from './inquiry/InquiryItem'
import InquiryModal from './inquiry/InquiryModal'

export default function Inquiry() {
  const [inquiries,setInquiries] = useState()
  const [isInquiryModalVisible,setIsInquiryModalVisible] = useState(false);
  const getInquiryList = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get('https://api.tongdoc.co.kr/v1/info/question',{
        headers:{
          Authorization: `Bearer ${token}`
      }
      })
      setInquiries(data);
    } catch (error) {
      console.error(error)
    }  
  }
  
  const showInquiryModalHandler = useCallback(() => {
    setIsInquiryModalVisible(prev => !prev)
  },[])
  
  useLayoutEffect(() => {
    getInquiryList();
  },[])
 
  return (
    <>
    {
      isInquiryModalVisible && (
      <InquiryModal isInquiryModalVisible={isInquiryModalVisible} showInquiryModalHandler={showInquiryModalHandler} />
      )
    }
    <SafeAreaView style={styles.container}>
      <H4_24R style={{marginVertical:40}}>1:1 문의</H4_24R>

      <ScrollView contentContainerStyle={styles.inquiryList}>
        <InquiryItem subject="통닥으로 1:1 문의를 남겨주세요." id={0} badgeText="1:1 문의 안내" />
        {
          !inquiries
          ? <ActivityIndicator />
          : inquiries.questions.map((item) => (
              <InquiryItem
                id={item.id}
                badgeText={item.answer ? '답변완료' : '미답변'}
                subject={item.subject}
                key={item.id}
              />
          )) 
        }
      { (inquiries && inquiries.questions.length === 0) && <Text>'문의 내역이 없습니다'</Text> }
      </ScrollView>
      <ImageButton onPress={showInquiryModalHandler} imageURL={require('../../assets/custom-service/writeinquiry.png')} imageStyle={{width:48,height:48}} buttonStyle={{position:'absolute',bottom:24,right:24}} />
    </SafeAreaView>
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
  inquiryList:{

  },
  inquiryItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center', 
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    padding:8
  },
  badge:{
    backgroundColor:'#F6F9FF',
    padding:8,
    borderRadius:8
  }
})