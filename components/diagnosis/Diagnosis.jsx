import {Dimensions, StyleSheet, Text, View,Image,ScrollView, FlatList, ActivityIndicator, Pressable} from 'react-native';
import React, { useEffect,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import P_16M from '../../style/paragraph/P_16M';
import P_16R from '../../style/paragraph/P_16R';
import P_12R from '../../style/paragraph/P_12R'; 
import P_14R from '../../style/paragraph/P_14R';
import FamilyCard from './FamilyCard';
import RegisterCard from './RegisterCard';
import axios from 'axios';
import SummaryBannerCard from './SummaryBannerCard';

const {width} = Dimensions.get('window');

const DUMMY_FAMILY_LIST = [
  {
    name:'오로라',
    telecom:'KT',
    phoneNumber:'010-2334-4455',
    savingMoney: 44550,
    defaultMoney: 54550,
  },
  {
    name:'오로가',
    telecom:'KT',
    phoneNumber:'010-4876-1132',
    savingMoney:3870,
    defaultMoney: 19450,
  },
  {
    name:'오로나',
    telecom:'KT',
    phoneNumber:'010-6661-1780',
    savingMoney:900,
    defaultMoney: 44000
  },
  {
    name:'오로다',
    telecom:'KT',
    phoneNumber:'010-9917-5857',
    savingMoney:10450,
    defaultMoney: 38000
  }
]

export default function Diagnosis() {
  const [diagnosisResultData,setDiagnosisResultData] = useState()
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
    fetchGetDiagnosisData()
  },[])
  console.log(diagnosisResultData)
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {!diagnosisResultData
      ? <ActivityIndicator />
      : <>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Pressable>
            <View style={styles.resultBox}>
              <View style={styles.month}>
                <P_14R style={{marginRight:8,color:'#2d63e2'}}>{diagnosisResultData.year} 년 {diagnosisResultData.month} 월</P_14R>
                <Image style={{width:23,height:22.5}} source={require('../../assets/common/bluearrowdown.png')} />
              </View>  
            </View>
          </Pressable>
          <SummaryBannerCard diagnosisResultData={diagnosisResultData} />
          </View>
      </View>

      
      <View style={styles.body}>
        <View style={{flex:1}}>
          <P_16R style={{color:'#333333'}}>휴대폰 통신비</P_16R>
          {diagnosisResultData.phone.map((item,index) => <FamilyCard item={item} index={index} key={item.id} />)}
          <RegisterCard text="가족을 등록해 주세요."/>
          
        </View>
        <P_16R style={{color:'#333333',marginTop:24,marginBottom:8}}>인터넷 요금</P_16R>
        {diagnosisResultData.indernet?.map((item,index) => <FamilyCard item={item} index={index} key={item.id} />)}
        <RegisterCard text="인터넷 가입 정보를 등록해 주세요"/>
      </View>
      </>
  }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff'
  },
  headerInner:{
    flex:1,
    maxHeight:300,
    marginTop:8,
    backgroundColor:'#fff',
    shadowOpacity:0.25,
    shadowColor:'#aaa',
    shadowRadius:16,
    marginHorizontal:24,
    borderRadius:16,
    padding:24,
    elevation:10,
  },
  month:{
    height:25,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    paddingBottom:5
  },
  resultBox:{
    
    justifyContent:'center',
    alignItems:'flex-end',
    borderBottom: 2,
    borderBottomColor:'red',
  },
  resultText: {
    textAlign:'center'
  },
  header:{
    width,
    backgroundColor:'#fff',
    marginVertical:24
  },
  body:{
    position:'relative',
    width,
    backgroundColor:'#fff',
    paddingHorizontal:24,
  },
})


