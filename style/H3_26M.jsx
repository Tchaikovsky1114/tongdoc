import React from 'react';
import {StyleSheet,Text} from 'react-native'



const H3_26M = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default H3_26M;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto500',
    letterSpacing:-1,
    lineHeight:32,
    fontSize:26
  }
})