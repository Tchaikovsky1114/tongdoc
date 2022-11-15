import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SendingBillsKT from '../sendingBills/KT/SendingBillsKT';
import SendingBillsSKT from '../sendingBills/SKT/SendingBillsSKT';

export default function Home() {
  return (
    <View>
      <Text>Main!!!</Text>
      <SendingBillsSKT />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});
