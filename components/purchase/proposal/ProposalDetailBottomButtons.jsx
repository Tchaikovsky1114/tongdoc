import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ProposalDetailBottomButton from './ProposalDetailBottomButton'

const ProposalDetailBottomButtons = () => {
  return (
    <View style={styles.container}>
      <ProposalDetailBottomButton pressedBackgroundColor={'#e1e9fa'} defaultBackgroundColor={'#fff'} style={{flex:1}} text="문자 상담" textColor={{color:'#2d63e2'}} />
      <ProposalDetailBottomButton pressedBackgroundColor={'#e1e9fa'} defaultBackgroundColor={'#fff'} style={{flex:1}} text="전화 상담" textColor={{color:'#2d63e2'}} />
      <ProposalDetailBottomButton pressedBackgroundColor={'rgba(45, 99, 226,0.7)'} defaultBackgroundColor={'#2d63e2'} style={{flex:2}} text="방문 예약" textColor={{color:'#fff'}}/>
    </View>
  )
}

export default React.memo(ProposalDetailBottomButtons)

const styles = StyleSheet.create({
  container: {
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  height:50
  },

})