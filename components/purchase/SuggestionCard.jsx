import { Pressable, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import P_12M from '../../style/paragraph/P_12M'
import P_16M from '../../style/paragraph/P_16M'
import ProposalOrderCardTextLine from './ProposalOrderCardTextLine'
import P_12R from '../../style/paragraph/P_12R'

const { width } = Dimensions.get('window');

const SuggestionCard = ({device_price,phone_name,auct_id,bill_price,device_vat,id,offer_comment,offer_price,phone_price,phone_storage,suggest,total_price}) => {

return (
  <View style={{marginTop:16,backgroundColor:'#fff',width: width - 98}}>
    <View>  
      <View style={{
        paddingVertical:4,
        paddingHorizontal:8,
        borderWidth:1,
        borderColor:'rgb(45,99,226)',
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius:8,
        width:54,
        marginTop:8,
        marginBottom:4 }}>
        <P_12M style={{color:'rgb(45,99,226)'}}>제안 1</P_12M>
      </View>

      <View style={{flexDirection:'row',marginBottom:8}}>
        <P_16M>{phone_name}</P_16M>
        <View style={{backgroundColor:'#f6f6f6',paddingVertical:4,paddingHorizontal:8,marginLeft:8}}>
          <P_12M style={{color:'#666'}}>32GB</P_12M>
        </View>
      </View>

      <ProposalOrderCardTextLine title="정상가" content={`${(phone_price).toLocaleString()} 원`} />
      <View>
        <ProposalOrderCardTextLine title="월 납부액" content={`${(total_price).toLocaleString()} 원`} />
        <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginBottom:8,marginTop:-8}}>
          <P_12R>(휴대폰 {(device_price).toLocaleString()}원 / 요금 {(bill_price).toLocaleString()}원)</P_12R>
        </View>
      </View>
    <ProposalOrderCardTextLine title="별도오퍼" content={`${(offer_price).toLocaleString()}원 상당`} />
  </View>

  <Pressable onPress={() => goToProposalDetailPage(item)} style={({pressed}) => [{backgroundColor: pressed ? 'rgba(45, 99, 226,0.75)' : 'rgb(45, 99, 226)',height:58,},{justifyContent:'center',alignItems:'center',borderRadius:16,width:'100%'}]}>
    <View >
      <P_16M style={{color:'#fff'}}>제안 상세보기</P_16M>
    </View>
  </Pressable>
</View>
    )
}

export default SuggestionCard;

const styles = StyleSheet.create({})