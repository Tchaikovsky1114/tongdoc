import { Pressable, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import P_14R from '../../../style/paragraph/P_14R'
import P_12M from '../../../style/paragraph/P_12M'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const InquiryItem = ({subject,id,badgeText}) => {
  const navigation = useNavigation()
  const [inquiryDetail,setInquiryDetail] = useState()
  
  const getInquiryDetailHandler = async (id) => {
    if(id === 0) return;
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get(`https://api.tongdoc.co.kr/v1/info/question/${id}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setInquiryDetail(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if(!inquiryDetail) return;
    navigation.navigate('InquiryDetails',{
      inquiryDetail
    });
  }, [inquiryDetail])

  return (
    <Pressable
      onPress={() => getInquiryDetailHandler(id)}
      style={({pressed}) => [styles.inquiryItem,{backgroundColor: pressed ? '#f6f9ff' : '#fff'}]}>
    <View>
      <P_14R style={{color:'#333'}}>{subject}</P_14R>
    </View>
     <View style={[styles.badge,{backgroundColor:badgeText === '미답변' ? '#f7f7f7' : '#F6F9FF',}]}>
      <P_12M style={{color:badgeText === '미답변' ? '#666' : '#2D63E2'}}>{badgeText}</P_12M>
     </View>
  </Pressable>
  )
}

export default React.memo(InquiryItem);

const styles = StyleSheet.create({
  inquiryItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center', 
    paddingBottom:16,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    paddingHorizontal:8,
    paddingTop:24
  },
  badge:{
    padding:8,
    borderRadius:8
  }
})