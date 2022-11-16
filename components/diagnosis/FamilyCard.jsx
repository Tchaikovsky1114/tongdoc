import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import P_16M from '../../style/paragraph/P_16M'
import P_12R from '../../style/paragraph/P_12R'
import P_14M from '../../style/paragraph/P_14M'
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function FamilyCard({name,phoneNumber,telecom,savingMoney,defaultMoney}) {
  return (
    <View style={[styles.container,{borderColor: name === '오로라' ? '#2D63E2' : '#ddd',borderWidth: name === '오로라' ? 2 : 1}]}>
      <View>
        <P_16M>{name} {name === '오로라' ? <Text>(나)</Text> : null}</P_16M>
        <View style={{flexDirection:'row'}}>
          <P_12R style={{color:'#666666',paddingRight:8}}>{telecom}</P_12R>
          <P_12R style={{color:'#666666'}}>{phoneNumber}</P_12R>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <P_14M>{parseInt(savingMoney).toLocaleString()}원</P_14M>
        <P_14M>({parseInt(defaultMoney - savingMoney).toLocaleString()})</P_14M>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    marginVertical:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:16,
    borderRadius: 16,
    height:64,
  },
})