import { View, Text } from 'react-native'
import React from 'react'

const SelectMonthModal = () => {
  return (
    <Modal
            visible={isSelectMonthModalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={toggleSelectMonthModalHandler}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalInner}>
                <View
                  style={styles.choiceMonthBox}
                >
                  <P_16M>월 선택하기</P_16M>
                  <Pressable onPress={toggleSelectMonthModalHandler}>
                    <Image
                      style={{ width: 24, height: 24 }}
                      source={require('../../assets/common/close.png')}
                    />
                  </Pressable>
                </View>
                <View style={{ alignItems: 'flex-start', width: '100%' }}>
                  {diagnosisResultData.dates.map((item) => (
                    <Pressable
                      key={item.text + Math.random()}
                      style={({ pressed }) => [styles.monthBox,{backgroundColor: pressed ? 'rgba(0,0,255,0.2)': '#fff'}]}
                      onPress={() => {
                        fetchGetDiagnosisData(item.year, item.month);
                        toggleSelectMonthModalHandler();
                      }}
                    >
                      <P_14R>{item.text}</P_14R>
                    </Pressable>
                  ))}
                </View>
              </View>
            </View>
          </Modal>
  )
}

export default SelectMonthModal

const styles = StyleSheet.create({
  
})