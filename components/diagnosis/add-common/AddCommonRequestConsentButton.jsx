import {  Pressable, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import P_16M from '../../../style/paragraph/P_16M';

const { width } = Dimensions.get('window');

const AddCommonRequestConsentButton = ({onPress}) => {
  return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>  pressed ? styles.pressedConsentRequestButton : styles.consentRequestButton}
      >
        <P_16M style={{ color: '#fff' }}>문자 동의 요청</P_16M>
      </Pressable>
  )
}

export default React.memo(AddCommonRequestConsentButton);

const styles = StyleSheet.create({
  consentRequestButton: {
    backgroundColor: '#2d63e2',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width,
  },
  pressedConsentRequestButton:{
    backgroundColor: '#2D63E278',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width,
  },
})