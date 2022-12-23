import React, { useState } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Pressable,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions
} from 'react-native';
import WebView from 'react-native-webview';

import H6_18M from '../../style/H6_18M';

const {width} = Dimensions.get('window');

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

           
              {termsDetail === 'https://api.tongdoc.co.kr/web/agree/1' && (
                <View>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <H6_18M style={{ PaddingTop: 24 }}>서비스 이용약관</H6_18M>
                  <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Image
                      style={{ width: 32, height: 32 }}
                      source={require('../../assets/common/close.png')}
                    />
                 </Pressable>
                  </View>
                <ScrollView contentContainerStyle={{paddingBottom:120,justifyContent:'center',alignItems:'center'}}>
                 <Image style={{width:320}} source={require('../../assets/terms1.png')} />
                 <Image style={{width:320}} source={require('../../assets/terms1-2.png')} />
                 <Image style={{width:320}} source={require('../../assets/terms1-3.png')} />
                 <Image style={{width:320}} source={require('../../assets/terms1-4.png')} />
                 <Image style={{width:320}} source={require('../../assets/terms1-5.png')} />
                </ScrollView>
                </View>
              )}
              {termsDetail === 'https://api.tongdoc.co.kr/web/agree/2' && (

              <View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <H6_18M style={{ PaddingTop: 24 }}>제3자 정보제공동의</H6_18M>
                  <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                  >
                  <Image
                  style={{ width: 32, height: 32 }}
                  source={require('../../assets/common/close.png')}
                  />
                  </Pressable>
                </View>
                <ScrollView contentContainerStyle={{paddingBottom:400}}>
                {/* 이미지 */}
                <Image source={require('../../assets/terms3.png')} />
                </ScrollView>
              </View>
              )}
              {termsDetail === 'https://api.tongdoc.co.kr/web/agree/3' && (
                    <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <H6_18M style={{ PaddingTop: 24 }}>마케팅정보 활용 및 수신동의</H6_18M>
                    <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Image
                  style={{ width: 32, height: 32 }}
                  source={require('../../assets/common/close.png')}
                />
              </Pressable>
                    </View>
                  <ScrollView contentContainerStyle={{paddingBottom:200}}>
                   {/* 이미지 */}
                   <Image source={require('../../assets/terms2.png')} />
                   
                  </ScrollView>
                  </View>
              )}

          </View>
        </View>
      </SafeAreaView>
      {/* <WebView
        source={{ uri: termsDetail }}
        originWhitelist={['*']}
        onError={(err) => {
          console.log(err);
        }}
        onLoadEnd={() => {}}
      /> */}
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
