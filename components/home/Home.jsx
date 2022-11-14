import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SendingBillsKT from '../sendingBills/KT/SendingBillsKT';

export default function Home() {
  return (
    <View>
      <Text>Main!!!</Text>
      <SendingBillsKT />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});

