import { View, Text,Pressable,StyleSheet,Dimensions } from 'react-native'
import React from 'react'


const {width} = Dimensions.get('window');

export default function Button({onPress,text,style,textStyle}) {
  return (
    <Pressable onPress={onPress}>
    <View style={[styles.moveSignupButton,style]}>
      <Text style={[styles.moveSignupButtonText,textStyle]}>{text}</Text>
    </View>
  </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonBox: {
    width:200,
    flex:1,
    position:'absolute',
    bottom:0,
    left:0,
  },
  button:{
    flex:1,
    width:200,
    backgroundColor:'#2D63E2',
    justifyContent:'center',
    alignItems:'center',
    height:50
  },
  buttonText:{
    fontFamily:'Noto400',
  },
})