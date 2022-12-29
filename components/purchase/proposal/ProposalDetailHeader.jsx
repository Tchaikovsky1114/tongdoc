import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import P_16R from '../../../style/paragraph/P_16R'
import P_12R from '../../../style/paragraph/P_12R'

const ProposalDetailHeader = ({showAllIntroduceHandler,isShowAllText,agent}) => {

  return (
    <View style={styles.header}>
    <Image style={{width:70,height:70}} source={require('../../../assets/tongdocdirect.png')} />
    <View style={{marginTop:8}}>
      <P_16R>{agent.store_name}</P_16R>
    </View>
    <View style={[{marginTop:8,maxWidth:'80%'}, isShowAllText ? styles.wide : styles.shrink]}>
      <P_12R style={{color:'#666'}}>{agent.introduce}</P_12R>
    </View>
    <Pressable onPress={showAllIntroduceHandler} style={{maxWidth:'80%'}}>
      <Image style={{width:32,height:32,transform:isShowAllText ? [{rotate:'180deg'}] : [{rotate:'0deg'}]}} source={require('../../../assets/downIcon.png')}/>
    </Pressable>
  </View>
  )
}

export default ProposalDetailHeader


const styles = StyleSheet.create({
  inner:{
    backgroundColor:'#fff',
    minHeight:'100%',
    alignItems:'center',
  },
  header:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:16
  },
  wide:{
    height:100,
  },
  shrink:{
    height:20
  },
})