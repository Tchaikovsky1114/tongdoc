import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import P_12R from '../../../style/paragraph/P_12R'

const ProposalDeatailAgentEvaluatedBox = ({reviewCount}) => {
  return (
    <View style={styles.container}>
    <View style={styles.leftButtons}>
      <View style={{flexDirection:'row', marginRight:8}}>
        <View style={{marginRight:4}}>
          <P_12R>평점</P_12R>
        </View>
      <Image style={{width:72,height:16}} source={require('../../../assets/stars.png')}/>
      </View>
    <View style={{flexDirection:'row',marginRight:8}}>
    <View style={{marginRight:4}}>
      <P_12R>구매후기</P_12R>
    </View>
    <P_12R style={{color:'#2d63e2'}}>{reviewCount}</P_12R>
    </View>
  </View>
    <Pressable style={styles.rightButton} onPress={() => {}}>
      <P_12R style={{color:'#2d63e2'}}>전체보기</P_12R>
    </Pressable>
  </View>
  )
}

export default ProposalDeatailAgentEvaluatedBox

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'80%'
  },
  leftButtons:{
    flexDirection:'row'
  },
  rightButton:{
    paddingVertical:4,
    paddingHorizontal:8,
    borderRadius:8,
    borderWidth:1,
    borderColor:'#2d63e2'
  }
})