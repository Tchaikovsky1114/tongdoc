import { StyleSheet, ActivityIndicator, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { PASS_URL } from './constants/Constants';



export default function CertificationInProgress() {
  const navigation = useNavigation();

  const receiveCertificationSuccessFromWebviewHandler = (event) => {
    const {
      nativeEvent: { data },
    } = event;
    navigation.navigate('Signup/CertificationResult', {
      screen: 'Signup/CertificationResult',
      userInfo: data,
    });
  };

  const receiveCertificationFailedFromWebviewHandler = (err) => {
    console.error(err.nativeEvent.description);
    navigation.navigate('Signup');
  };

  return (
    <WebView
      source={{ uri: PASS_URL }}
      originWhitelist={["https://*", "http://*", "file://*", "sms://*",'intent://*']}
      onMessage={receiveCertificationSuccessFromWebviewHandler}
      onError={receiveCertificationFailedFromWebviewHandler}
      style={{ flex: 1 }}
    />
  );
}

const styles = StyleSheet.create({});
