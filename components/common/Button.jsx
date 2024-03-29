import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

export default function Button({
  onPress,
  text,
  buttonStyle,
  textStyle,
  totalTermsCheck,
}) {
  return (
    <Pressable
      disabled={!totalTermsCheck}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        {
          backgroundColor: pressed
            ? 'rgba(49,99,226,0.78)'
            : 'rgb(45, 99, 226)',
        },
        {
          backgroundColor: !totalTermsCheck
            ? 'rgb(142, 172, 244)'
            : 'rgb(45, 99, 226)',
        },
      ]}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(45, 99, 226)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
  },
  buttonText: {
    fontFamily: 'Noto400',
    color: '#fff',
    fontSize: 17,
  },
});
