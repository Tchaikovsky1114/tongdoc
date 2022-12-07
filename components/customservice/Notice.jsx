import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import H2_28M from '../../style/H2_28M'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import P_14R from '../../style/paragraph/P_14R'
import P_12R from '../../style/paragraph/P_12R'


export default function Notice() {
  const [notice,setNotice] = useState();

  const getNotice = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get('https://api.tongdoc.co.kr/v1/info/forward',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      setNotice(data)  
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    getNotice()
  },[])
  
  return (
    <SafeAreaView style={styles.container}>
      <H2_28M style={styles.title}>공지사항</H2_28M>
      {
      !notice
      ? <ActivityIndicator />
      :<View>
      {notice.forwards.map((item) => (
        <View key={item.id}>
          <P_14R>{item.subject}</P_14R>  
          <P_12R>{item.created_at}</P_12R>
        </View>
      ))}
      </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:24
  },
  title:{
    marginVertical:40
  }
})