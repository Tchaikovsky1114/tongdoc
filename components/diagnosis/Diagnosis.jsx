import {Dimensions, StyleSheet, Text, View,Image,ScrollView, FlatList} from 'react-native';
import React from 'react';


import P_16M from '../../style/paragraph/P_16M';
import P_16R from '../../style/paragraph/P_16R';
import P_12R from '../../style/paragraph/P_12R'; 
import P_14R from '../../style/paragraph/P_14R';
import FamilyCard from './FamilyCard';
import RegisterCard from './RegisterCard';

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
  // const renderItem = (<FamilyCard />)
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerInner}>
        <View style={styles.resultBox}>
            <View style={styles.month}>
              <P_14R style={{marginRight:8,color:'#2d63e2'}}>2020 년 06 월</P_14R>
              <Image style={{width:23,height:22.5}} source={require('../../assets/common/bluearrowdown.png')} />
            </View>  
          </View>

          <View style={{marginTop:16,marginBottom:16,justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:63,height:63}} source={require('../../assets/diagnosis/status1.png')} />
          </View>
          <P_14R style={{textAlign:'center',paddingVertical:4.5}} >1년간 총 <Text style={{fontSize:15,color:'#2d63e2'}}>636,440 원을 절약</Text>할 수 있어요!</P_14R>
          
          <View style={{flexDirection:'row',justifyContent:'center',marginBottom:24,marginTop:16,backgroundColor:'#F6F9ff',borderRadius:16, paddingHorizontal:8,paddingVertical:16}}>

            <View style={{borderRightWidth:1,borderRightColor:'#ddd', paddingHorizontal:26.5,paddingVertical:10}}>
              <P_12R style={{textAlign:'center'}} >통신비 (3인)</P_12R>
              <P_16M style={{textAlign:'center'}}>258,000 <Text style={{color:'#666666',fontSize:12}}>원</Text></P_16M>
            </View>

            <View style={{paddingHorizontal:26.5,paddingVertical:10}}>

            <P_12R style={{textAlign:'center'}} >절감 가능액 (월)</P_12R>
              <P_16M style={{color:'#FF3A3A',textAlign:'center',alignItems:'center',justifyContent:'flex-start'}}>
                <Image style={{width:10,height:10}} source={require('../../assets/common/redreversetriangle.png')} />
                <View style={{width:4}} />
                53,036 <Text style={{color:'#666666',fontSize:12}}>원</Text></P_16M>
            </View>
            </View>
          </View>
      </View>

      {/* ummylist에서 가족 선택(가족 등록)하면 mapping 하고 있는 flatlist의 data에 해당 인원이 추가되어야 함. */}
      <View style={styles.body}>
        <View style={{flex:1}}>
          <P_16R style={{color:'#333333'}}>휴대폰 통신비</P_16R>
          <FamilyCard name="오로라" phoneNumber="010-2274-3334" telecom="KT" savingMoney={44550} defaultMoney={50500} />
          <FamilyCard name="오로가" phoneNumber="010-8715-2929" telecom="KT" savingMoney={4050} defaultMoney={39000} />
          <RegisterCard text="가족을 등록해 주세요."/>
          {/* <FlatList data={DUMMY_FAMILY_LIST} renderItem /> */}
        </View>
        <P_16R style={{color:'#333333',marginTop:24,marginBottom:8}}>인터넷 요금</P_16R>
        <FamilyCard name="오로라" phoneNumber="010-2274-3334" telecom="KT" savingMoney={44550} defaultMoney={50500} />
        <RegisterCard text="인터넷 가입 정보를 등록해 주세요"/>
      </View>
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


