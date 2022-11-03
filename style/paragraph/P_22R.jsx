import React from 'react';
import {StyleSheet,Text} from 'react-native'



const P_22R = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default P_22R;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto400',
    letterSpacing:-1.5,
    lineHeight:28,
    fontSize:22
  }
})