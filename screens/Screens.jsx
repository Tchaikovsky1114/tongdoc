import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import OnBoarding from '../components/onboarding/OnBoarding';
import HomeScreen from './HomeScreen';
import SignupPage from './SignupPage';

import { useNavigation } from '@react-navigation/native';

export default function Screens({ setIsSplashShow }) {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.navigate('OnBoarding');
    const timer = setTimeout(() => {
      setIsSplashShow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Signup" component={SignupPage} />
    </>
  );
}

const styles = StyleSheet.create({});
