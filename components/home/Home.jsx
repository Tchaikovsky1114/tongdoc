import { Dimensions,Image,SafeAreaView, StyleSheet, Text, View,useWindowDimensions, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import SendingBillsKT from '../sendingBills/KT/SendingBillsKT';
import SendingBillsSKT from '../sendingBills/SKT/SendingBillsSKT';
import Banner from './Banner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AddFamilyBanner from './AddFamilyBanner';
import PhoneContractDateCalculatorBanner from './PhoneContractDateCalculatorBanner';
import TongdocNews from './TongdocNews';
import Reviews from './Reviews';

const {width} = Dimensions.get('window');

export default function Home() {
  const [isAddFamilyBannerShow,SetIsAddFamilyBannerShow] = useState(true);
  const closeAddFamilyBannerHandler = () => {
    SetIsAddFamilyBannerShow(false)
  }
  const [mainConfiguringData,setMainConfiguringData] = useState();
  const [diagnosisResultData,setDiagnosisResultData] = useState();
  
  const fetchGetMainConfiguringData = async () => {
    const token = await AsyncStorage.getItem('access');
    const { data } = await axios.get('https://api.tongdoc.co.kr/v1',{
      headers:{
        'accept':'applycation/json',
        'Authorization': `Bearer ${token}`,
        // 'X-CSRF-TOKEN': 'CJTzj9l5WROahObvRB98RHjc6pNI8rb9T2FEJ9LG'
      }
    })
    setMainConfiguringData(data);
  }
  const fetchGetDiagnosisData = async () => {
    const token = await AsyncStorage.getItem('access');
    const { data } = await axios.get('https://api.tongdoc.co.kr/v1/doctor',{
      headers:{
        'accept':'applycation/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    setDiagnosisResultData(data);
  }
  
  useEffect(() => {
    fetchGetMainConfiguringData();
    fetchGetDiagnosisData();
  }, [])
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
     { (mainConfiguringData && diagnosisResultData)
     ?  <>
      <View style={styles.topInner}>
        {isAddFamilyBannerShow && <AddFamilyBanner onPress={closeAddFamilyBannerHandler} />}
        <Pressable onPress={() => {console.log('clicked!')}} style={({pressed}) => []}>
        <Banner diagnosisResultData={diagnosisResultData} mainConfiguringData={mainConfiguringData} />
        </Pressable>

        <Pressable onPress={() => {console.log('clicked!')}} style={({pressed}) => []}>
        <PhoneContractDateCalculatorBanner />
        </Pressable>
        <Pressable onPress={() => {console.log('clicked!')}} style={({pressed}) => []}>
        <TongdocNews mainConfiguringData={mainConfiguringData} />
        </Pressable>
        
      </View>
      <View style={styles.bottomInner}>
        <Reviews mainConfiguringData={mainConfiguringData} />
      </View>
      </>
      : <ActivityIndicator />
      }
      {/* <SendingBillsSKT /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom:4,
  },
  topInner: {
    flex:1,
    marginTop:75,
    paddingHorizontal:24
  },
  bottomInner:{
    flex:1,
    marginTop:32,
    backgroundColor:'#f7f7f7',
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
