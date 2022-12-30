import { View, StyleSheet } from 'react-native'
import React from 'react'
import P_12M from '../../../style/paragraph/P_12M'
import P_12R from '../../../style/paragraph/P_12R'

const ProposalDetailCautionBox = () => {
  return (
    <View style={styles.cautionBox}>
      <View style={styles.cautionInner}>
        <P_12M style={{color:'#ff3a3a'}}>주의</P_12M>
      </View>
      <P_12R style={styles.cautionText}>제휴카드 발급, 상조가입 할인 등은 어느 매장에서나 받을 수 있는 제도로 별도의 할인이나 오퍼가 아닙니다.</P_12R>
    </View>
  )
}

export default React.memo(ProposalDetailCautionBox);


const styles = StyleSheet.create({
  cautionBox:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:48,
    width:'80%'
  },
  cautionInner:{
    backgroundColor:'#fff1f1',
    paddingVertical:4,
    paddingHorizontal:8,
    borderRadius:8,
    marginRight:8
  },
  cautionText:{
    color:'#666',
    maxWidth:265
  },
})