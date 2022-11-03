import React from 'react';
import {StyleSheet,Text} from 'react-native'



const H5_22R = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default H5_22R;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto400',
    letterSpacing:-1,
    lineHeight:28,
    fontSize:22
  }
})