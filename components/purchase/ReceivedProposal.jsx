import { FlatList, SafeAreaView, StyleSheet, Text, View,Dimensions, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import P_16M from '../../style/paragraph/P_16M'
import P_12R from '../../style/paragraph/P_12R'
import ProposalOrderCardTextLine from './ProposalOrderCardTextLine'
import P_12M from '../../style/paragraph/P_12M'


const {width} = Dimensions.get('window')

const DUMMY_DATA = [
  {
    id:'1',
    agent:'통닥 다이렉트',
    address:'',
    agentImage:require('../../assets/tongdocdirect.png'),
    orderedDate: '2022.12.9',
    modelType:'삼성/고급형',
    modelName:'삼성전자 갤럭시 M20',
    internet: false,
    telecoms: 'SKT',
    serviceFee:'가성비 좋은 5G(180GB+)',
    factoryPrice:1100000,
    totalMonthlyPayment:83000,
    deviceMonthlyPayment:46750,
    feeMonthlyPayment:44000,
    specialOffer:200000
  },
  {
    id:'2',
    agent:'통닥 다이렉트',
    address:'구로구 신대방동 123번지',
    agentImage:require('../../assets/tongdocdirect.png'),
    orderedDate: '2022.12.14',
    modelType:'삼성/보급형',
    modelName:'삼성전자 갤럭시 A235',
    internet: false,
    telecoms: 'LG',
    serviceFee:'가성비 좋은 5G(50GB+)',
    factoryPrice:680000,
    totalMonthlyPayment:41000,
    deviceMonthlyPayment:15450,
    feeMonthlyPayment:25550,
    specialOffer:400000
  }
]

const OrderHistoryCard = ({modelName,orderedDate,modelType,internet,telecoms,serviceFee}) => (
  <View style={{flex:1,backgroundColor:'#fff',marginBottom:40}}>
    <View style={{backgroundColor:'#f6f9ff',width:width-52,padding:24,borderRadius:16}}>
      <ProposalOrderCardTextLine title="주문일" content={orderedDate} />
      <ProposalOrderCardTextLine title="단말기" content={modelType} />
      <ProposalOrderCardTextLine title="모델" content={modelName} />
      <ProposalOrderCardTextLine title="인터넷 동시가입 여부" content={internet ? 'O' : 'X'} />
      <ProposalOrderCardTextLine title="가입통신사" content={telecoms} />
      <ProposalOrderCardTextLine title="요금제" content={serviceFee} />
    </View>
  </View>
)
const SuggestionCard = ({agent,modelName,orderedDate,modelType,internet,telecoms,id,serviceFee,factoryPrice,totalMonthlyPayment,deviceMonthlyPayment,feeMonthlyPayment,agentImage,specialOffer}) => (
  
  <View style={{flex:1,backgroundColor:'#fff',marginBottom:16}}>
    <View
    style={{
      width: width-48,
      padding: 10,
      backgroundColor:'#fff',
      borderRadius:16,
      shadowRadius: 16,
      borderWidth: (id === '1') ? 1 : 0,
      borderColor: (id === '1') ? '#2d63e2' : 'none',
      shadowColor: (id === '1') ? '#fff' : '#000' ,
      elevation: (id === '1') ? 0 : 2,
      justifyContent:'center',
      alignItems:'center',
    }}
      >
        
        <View style={{borderBottomWidth:1,borderBottomColor:'#ddd'}}>

          <View style={{flexDirection:'row',padding:24,justifyContent:'center',alignItems:'center',width:'90%'}}>
            <Image style={{width:50,height:50,marginRight:16}} source={agentImage} />
            <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <P_16M>{agent}</P_16M>
                <View style={{backgroundColor:'#f6f9ff',paddingVertical:4,paddingHorizontal:8,marginLeft:16,borderRadius:8}}>
                <P_12M style={{textAlign:'center',color:'#2d63e2'}}>방문 예약 접수</P_12M>
                </View>
              </View>
              <View>
                <P_12R style={{color:'#666'}}>통닥에서 온라인 주문 접수 후 배송하는 서비스입니다.</P_12R>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginBottom:24,paddingRight:24}}>
            <View style={{flexDirection:'row',marginRight:8}}>
              <P_12R style={{marginRight:2}}>평점</P_12R>
              <Image style={{width:72,height:16}} source={require('../../assets/stars.png')} />
            </View>
            <View style={{flexDirection:'row'}}>
              <P_12R style={{marginRight:2}}>구매후기</P_12R>
              <P_12R>10</P_12R>
            </View>
          </View>
        </View>

        <View style={{marginTop:16,width:'100%',paddingHorizontal:12}}>
          <View style={{paddingVertical:4,paddingHorizontal:8, borderWidth:1,borderColor:'rgb(45,99,226)',justifyContent:'flex-start',alignItems:'center',width:54,borderRadius:8,marginTop:8,marginBottom:16 }}>
            <P_12M style={{color:'rgb(45,99,226)'}}>제안1</P_12M>
          </View>
          <View style={{flexDirection:'row'}}>
            <P_16M>{modelName}</P_16M>
            <View style={{backgroundColor:'#f6f6f6',paddingVertical:4,paddingHorizontal:8,marginLeft:8}}>
              <P_12M style={{color:'#666'}}>32GB</P_12M>
            </View>
          </View>
          <ProposalOrderCardTextLine title="정상가" content={factoryPrice} />
          <View>
            <ProposalOrderCardTextLine title="월 납부액" content={totalMonthlyPayment} />
            <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginBottom:8,marginTop:-8}}>
              <P_12R>(휴대폰 {deviceMonthlyPayment}원 / 요금 {feeMonthlyPayment}원)</P_12R>
            </View>
          </View>
          <ProposalOrderCardTextLine title="별도오퍼" content={`${specialOffer}원 상당`} />
        </View>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'rgba(45, 99, 226,0.75)' : 'rgb(45, 99, 226)',height:58,},{justifyContent:'center',alignItems:'center',borderRadius:16,width:'50%'}]}>
          <View >
          <P_16M style={{color:'#fff'}}>제안 상세보기</P_16M>
          </View>
        </Pressable>
    </View>
  </View>
)

export default function ReceivedProposal() {

  const renderOrderHistoryCard = ({item}) => (
    <OrderHistoryCard
    modelName={item.modelName}
    orderedDate={item.orderedDate}
    modelType={item.modelType}
    internet={item.internet}
    telecoms={item.telecoms}
    id={item.id}
    serviceFee={item.serviceFee}
    
    />
  )

  const renderSuggestionCard = ({item}) => (
    <SuggestionCard
      id={item.id}
      modelName={item.modelName}
      orderedDate={item.orderedDate}
      modelType={item.modelType}
      internet={item.internet}
      telecoms={item.telecoms}
      agent={item.agent}
      serviceFee={item.serviceFee}
      agentImage={item.agentImage}
      factoryPrice={item.factoryPrice}
      deviceMonthlyPayment={item.deviceMonthlyPayment}
      feeMonthlyPayment={item.feeMonthlyPayment}
      totalMonthlyPayment={item.totalMonthlyPayment}
      specialOffer={item.specialOffer}
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
            data={DUMMY_DATA}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            >
          </FlatList>
        </View>

        <View>
          <P_16M style={{marginBottom:16}}>구매 제안서</P_16M>
          <FlatList
            extraData={DUMMY_DATA}
            pagingEnabled
            horizontal
            renderItem={renderSuggestionCard}
            data={DUMMY_DATA}
            keyExtractor={item => item.id + 'suggestion'}
            showsHorizontalScrollIndicator={false}
            >
          </FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
  },
  inner:{
    paddingHorizontal:24,
  },

})