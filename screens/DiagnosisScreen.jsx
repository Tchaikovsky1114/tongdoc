import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Diagnosis from '../components/diagnosis/Diagnosis';

export default function DiagnosisScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Diagnosis />
    </SafeAreaView>
  );
}
