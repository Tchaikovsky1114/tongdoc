import React from 'react';
import {StyleSheet,Text} from 'react-native'



const H4_24R = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default H4_24R;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto400',
    letterSpacing:-1,
    lineHeight:30,
    fontSize:24
  }
})