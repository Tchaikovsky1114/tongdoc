import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import H4_24R from '../../../style/H4_24R'
import P_12R from '../../../style/paragraph/P_12R'
import P_14R from '../../../style/paragraph/P_14R'

export default function NoticeDetail({route}) {
  const {detailsId} = route.params
  const [noticeDetail,setNoticeDetail] = useState()
  console.log(detailsId)

  const getNoticeDetail = async (detailsId) =>{
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get(`https://api.tongdoc.co.kr/v1/info/forward/${detailsId}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
        })
        setNoticeDetail(data)  
    } catch (error) {
      console.error(error)
    }
    
  }
  useEffect(() => {
    getNoticeDetail(detailsId)
  },[route.params])

  

  return (
    <SafeAreaView style={styles.container}>
      {
        !noticeDetail
        ? <ActivityIndicator />
        :(<>
        <H4_24R style={styles.title}>{noticeDetail.subject}</H4_24R>
        <P_12R style={styles.date}>{noticeDetail.updated_at.split('/')[0]}년 {noticeDetail.updated_at.split('/')[1]}월 {noticeDetail.updated_at.split('/')[2]}일</P_12R>
        <P_14R style={styles.contents}>{noticeDetail.contents}</P_14R>
        </>)
        }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:24,
    
  },
  title:{
    marginTop:40,
    marginBottom:8,
  },
  date:{
    color:'#666',
  },
  contents:{
    marginTop:40,
    color:'#666'
  }
})