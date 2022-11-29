import { forwardRef, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const SigninInput = (
  {
    type,
    inputStyle,
    placeholder,
    autoCapitalize,
    onChangeInput,
    returnKey,
    onSubmitEditing,
    keyboardType,
    secureTextEntry,
  },
  ref
) => {
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = () => {
    setIsFocus(true);
  };
  const blurHandler = () => {
    setIsFocus(false);
  };

  return (
    <TextInput
      ref={ref}
      type={type}
      style={
        isFocus ? [styles.inputFocus, inputStyle] : [styles.input, inputStyle]
      }
      cursorColor={'#2D63E2'}
      placeholder={placeholder}
      placeholderTextColor={isFocus ? '#dddddd' : '#333333'}
      autoCapitalize={autoCapitalize}
      onChangeText={onChangeInput}
      returnKeyType={returnKey}
      onSubmitEditing={onSubmitEditing}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onFocus={focusHandler}
      onBlur={blurHandler}
    />
  );
};

export default forwardRef(SigninInput);

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Noto400',
    fontSize: 14,
    borderBottom: 1,
    borderBottomWidth: 1,
    height: 30,
    borderColor: '#DDDDDD',
    marginBottom: 24,
    color: '#333333',
    includeFontPadding: false,
    paddingBottom: 8,
  },
  inputFocus: {
    fontFamily: 'Noto400',
    fontSize: 14,
    borderBottom: 1,
    borderBottomWidth: 1,
    height: 30,
    borderColor: '#2D63E2',
    marginBottom: 24,
    color: '#333333',
    includeFontPadding: false,
    paddingBottom: 8,
  },
});
