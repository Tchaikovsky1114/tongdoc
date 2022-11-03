import React from 'react';
import {StyleSheet,Text} from 'react-native'



const H4_24M = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default H4_24M;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto500',
    letterSpacing:-1,
    lineHeight:30,
    fontSize:24
  }
})