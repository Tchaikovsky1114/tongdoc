import { View, Text, Pressable } from 'react-native'
import React from 'react'

const InternetSelectButton = ({onPress,text}) => {
  return (
    <Pressable
    onPress={onPress}
    style={({ pressed }) => [{marginBottom: 8, backgroundColor: pressed ? '#f6f9ff' : '#fff'}]}
  >
    <P_14R style={{ color: '#333' }}>{text}</P_14R>
  </Pressable>
  )
}

export default InternetSelectButton