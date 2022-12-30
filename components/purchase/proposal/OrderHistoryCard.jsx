import { View, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import ProposalOrderCardTextLine from './ProposalOrderCardTextLine'

const {width} = Dimensions.get('window')

const OrderHistoryCard = ({modelName,orderedDate,modelType,internet,telecoms,servicePlanName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <ProposalOrderCardTextLine title="주문일" content={orderedDate} />
        <ProposalOrderCardTextLine title="단말기" content={modelType} />
        <ProposalOrderCardTextLine title="모델" content={modelName} />
        <ProposalOrderCardTextLine title="인터넷 동시가입 여부" content={internet ? 'O' : 'X'} />
        <ProposalOrderCardTextLine title="가입통신사" content={telecoms} />
        <ProposalOrderCardTextLine title="요금제" content={servicePlanName} />
      </View>
    </View>
  )
}

export default React.memo(OrderHistoryCard);


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    marginBottom:40,
  },
  inner: {
    backgroundColor:'#f6f9ff',
    width: width - 52,
    padding:24,
    borderRadius:16
  }
})