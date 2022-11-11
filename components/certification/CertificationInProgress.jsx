import { StyleSheet, ActivityIndicator, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

const PASS_URL = 'https://api.tongdoc.net/nice/do.html';

export default function CertificationInProgress() {
  const navigation = useNavigation();

  const receiveCertificationSuccessFromWebviewHandler = (event) => {
    const {
      nativeEvent: { data },
    } = event;
    console.log(data);
    navigation.navigate('Signup/CertificationResult', {
      screen: 'Signup/CertificationResult',
      userInfo: data,
    });
  };

  const receiveCertificationFailedFromWebviewHandler = (err) => {
    alert(err);
  };

  return (
    <WebView
      source={{ uri: PASS_URL }}
      originWhitelist={['*']}
      onMessage={receiveCertificationSuccessFromWebviewHandler}
      onError={receiveCertificationFailedFromWebviewHandler}
      style={{ flex: 1 }}
    />
  );
}

const styles = StyleSheet.create({});
