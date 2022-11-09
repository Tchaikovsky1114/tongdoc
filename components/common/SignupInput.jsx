import { StyleSheet, Text, TextInput } from "react-native";
import React, { useRef, useState, useEffect, forwardRef } from "react";
import { IgnorePattern } from "react-native/Libraries/LogBox/LogBox";

const SignupInput = forwardRef(
  (
    {
      type,
      style,
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
    },
    ref
  ) => {
  

    const [isFocus, setIsFocus] = useState(false);

    
    useEffect(() => {
      if (!ref) return;
      const timer = setTimeout(() => {
        ref.current.focus();
      }, 100);
      return () => clearTimeout(timer);
    }, []);

    const startValidationHandler = () => {
      setStartValidation(true);
      setIsFocus(false);
    };
    const endValidationHandler = () => {
      setStartValidation(false);
      setIsFocus(true);
    };

    useEffect(() => {
      if (!ref) return;
      const timer = setTimeout(() => {
        ref.current.focus();
      }, 100);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      if (type === "email") {
        if (!isValidEmail(value)) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      }
      if (type === "password") {
        if (value.trim().length < 10) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      }
    }, [value]);

    return (
      <>
        <TextInput
          onFocus={endValidationHandler}
          placeholderTextColor={isFocus ? "#ddd" : "#666"}
          style={[
            styles.input,
            {
              borderColor:
                isError && startValidation
                  ? "red"
                  : isFocus
                  ? "#2D63E2"
                  : "#ddd",
            },
          ]}
          ref={ref ? ref : null}
          value={value}
          clearButtonMode={clearButtonMode ? clearButtonMode : "never"}
          maxLength={maxLength ? maxLength : 30}
          secureTextEntry={secureTextEntry ? secureTextEntry : false}
          clearTextOnFocus={clearTextOnFocus ? true : false}
          autoCapitalize={autoCapitalize}
          placeholder={placeholder}
          cursorColor={isError && startValidation ? "red" : "#2D63E2"}
          keyboardType={keyboardType}
          onChange={onChange}
          onBlur={startValidationHandler}
        />
        {isError && startValidation && (
          <Text
            style={[styles.errorText, { color: isError ? "red" : "#2D63E2" }]}
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
    fontFamily: "Noto400",
    fontSize: 12,
    marginBottom: 8,
  },

  input:{
    fontFamily:'Noto400',
    fontSize:14,
    borderBottom:1,
    borderBottomWidth:1,
    height:30,
    borderColor: '#999999',
    marginBottom:24,
    color:'#333',
    includeFontPadding:false,
    paddingBottom:8

  },
});
