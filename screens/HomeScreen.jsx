import React from 'react';
import Home from '../components/home/Home';
import HomeModal from '../components/sendingBills/homeModal/HomeModal';

export default function HomeScreen({ route }) {
  const tongkind = route.params.tongkind;
  const inBoundEmail = route.params.inBoundEmail;

  console.log(route, 'lalabla');
  return (
    <>
      <Home />
      <HomeModal tongkind={tongkind} inBoundEmail={inBoundEmail} />
    </>
  );
}
