import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import MyPage from '../components/myPage/MyPage';
import { StatusBar } from 'expo-status-bar';

export default function MyPageScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <MyPage />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 31,
    backgroundColor: '#fff',
  },
});
