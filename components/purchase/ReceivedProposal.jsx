import { FlatList, SafeAreaView, StyleSheet, Text, View,Dimensions, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import P_16M from '../../style/paragraph/P_16M'
import P_12R from '../../style/paragraph/P_12R'
import ProposalOrderCardTextLine from './ProposalOrderCardTextLine'
import P_12M from '../../style/paragraph/P_12M'
import AwaitSuggestion from './AwaitSuggestion'
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native'
import SuggestionCard from './SuggestionCard'


const {width} = Dimensions.get('window')

const agentImage = require('../../assets/tongdocdirect.png');



const OrderHistoryCard = ({modelName,orderedDate,modelType,internet,telecoms,servicePlanName}) => (
  <View style={{backgroundColor:'#fff',marginBottom:40}}>
    <View style={{backgroundColor:'#f6f9ff',width:width-52,padding:24,borderRadius:16}}>
      <ProposalOrderCardTextLine title="주문일" content={orderedDate} />
      <ProposalOrderCardTextLine title="단말기" content={modelType} />
      <ProposalOrderCardTextLine title="모델" content={modelName} />
      <ProposalOrderCardTextLine title="인터넷 동시가입 여부" content={internet ? 'O' : 'X'} />
      <ProposalOrderCardTextLine title="가입통신사" content={telecoms} />
      <ProposalOrderCardTextLine title="요금제" content={servicePlanName} />
    </View>
  </View>
)


export default function ReceivedProposal() {
  const navigation = useNavigation();
  const { params: { buyInfo: { buy, tongdoc_direct:tongdocDirect, offers }} } = useRoute();
  console.log(tongdocDirect.offer);
  const goToProposalDetailPage = (suggestion) => {
    navigation.navigate('ProposalDetail',{
      suggestion
    })
  }
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
      goToProposalDetailPage={goToProposalDetailPage}
      item={item}
      device_price={item.device_price}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner} scrollEnabled>
        <View style={{position:'relative'}}>
          <P_16M style={{marginBottom:16}}>주문 내역</P_16M>
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
    <P_16M style={{marginBottom:16}}>구매 제안서</P_16M>
      <View style={styles.suggestionList} >
        <View style={{borderBottomWidth:1,borderBottomColor:'#ddd',justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'90%'}}>
            <Image style={{width:50,height:50,marginRight:16}} source={agentImage} />
            <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <P_16M>{tongdocDirect.store_name}</P_16M>
                <View style={{backgroundColor:'#f6f9ff',paddingVertical:4,paddingHorizontal:8,marginLeft:16,borderRadius:8}}>
                <P_12M style={{textAlign:'center',color:'#2d63e2'}}>방문 예약 접수</P_12M>
                </View>
              </View>
              <View style={{marginTop:2}}>
                <P_12R style={{color:'#666'}}>{tongdocDirect.introduce} </P_12R>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',width:'100%',marginVertical:16}}>
            <View style={{flexDirection:'row',marginRight:8}}>
              <P_12R style={{marginRight:2}}>평점</P_12R>
              <Image style={{width:72,height:16}} source={require('../../assets/stars.png')} />
            </View>
            <View style={{flexDirection:'row'}}>
              <P_12R style={{marginRight:2}}>구매후기</P_12R>
              <P_12R>{tongdocDirect.review_cnt}</P_12R>
            </View>
          </View>
        </View>
          <FlatList   
              pagingEnabled
              horizontal
              renderItem={renderSuggestionCard}
              data={tongdocDirect.offer}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<AwaitSuggestion />}
            />
          </View>
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