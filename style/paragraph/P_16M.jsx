import React from 'react';
import {StyleSheet,Text} from 'react-native'



const P_16M = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default P_16M;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto500',
    letterSpacing:-1,
    lineHeight:24,
    fontSize:16
  }
})