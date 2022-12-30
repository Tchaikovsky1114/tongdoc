import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const AddCommonInputBox = ({isBorderHighlight,onFocus,onBlur,value,onChangeText,style,placeholder,keyboardType}) => {
  return (
    <View style={[styles.inputBox,{ borderBottomColor: isBorderHighlight ? '#2D63E2' : '#ddd' }]}>
    <TextInput
      onFocus={onFocus}
      onBlur={onBlur}
      placeholderTextColor="#666"
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      cursorColor="#2d63e2"
      style={style}
      placeholder={placeholder}
    />
  </View>
  )
}

export default React.memo(AddCommonInputBox);

const styles = StyleSheet.create({
  inputBox: {
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 16,
  },
})