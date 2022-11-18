import { StyleSheet, Image, View, Dimensions } from 'react-native'
import React from 'react'
import P_18M from '../../style/paragraph/P_18M'
import { FlatList } from 'react-native-gesture-handler'
import ReviewCarousel from './ReviewCarousel'

const {width} = Dimensions.get('window')

export default function Reviews() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.title}>
          <P_18M>통신비 진단 및 구매 후기</P_18M>
          <Image style={{width:23,height:22.5}} source={require('../../assets/common/graynextarrow.png')} />
        </View>
        <ReviewCarousel />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:32,
    flex:1,
  },
  inner:{
    flex:1,
    backgroundColor:'#f7f7f7'
  },
  title:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:16
  }
})