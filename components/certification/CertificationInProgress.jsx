import { StyleSheet } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { PASS_URL } from './constants/Constants';

export default function CertificationInProgress() {
  const navigation = useNavigation();

  const receiveCertificationSuccessFromWebviewHandler = (event) => {
    const {
      nativeEvent: { data },
    } = event;
    navigation.navigate('CertificationResult', {
      screen: 'CertificationResult',
      userInfo: data,
    });
  };

  const receiveCertificationFailedFromWebviewHandler = (err) => {
    navigation.navigate('ChoiceSignMethod',{
        screen: 'CertificationResult',
    });
    console.error(err.nativeEvent.description);
   
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
