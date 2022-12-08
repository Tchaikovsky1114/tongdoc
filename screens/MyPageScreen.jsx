import { StyleSheet, View } from 'react-native';
import React from 'react';
import MyPage from '../components/myPage/MyPage';

export default function MyPageScreen() {
  return (
    <View style={styles.container}>
      <MyPage />
    </View>
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
