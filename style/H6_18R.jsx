import React from 'react';
import {StyleSheet,Text} from 'react-native'



const H6_18R = ({style,children}) => {
  return <Text style={[styles.text,{...style}]}>{children}</Text>
};

export default H6_18R;

const styles = StyleSheet.create({
  text: {
    fontFamily:'Noto400',
    letterSpacing:-1,
    lineHeight:26,
    fontSize:18
  }
})