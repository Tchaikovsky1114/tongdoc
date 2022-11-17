import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import P_18M from '../../style/paragraph/P_18M'
import P_14M from '../../style/paragraph/P_14M'

export default function TongdocNews() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <P_18M style={{color:'#fff'}}>통닥 소식</P_18M>
      <Image style={{width:23,height:22}} source={require('../../assets/common/whitenextarrow.png')} />
        </View>
        <View style={{alignItems:'center',marginTop:18}}>
          <Image style={{width:40,height:40}} source={require('../../assets/home/notice.png')} />
          <P_14M style={{color:'#fff',marginTop:8}}>"4인 가족 전화요금 8만원 절감"</P_14M>
          <P_14M style={{color:'#fff'}}>"통신닥터, 정식 서비스 출시"</P_14M>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderRadius:16,
    marginTop:16
  },
  inner:{
    flex:1,
    backgroundColor:'#3A58A6',
    borderRadius:16,
    paddingHorizontal:16,
    paddingVertical:24
  },
  
})