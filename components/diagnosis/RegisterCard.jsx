import { StyleSheet, Image, View,Pressable } from 'react-native'
import React from 'react'
import P_14R from '../../style/paragraph/P_14R'

export default function RegisterCard({text,onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.container,{backgroundColor: pressed ? '#efefef' : '#fff'}]}>
      <P_14R style={{color:'#666'}}>{text}</P_14R>
      <Image style={{width:24,height:24}} source={require('../../assets/common/blueadd.png')} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth: 1,
    marginVertical:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:16,
    borderRadius: 16,
    height:64,
    borderColor:'#ddd',
  },
  infoText: {
    color:'#ddd'
  }
})