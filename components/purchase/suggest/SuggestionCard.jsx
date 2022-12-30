import { Pressable, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import P_12M from '../../../style/paragraph/P_12M'
import P_16M from '../../../style/paragraph/P_16M'
import ProposalOrderCardTextLine from '../proposal/ProposalOrderCardTextLine'
import P_12R from '../../../style/paragraph/P_12R'
import { useNavigation } from '@react-navigation/native'
import SuggestIndexBox from './SuggestIndexBox'

const { width } = Dimensions.get('window');

const SuggestionCard = ({agent,device_price,phone_name,bill_price,offer_price,phone_price,total_price}) => {
  const navigation = useNavigation()

  const goToProposalDetailPage = () => {
    navigation.navigate('ProposalDetail',{
      agent
    })
  }
  
  return (
  <View style={styles.container}>
    <View>  
      <SuggestIndexBox index={1} />
      <View style={styles.modelNameBox}>
        <P_16M>{phone_name}</P_16M>
        <View style={styles.memoryInfoBox}>
          <P_12M style={{color:'#666'}}>32GB</P_12M>
        </View>
      </View>

      <ProposalOrderCardTextLine title="정상가" content={`${(phone_price).toLocaleString()} 원`} />
      <View>
        <ProposalOrderCardTextLine title="월 납부액" content={`${(total_price).toLocaleString()} 원`} />
        <View style={styles.billInfoBox}>
          <P_12R>(휴대폰 {(device_price).toLocaleString()}원 / 요금 {(bill_price).toLocaleString()}원)</P_12R>
        </View>
      </View>
    <ProposalOrderCardTextLine title="별도오퍼" content={`${(offer_price).toLocaleString()}원 상당`} />
  </View>
  <View style={styles.buttonLayout}>
    <Pressable
      onPress={goToProposalDetailPage}
      style={({pressed}) => pressed ? styles.pressedButton : styles.button}>
      <View>
        <P_16M style={{color:'#fff'}}>제안 상세보기</P_16M>
      </View>
    </Pressable>
  </View>
</View>
    )
}

export default SuggestionCard;

const styles = StyleSheet.create({
  container:{
    marginTop:16,
    backgroundColor:'#fff',
    width: width - 98,
  },
  buttonLayout: {
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    height:58,
    backgroundColor:'rgb(45,99,226)',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16,
    width:'50%',
    marginTop:24
  },
  pressedButton: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16,
    width:'50%',
    marginTop:24,
    height:58,
    backgroundColor:'rgba(45,99,226,0.75)'
  },
  memoryInfoBox:{
    backgroundColor:'#f6f6f6',
    paddingVertical:4,
    paddingHorizontal:8,
    marginLeft:8
  },
  modelNameBox:{
    flexDirection:'row',
    marginBottom:8
  },
  billInfoBox:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginBottom:8
  }
})