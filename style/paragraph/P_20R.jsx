import React from 'react';
import {StyleSheet,Text} from 'react-native'



const P_20R = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default P_20R;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto400',
    letterSpacing:-1.5,
    lineHeight:26,
    fontSize:22
  }
})