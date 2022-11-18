import { StyleSheet, Image,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Image style={{width:24,height:24}} source={require('../../assets/common/back_arrow.png')} />
    </Pressable>
  )
}

const styles = StyleSheet.create({})