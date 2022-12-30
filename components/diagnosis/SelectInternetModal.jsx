import { View, Modal,Pressable,Image } from 'react-native'
import React from 'react'
import InternetSelectButton from './InternetSelectButton';

const SelectInternetModal = ({isChoiceTelecomModalVisible,showChoiceTelecomModalHandler,onPress}) => {
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
          <InternetSelectButton text="SKT" onPress={onPress} />
          <InternetSelectButton text="LGU+" onPress={onPress} />
          <InternetSelectButton text="KT" onPress={onPress} />
        </View>
      </View>
    </View>
  </Modal>
  )
}

export default SelectInternetModal