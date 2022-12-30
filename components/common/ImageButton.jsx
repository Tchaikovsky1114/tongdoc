import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'
import P_14R from '../../style/paragraph/P_14R'

const ImageButton = ({onPress,buttonStyle,imageURL,imageStyle,pressedColor,buttonText,textStyle}) => {
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
    {buttonText && <P_14R style={textStyle}>{buttonText}</P_14R>}
    <Image style={imageStyle} source={imageURL} />
  </Pressable>
  )
}

export default React.memo(ImageButton);

const styles = StyleSheet.create({
  button: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
})

