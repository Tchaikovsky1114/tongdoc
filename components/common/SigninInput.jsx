import { forwardRef, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const SigninInput = (
  { type, inputStyle, placeholder, autoCapitalize, onChangeInput },
  ref
) => {
  // console.log(id, "1");
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = () => {
    setIsFocus(true);
  };
  const blurHandler = () => {
    setIsFocus(false);
  };

  return (
    <TextInput
      ref={ref ? ref : null}
      type={type}
      style={
        isFocus ? [styles.inputFocus, inputStyle] : [styles.input, inputStyle]
      }
      placeholder={placeholder}
      placeholderTextColor={isFocus ? "#dddddd" : "#333333"}
      autoCapitalize={autoCapitalize}
      cursorColor={"#2D63E2"}
      onFocus={focusHandler}
      onBlur={blurHandler}
      onChangeText={onChangeInput}
    />
  );
};

export default forwardRef(SigninInput);

const styles = StyleSheet.create({
  input: {
    fontFamily: "Noto400",
    fontSize: 14,
    borderBottom: 1,
    borderBottomWidth: 1,
    height: 30,
    borderColor: "#DDDDDD",
    marginBottom: 24,
    color: "#333333",
    includeFontPadding: false,
    paddingBottom: 8,
  },
  inputFocus: {
    fontFamily: "Noto400",
    fontSize: 14,
    borderBottom: 1,
    borderBottomWidth: 1,
    height: 30,
    borderColor: "#2D63E2",
    marginBottom: 24,
    color: "#333333",
    includeFontPadding: false,
    paddingBottom: 8,
  },
});
