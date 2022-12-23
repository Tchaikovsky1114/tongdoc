import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import P_12R from '../../style/paragraph/P_12R'

export default function ProposalOrderCardTextLine({title,content}) {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={{marginBottom:8}}>
        <P_12R style={{color:'#666'}}>{title}</P_12R>
      </View>
      <P_12R>{content}</P_12R>
      </View>
  )
}

const styles = StyleSheet.create({})