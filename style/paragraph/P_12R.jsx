import React from 'react';
import { StyleSheet, Text } from 'react-native';

const P_12R = ({ style, children }) => {
  return <Text style={[styles.text, { ...style }]}>{children}</Text>;
};

export default P_12R;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Noto400',
    letterSpacing: -0.5,
    lineHeight: 17,
    fontSize: 12,
  },
});
