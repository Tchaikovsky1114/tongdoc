import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import P_18M from '../../style/paragraph/P_18M'
import P_14M from '../../style/paragraph/P_14M'

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
      <View style={styles.diagnosisResultTitleBox}>
      <P_18M>11월 통신비 진단 결과 </P_18M>
      <Image style={{width:23,height:24}} source={require('../../assets/common/graynextarrow.png')} />
      </View>
      <View style={styles.diagnosisStatusBox}>
        <Image style={{width:52,height:52,marginRight:24}} source={require('../../assets/diagnosis/goodstatus.png')} />
        <View>
          <P_14M>오로라님의 11월 통신비 진단 결과,</P_14M>
          <P_14M style={{color:'#2D63E2'}}>7,040원 절감 가능하네요!</P_14M>
        </View>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor:'transparent',
    padding:2,
    shadowColor: "#ccc",
    shadowOpacity:0.1,
    shadowOffset:{
      width:1,
      height:1
    },
    borderRadius:16,
    elevation:5,
  },
  inner:{
    paddingHorizontal:16,
    paddingVertical:24,
    backgroundColor:'#fff',
    borderRadius:16,
    justifyContent:'center',
    maxHeight:142,
  },
  diagnosisResultTitleBox:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between'
  },
  diagnosisStatusBox:{
    flexDirection:'row',
    marginTop:16,
  },
  

})