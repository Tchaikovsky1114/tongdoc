import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import P_16M from '../../../style/paragraph/P_16M'
import P_12R from '../../../style/paragraph/P_12R'

const ProposalDetailSuggestTitle = () => {
  return (
    <View style={styles.suggestHeader}>
    <P_16M>제안 내용</P_16M>
    <View style={{marginTop:8}}>
      <P_12R style={{color:'#666'}}>아래 두 가지 중 원하는 제안서에 체크한 뒤 방문 예약 접수해 주세요.</P_12R>
    </View>
  </View>
  )
}

export default ProposalDetailSuggestTitle

const styles= StyleSheet.create({
  suggestHeader:{justifyContent:'flex-start',width:'80%',marginTop:40,marginBottom:16}
})