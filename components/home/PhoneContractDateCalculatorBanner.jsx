import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import P_18M from '../../style/paragraph/P_18M'
import P_14M from '../../style/paragraph/P_14M'

export default function PhoneContractDateCalculatorBanner() {
  return (
    
      <View style={styles.container}>
        <View style={styles.contractDdayBox}>
          <P_18M style={{color:'#fff'}}>휴대폰 구매</P_18M>
          <Image style={{width:23,height:23}} source={require('../../assets/common/whitenextarrow.png')} />
        </View>
        <View style={styles.imageBox}>
          <Image style={{width:30,height:40}} source={require('../../assets/home/calculator.png')} />
        </View>
        <View>
          <P_14M style={{color:'#fff',textAlign:'center'}}>같은 기종이라도 더 저렴하게 구입할 수 있어요.</P_14M>
          <P_14M style={{color:'#fff',textAlign:'center'}}>주변 휴대폰 매장 견적서를 비교해볼까요?</P_14M>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#5087FF',
    borderRadius:16,
    paddingHorizontal:16,
    paddingVertical:24,
    marginVertical:16,
  },
  contractDdayBox:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center'
  },
  imageBox:{
    alignItems:'center',
    marginTop:16,
    marginBottom:8
  }
})