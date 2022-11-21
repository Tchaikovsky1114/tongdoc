import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PurchaseMobileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>PurchaseMobileScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,
    flex:1
  }
})