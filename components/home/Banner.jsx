import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Banner() {
  return (
    <View style={styles.container}>
      <Text>Banner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderColor:'#ddd',
  }

})