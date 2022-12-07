import { ActivityIndicator, Pressable, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import H2_28M from '../../../style/H2_28M'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import P_14R from '../../../style/paragraph/P_14R'
import P_12R from '../../../style/paragraph/P_12R'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


export default function Notice() {
  const naivgation = useNavigation();
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

  const moveToDetailPage = (id) => {
    naivgation.navigate('Notice/Details',{
      detailsId:id,
    })
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
      :<ScrollView contentContainerStyle={styles.noticeWrapper} showsVerticalScrollIndicator={false}>
      {notice.forwards.map((item) => (
        <Pressable onPress={() => moveToDetailPage(item.id)} style={({pressed}) => [styles.noticeItem,{backgroundColor: pressed ? '#F6F9FF' : '#fff'}]} key={item.id}>
          <P_14R style={{color:'#333'}}>{item.subject}</P_14R>  
          <P_12R style={{color:'#666'}}>
            {item.created_at.split('/')[0]}년 {item.created_at.split('/')[1]}월 {item.created_at.split('/')[2]}일
          </P_12R>
        </Pressable>
      ))}
      </ScrollView>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:24,
    backgroundColor:'#fff'
  },
  title:{
    marginVertical:40,
  },
  noticeWrapper:{
  },
  noticeItem:{
    borderBottomWidth:1,
    borderBottomColor:'#DDD',
    
    paddingTop:24,
    paddingBottom:24,
  }
})
