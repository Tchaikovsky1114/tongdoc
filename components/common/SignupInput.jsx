import { StyleSheet, Text, TextInput } from 'react-native';
import React, { useState, useEffect, forwardRef, useCallback } from 'react';

const SignupInput = forwardRef(
  (
    {
      type,
      style,
      signupForm,
      value,
      clearButtonMode,
      autoCapitalize,
      placeholder,
      keyboardType,
      onChange,
      errorText,
      clearTextOnFocus,
      secureTextEntry,
      maxLength,
      onKeyPress,
    },
    ref
  ) => {
    const [isError, setIsError] = useState(null);
    const [startValidation, setStartValidation] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const onBlur = useCallback(() => {
      setStartValidation(true);
      setIsFocus(false);
    }, []);

    const onFocus = useCallback(() => {
      setStartValidation(false);
      setIsFocus(true);
      setIsError(false);
    }, []);

    const isValidEmail = useCallback((email) => {
      return /^[a-zA-Z0-9][a-zA-Z0-9._]+[@][a-zA-Z][A-Za-z.]+[.]\w{3,}/.test(
        email
      );
    }, []);

    const isValidPassword = useCallback((password) => {
      return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,20}$/.test(
        password
      );
    }, []);

    useEffect(() => {
      if (!ref) return;
      const timer = setTimeout(() => {
        ref.current.focus();
      }, 100);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      if (type === 'email') {
        if (!isValidEmail(value)) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      }
      if (type === 'password') {
        if (!isValidPassword(value)) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      }
      if (type === 'passwordConfirm') {
        if (value !== signupForm.password) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      }
    }, [value]);

    return (
      <>
        <TextInput
          ref={ref ? ref : null}
          selectTextOnFocus={true}
          onKeyPress={onKeyPress}
          onFocus={onFocus}
          placeholderTextColor={isFocus ? '#ddd' : '#666'}
          style={[
            styles.input,
            {
              borderColor:
                isError && startValidation
                  ? 'red'
                  : isFocus
                  ? '#2D63E2'
                  : '#ddd',
            },
          ]}
          value={value}
          clearButtonMode={clearButtonMode ? clearButtonMode : 'never'}
          maxLength={maxLength ? maxLength : 30}
          secureTextEntry={secureTextEntry ? secureTextEntry : false}
          clearTextOnFocus={clearTextOnFocus ? true : false}
          autoCapitalize={autoCapitalize}
          placeholder={placeholder}
          cursorColor={isError && startValidation ? 'red' : '#2D63E2'}
          keyboardType={keyboardType}
          onChange={onChange}
          onBlur={onBlur}
        />
        {isError && startValidation && (
          <Text
            style={[styles.errorText, { color: isError ? 'red' : '#2D63E2' }]}
          >
            {errorText}
          </Text>
        )}
      </>
    );
  }
);
export default SignupInput;

const styles = StyleSheet.create({
  errorText: {
    marginTop: -30,
    fontFamily: 'Noto400',
    fontSize: 12,
    marginBottom: 8,
  },
  input: {
    fontFamily: 'Noto400',
    fontSize: 14,
    borderBottom: 1,
    borderBottomWidth: 1,
    height: 30,
    borderColor: '#999999',
    marginBottom: 24,
    color: '#333',
    includeFontPadding: false,
    paddingBottom: 8,
  },
});
