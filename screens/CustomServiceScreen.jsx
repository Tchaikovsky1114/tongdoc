import { Alert, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomService from '../components/customservice/CustomService';
import { StatusBar } from 'expo-status-bar';

export default function CustomServiceScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <CustomService />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  marginTop: 50,
  flex: 1,
  backgroundColor: '#fff',
});
