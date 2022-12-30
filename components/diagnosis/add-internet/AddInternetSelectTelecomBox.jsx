import { View, Pressable,Image, StyleSheet } from 'react-native'
import React from 'react'
import P_14R from '../../../style/paragraph/P_14R'

const AddInternetSelectTelecomBox = ({showChoiceTelecomModalHandler,isBorderHighlight,selectedTelecom}) => {
  return (
    <Pressable
      onPress={showChoiceTelecomModalHandler}
      style={({ pressed }) => [
        styles.inputBox,
        {
          borderBottomColor: isBorderHighlight ? '#2D63E2' : '#ddd',
          backgroundColor: pressed ? '#f6f9ff' : '#fff',
        },
      ]}
        >
      <View style={styles.selectInput}>
        <P_14R style={{ color: '#333' }}>{selectedTelecom || '통신사를 선택해주세요'}</P_14R>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../../../assets/downIcon.png')}
        />
      </View>
    </Pressable>
  )
}

export default React.memo(AddInternetSelectTelecomBox);

const styles = StyleSheet.create({
  selectInput:{
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputBox: {
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 40,
  },
})