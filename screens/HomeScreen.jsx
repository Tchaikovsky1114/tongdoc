import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from '../components/home/Home';
import HomeModal from '../components/sendingBills/homeModal/HomeModal';

export default function HomeScreen({ route }) {
  const tongkind = route.params ? route.params.tongkind : '';
  const inBoundEmail = route.params ? route.params.inBoundEmail : '';

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
        {(tongkind && inBoundEmail) && <HomeModal tongkind={tongkind} inBoundEmail={inBoundEmail} />}
      </SafeAreaView>
    </>
  );
}
