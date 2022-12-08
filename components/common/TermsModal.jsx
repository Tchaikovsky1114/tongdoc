import React, { useState } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Pressable,
  View,
  SafeAreaView,
} from 'react-native';
import WebView from 'react-native-webview';

import H6_18M from '../../style/H6_18M';
const TermsModal = ({ modalVisible, setModalVisible, termsDetail }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView style={{ backgroundColor: '#ffffff', marginBottom: 16 }}>
        <View>
          <View
            style={{
              paddingTop: 8,
              paddingHorizontal: 12,
            }}
          >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <H6_18M>서비스 이용약관</H6_18M>
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/common/close.png')}
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      <WebView
        source={{ uri: termsDetail }}
        originWhitelist={['*']}
        onError={(err) => {
          console.log(err);
        }}
        onLoadEnd={() => {}}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonClose: {
    backgroundColor: '#fff',
  },
});

export default TermsModal;
