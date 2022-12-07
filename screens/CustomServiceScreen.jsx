import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomService from '../components/customservice/CustomService';

export default function CustomServiceScreen() {
 
  return (
    <CustomService />
  )
}

const styles = StyleSheet.create({
  marginTop:50,
  flex:1,
  backgroundColor:'#fff'
})