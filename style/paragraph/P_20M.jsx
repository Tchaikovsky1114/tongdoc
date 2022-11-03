import React from 'react';
import {StyleSheet,Text} from 'react-native'



const P_20M = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default P_20M;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto500',
    letterSpacing:-1.5,
    lineHeight:26,
    fontSize:22
  }
})