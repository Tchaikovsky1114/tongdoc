import { View, StyleSheet } from 'react-native'
import React from 'react'
import P_12M from '../../../style/paragraph/P_12M';
import P_12R from '../../../style/paragraph/P_12R';

const AddPhoneInfoBox = () => {
  return (
    <View style={styles.infoContainer}>
          <View style={styles.infoText}>
            <P_12M style={styles.infoIndex}>1.</P_12M>
            <P_12R style={{ color: '#666' }}>
              해당 가족에게 동의 요청 안내 문자를 발송합니다.
            </P_12R>
          </View>
          <View style={styles.infoText}>
            <P_12M style={styles.infoIndex}>2.</P_12M>
            <P_12R style={{ color: '#666' }}>
              해당 가족의 휴대폰 요금 청구서 수신 후 가계통신비 점검이 진행됩니다.
            </P_12R>
          </View>
        </View>
  )
}

export default React.memo(AddPhoneInfoBox);

const styles = StyleSheet.create({
  infoContainer:{
    marginTop: 40,
    backgroundColor: '#F6F9FF',
    padding: 8,
    borderRadius: 8,
  },
  infoText:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  infoIndex:{ marginRight: 8, color: '#2D63E2' }

})