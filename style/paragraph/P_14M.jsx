import React from 'react';
import { StyleSheet, Text } from 'react-native';

const P_14M = ({ style, children }) => {
  return <Text style={[styles.text, { ...style }]}>{children}</Text>;
};

export default P_14M;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Noto500',
    letterSpacing: -0.5,
    lineHeight: 22,
    fontSize: 14,
  },
});
