import {Dimensions, StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import React from 'react';
import H5_22R from '../style/H5_22R';
import P_14R from '../style/paragraph/P_14R';
import P_16M from '../style/paragraph/P_16M';
import P_12R from '../style/paragraph/P_12R'; 
const {width} = Dimensions.get('window');

export default function Diagnosis() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{position:'absolute',right:0,height:26,width:26,marginRight:16}} source={require('../assets/diagnosis/bell.png')} />
        <View style={styles.resultBox}>
          <View style={styles.month}>
        <P_14R style={{marginRight:8}}>2020 년 06 월</P_14R>
        <Image style={{width:12,height:12}} source={require('../assets/common/arrowdown.png')} />
        </View>
          <H5_22R style={{marginTop:16}}>가족 통신비 진단 결과</H5_22R>
          </View>
          <View style={{marginTop:16,marginBottom:16,justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:63,height:63}} source={require('../assets/diagnosis/goodstatus.png')} />
          </View>
          
          <View style={{flexDirection:'row',justifyContent:'center',marginBottom:24}}>

            <View style={{borderRightWidth:1,borderRightColor:'#ddd', paddingHorizontal:22.5,paddingVertical:10}}>
              <P_12R style={{color:'#666666'}}>가족 총 통신비(3인)</P_12R>
              <P_16M style={{textAlign:'center'}}>258,000 <Text style={{color:'#666666',fontSize:12}}>원</Text></P_16M>
            </View>

            <View style={{paddingHorizontal:22.5,paddingVertical:10}}>
              <P_12R style={{color:'#666666'}}>절감가능액 (월)</P_12R>
              <P_16M style={{color:'#2d63e2',textAlign:'center'}}>53,036 <Text style={{color:'#666666',fontSize:12}}>원</Text></P_16M>
            </View>

          </View>
          <View style={{marginBottom:20.5}}>
          <P_14R style={{backgroundColor:'#2d63e2',color:'#fff',textAlign:'center',paddingVertical:4.5}} >1년간 총 <Text style={{fontSize:18}}>636,440</Text> 원을 절약할 수 있습니다.</P_14R>
          </View>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <View>
          <Text>바디부분</Text>
        </View>
        <View style={styles.footer}>
        <View style={{paddingHorizontal:24}}>
        <P_12R style={{color:'#a4a4a4'}}>최초 분석은 통신사의 요금청구서가 도착된 이후 진행됩니다.{'\n'}(요금청구서를 통닥으로 연계하셨는지 꼭 확인하세요.)</P_12R>
        
        </View>
        </View>
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#efefef'
  },
  month:{
    height:25,
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    paddingBottom:5
  },
  resultBox:{
    width,
    paddingHorizontal:40,
    justifyContent:'center',
    alignItems:'center',
    borderBottom: 2,
    borderBottomColor:'red',
  },
  resultText: {
    textAlign:'center'
  },
  header:{
    width,
    backgroundColor:'#efefef',
  },
  body:{
    position:'relative',
    width,
    backgroundColor:'#fff',
    height:670,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal:24,
    
  },
  footer:{
    position:'absolute',
    width,
    backgroundColor:'#f7f7f7',
    height:62,
    bottom:0,
    left:0,
    paddingVertical:14
  }

})

// 80 - 670 - 62


