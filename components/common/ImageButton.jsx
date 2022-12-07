import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'

export default function ImageButton({onPress,buttonStyle,imageURL,imageStyle,pressedColor}) {
  return (
    <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.button,
      buttonStyle,
      {
        backgroundColor: pressed
          ? pressedColor
          : '#fff',
      },
    ]}
  >
    <Image style={imageStyle} source={imageURL} />
  </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    
  },
})