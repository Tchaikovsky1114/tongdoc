import React from 'react';
import { StyleSheet, Text } from 'react-native';

const P_16R = ({ style, children }) => {
  return <Text style={[styles.text, { ...style }]}>{children}</Text>;
};

export default P_16R;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Noto400',
    letterSpacing: -1,
    lineHeight: 24,
    fontSize: 16,
    includeFontPadding: false,
  },
});
