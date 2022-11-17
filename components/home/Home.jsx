import { Dimensions,Image,SafeAreaView, StyleSheet, Text, View,useWindowDimensions, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import SendingBillsKT from '../sendingBills/KT/SendingBillsKT';
import SendingBillsSKT from '../sendingBills/SKT/SendingBillsSKT';
import Banner from './Banner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const {width} = Dimensions.get('window');

export default function Home() {
  
  // const test = async () => {
  //   const fofo = await AsyncStorage.getItem('access');
  //   try {
  //     const data = await axios.get(`https://api.tongdoc.co.kr/v1/doctor?year=2022&month=10`,
  //     {
  //       headers:{
  //         withCredentials: true,
  //         'accept':'application/json',
  //         'content-type':'application/json',
  //         'X-CSRF-TOKEN': 'PnLhVTmJkr2OGrmRDGVk8baoHn9b1PaehLnNb4RY',
  //         'access_token':fofo
  //       }
  //     }
  //   )
        
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   console.log(fofo);
  // }
  // useEffect(() => {
  //   test()
  // },[])
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.header}>
          <Image style={{width:94,height:24}} source={require('../../assets/common/logo.png')} />
          <Image style={{width:24,height:24}} source={require('../../assets/common/bell.png')} />
        </View>
        <View><Text>가족등록안했다면 보이는 메세지</Text></View>
        <Pressable style={({pressed}) => []}>
        <Banner />
        </Pressable>
        <View><Text>UserReview</Text></View>
        <View><Text>Articles</Text></View>
      </View>
      {/* <SendingBillsSKT /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex:1,
    marginTop:75,
    paddingHorizontal:24
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  Banner: {},
  review:{},
  articles:{}
});
