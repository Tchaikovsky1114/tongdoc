import { FlatList, SafeAreaView, StyleSheet, View,Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AgentProposalTemplate from '../AgentProposalTemplate'
import OrderHistoryCard from './OrderHistoryCard'
import PurchaseHeadingBox from '../PurchaseHeadingBox'


export default function ReceivedProposal() {
  const { params: { buyInfo: { buy, tongdoc_direct:tongdocDirect, offers }} } = useRoute();
  const renderOrderHistoryCard = ({item}) => (
    <OrderHistoryCard
    modelName={item.phone_name}
    orderedDate={item.created_at}
    modelType={item.choice_com}
    internet={item.with_internet}
    telecoms={item.current_telecom}
    id={item.phone_id}
    servicePlanName={item.plan_name}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner} scrollEnabled>
        <View style={{position:'relative'}}>
          <PurchaseHeadingBox text="주문 내역" />
          <FlatList
            pagingEnabled
            horizontal
            renderItem={renderOrderHistoryCard}
            data={[buy]}
            keyExtractor={item => item.plan_id}
            showsHorizontalScrollIndicator={false}
            />
        </View>
        <View style={{backgroundColor:'#fff',marginBottom:16}}>
        <PurchaseHeadingBox text="구매 제안서" />
          <AgentProposalTemplate agent={tongdocDirect} />
          {offers && offers.map((offer) => <AgentProposalTemplate agent={offer} />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    minHeight:'100%'
  },
  inner:{
    paddingHorizontal:24,
    backgroundColor:'#fff',
    
  },
  suggestionList:{
    paddingHorizontal: 16,
    paddingVertical:24,
    backgroundColor:'#fff',
    borderRadius:16,
    shadowRadius: 16,
    borderWidth: 0,
    borderColor: 'none',
    shadowColor: '#000' ,
    elevation: 3,
    justifyContent:'center',
    alignItems:'center',
  }
})