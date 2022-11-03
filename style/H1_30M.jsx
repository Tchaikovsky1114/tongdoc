import React from 'react';
import {StyleSheet,Text} from 'react-native'



const H1_30M = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default H1_30M;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto500',
    letterSpacing:-2.4,
    lineHeight:36,
    fontSize:30
  }
  
})