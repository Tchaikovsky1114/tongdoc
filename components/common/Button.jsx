import { View, Text,Pressable,StyleSheet } from 'react-native'
import React from 'react'



export default function Button({onPress,text,style,textStyle}) {
  return (
    <Pressable onPress={onPress}>
    <View style={[styles.moveSignupButton,{style}]}>
      <Text style={[styles.moveSignupButtonText,{textStyle}]}>{text}</Text>
    </View>
  </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonBox: {
    flex:1,
    width,
    position:'absolute',
    bottom:0,
    left:0,
    
  },
  button:{
    flex:1,
    backgroundColor:'#2D63E2',
    justifyContent:'center',
    alignItems:'center',
    height:50
  },
  buttonText:{
    fontFamily:'Noto400',
    color:'#fff',
  },
})