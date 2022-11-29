import React from 'react';
import { StyleSheet, Text } from 'react-native';

const P_14R = ({ style, children, numberOfLines }) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, { ...style }]}>
      {children}
    </Text>
  );
};

export default P_14R;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Noto400',
    letterSpacing: -0.5,
    lineHeight: 22,
    fontSize: 14,
  },
});
