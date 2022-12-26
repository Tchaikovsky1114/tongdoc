import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function ProposalDetail() {
  const {params:{suggestion}} = useRoute()

  console.log(suggestion);
  return (
    <View>
      <Text>ProposalDetail</Text>
    </View>
  )
}

const styles = StyleSheet.create({})