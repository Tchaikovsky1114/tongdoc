import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

const { width,height } = Dimensions.get('window')

export default function AwaitSuggestion() {
  return (
    <View style={styles.container}>
      <Image style={{width:211,height:80}} source={require('../../../assets/purchase/await-suggestion.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-start',
    alignItems:'flex-start',
    paddingHorizontal:80,
    paddingVertical:20,
    height
  }
})