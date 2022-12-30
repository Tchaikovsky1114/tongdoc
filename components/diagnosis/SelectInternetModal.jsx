import { View, Modal,Pressable,Image, StyleSheet } from 'react-native'
import React from 'react'
import InternetSelectButton from './InternetSelectButton';
import P_16M from '../../style/paragraph/P_16M';

const SelectInternetModal = ({ isChoiceTelecomModalVisible,showChoiceTelecomModalHandler,onPress }) => {
  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={isChoiceTelecomModalVisible}
    onRequestClose={showChoiceTelecomModalHandler}
  >
    <View style={styles.outer}>
      <View style={styles.inner}>
        <View style={styles.selectBox}>
          <P_16M>통신사 선택하기</P_16M>
          <Pressable onPress={showChoiceTelecomModalHandler}>
            <Image style={{ width: 16, height: 16 }} source={require('../../assets/xBtn.png')} />
          </Pressable>
        </View>
        <View>
          <InternetSelectButton text="SKT" onPress={() => onPress('SKT')} />
          <InternetSelectButton text="LGU+" onPress={() => onPress('LGU+')} />
          <InternetSelectButton text="KT" onPress={() => onPress('KT')} />
        </View>
      </View>
    </View>
  </Modal>
  )
}

export default SelectInternetModal

const styles = StyleSheet.create({
  outer:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner:{
    width: '80%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  selectBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
})