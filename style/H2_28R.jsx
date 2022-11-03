import React from 'react';
import {StyleSheet,Text} from 'react-native'



const H2_28R = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default H2_28R;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto400',
    letterSpacing:-1.5,
    lineHeight:34,
    fontSize:28
  }
})