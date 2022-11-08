import { View, Text,Pressable,StyleSheet,Dimensions } from 'react-native'
import React from 'react'


const {width} = Dimensions.get('window');

export default function Button({onPress,text,buttonStyle,textStyle}) {
  return (
    
    <View style={styles.buttonBox}>
    <Pressable onPress={onPress}>
      <View style={[styles.button,buttonStyle]}>
        <Text style={[styles.buttonText,textStyle]}>{text}</Text>
      </View>
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
  buttonBox: {
    width
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    height:58
  },
  buttonText:{
    fontFamily:'Noto400',
    color:"#fff"
  },
})