import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import P_12R from '../../style/paragraph/P_12R'
import P_12M from '../../style/paragraph/P_12M'
import P_16M from '../../style/paragraph/P_16M'
import AwaitSuggestion from './suggest/AwaitSuggestion'
import SuggestionCard from './suggest/SuggestionCard'
const agentImage = require('../../assets/tongdocdirect.png');




export default function AgentProposalTemplate({agent}) {
  
  const renderSuggestionCard = ({item}) => (
    <SuggestionCard
      phone_name={item.phone_name}
      auct_id={item.auct_id}
      bill_price={item.bill_price}
      device_vat={item.device_vat}
      id={item.id}
      offer_comment={item.offer_comment}
      offer_price={item.offer_price}
      phone_price={item.phone_price}
      phone_storage={item.phone_storage}
      suggest={item.suggest}
      total_price={item.total_price}
      agent={agent}
      item={item}
      device_price={item.device_price}
    />)

  return (
    <View style={styles.container} >
        <View style={styles.inner}>
          <View style={styles.header}>
            <Image style={styles.agentImage} source={agentImage} />
            <View style={styles.agentBox}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <P_16M>{agent.store_name}</P_16M>
                <View style={styles.reservationBox}>
                <P_12M style={{textAlign:'center',color:'#2d63e2'}}>방문 예약 접수</P_12M>
                </View>
              </View>
              <View style={{marginTop:2}}>
                <P_12R style={{color:'#666'}}>{agent.introduce} </P_12R>
              </View>
            </View>
          </View>
          <View style={styles.agentEvaluatedBox}>
            <View style={styles.agentScoreBox}>
              <P_12R style={{marginRight:2}}>평점</P_12R>
              <Image style={{width:72,height:16}} source={require('../../assets/stars.png')} />
            </View>
            <View style={{flexDirection:'row'}}>
              <P_12R style={{marginRight:2}}>구매후기</P_12R>
              <P_12R>{agent.review_cnt}</P_12R>
            </View>
          </View>
        </View>
          <FlatList
              pagingEnabled
              horizontal
              renderItem={renderSuggestionCard}
              data={agent.offer}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<AwaitSuggestion />}
            />
          </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
    marginBottom:16,
  },
  inner:{
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center',
    alignItems:'center',
  },
  header:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'90%'},
  reservationBox:{backgroundColor:'#f6f9ff',paddingVertical:4,paddingHorizontal:8,marginLeft:16,borderRadius:8},
  agentBox:{justifyContent:'flex-start',alignItems:'flex-start'},
  agentBoxInner:{

  },
  agentImage:{width:50,height:50,marginRight:16},
  agentEvaluatedBox:{flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',width:'100%',marginVertical:16},
  agentScoreBox:{flexDirection:'row',marginRight:8}
})