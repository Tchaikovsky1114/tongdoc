import React from 'react';
import {StyleSheet,Text} from 'react-native'



const H2_28M = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default H2_28M;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto500',
    letterSpacing:-1.5,
    lineHeight:34,
    fontSize:28
  }
})