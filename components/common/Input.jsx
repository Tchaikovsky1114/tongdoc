import { StyleSheet, TextInput } from "react-native";

const Input = ({ inputStyle, placeholder }) => {
  return (
    <TextInput
      style={[styles.input, inputStyle]}
      placeholder={placeholder}
      placeholderTextColor={"#333333"}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    fontFamily: "Noto400",
    fontSize: 14,
    lineHeight: 22,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
});
