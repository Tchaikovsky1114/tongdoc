import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, Pressable, View,Dimensions,ScrollView } from "react-native";
import WebView from 'react-native-webview';

const {width,height} = Dimensions.get('window');

import H6_18M from '../../style/H6_18M'
const TermsModal = ({modalVisible,setModalVisible,termsDetail}) => {
  
  
  return (
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[{position:'absolute',width,top:0,left:0,zIndex:10}]}>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
             <H6_18M style={{paddingHorizontal:12}}>서비스 이용약관</H6_18M> 
              <Image style={{width:32,height:32}} source={require('../../assets/common/close.png')} />
            </Pressable>
            </View>
          </View> 
          <WebView
            source={{ uri: termsDetail }}
            originWhitelist={['*']}
            onError={(err) => { console.log(err) }}
            style={{marginTop:60}}
            onLoadEnd={() => {}}
          />    
      </Modal>
    
  );
};

const styles = StyleSheet.create({

  modalView: {
    position:'relative',
    width,
    marginTop:60,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingLeft:24
  },
  button: {
    paddingTop:30,
    position:'absolute',
    flexDirection:'row',
    alignItems:'center',
    width: width,
    justifyContent:'space-between',
    zIndex:10
  },
  
  buttonClose: {
    backgroundColor: "#fff",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    width,
    marginTop:66,
    textAlign: "left",
  }
});

export default TermsModal;