import { Animated,SafeAreaView, ScrollView, StyleSheet, Text, View,LayoutAnimation, UIManager, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import P_12R from '../../../style/paragraph/P_12R'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import P_12M from '../../../style/paragraph/P_12M'
import ProposalDetailBottomButtons from './ProposalDetailBottomButtons'
import ProposalDetailFirstReviewBox from './ProposalDetailFirstReviewBox'
import ProposalDeatailAgentEvaluatedBox from './ProposalDetailAgentEvaluatedBox'
import ProposalDetailHeader from './ProposalDetailHeader'
import ProposalDetailSuggestTitle from './ProposalDetailSuggestTitle'
import ProposalDetailOfferCard from './ProposalDetailOfferCard'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}


export default function ProposalDetail() {
  const {params:{agent}} = useRoute()
  const [isShowAllText,setIsShowAllText] = useState(false)
  const [agentInfo,setAgentInfo] = useState();
  const [agentReview,setAgentReview] = useState();
  const [isSelectedOffer,setIsSelectedOffer] = useState(false);
  const [lastSelectOffer,setLastSelectOffer] = useState(null);

    const showAllIntroduceHandler = () => {
      
    LayoutAnimation.configureNext({
      duration: 500,
      // create: { type: "linear", property: "opacity" },
      update: { type: "spring", springDamping: 0.8 },
      // delete: { type: "linear", property: "opacity" }
    });
    setIsShowAllText((prev) => !prev)
  }

  const getAgentInfo = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get(`https://api.tongdoc.co.kr/v1/agent/${agent.agent_id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAgentInfo(data)  
    } catch (error) {
      console.error(error.response.data);
    }
  }

  const getAgentReview = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get(`https://api.tongdoc.co.kr/v1/agent/${agent.agent_id}/review`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAgentReview(data)  
    } catch (error) {
      console.error(error.response.data);
    }
    
  }

  const selectOfferHandler = (isChecked,index) => {
    setLastSelectOffer(index);
    setIsSelectedOffer(isChecked);
  }

  useEffect(() => {
    getAgentInfo();
    getAgentReview();
  },[])

  console.log(agent);


  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.inner}>
        <ProposalDetailHeader showAllIntroduceHandler={showAllIntroduceHandler} isShowAllText={isShowAllText} agent={agent} />
        <ProposalDeatailAgentEvaluatedBox reviewCount={agent.review_cnt} />

        {agentReview ? <ProposalDetailFirstReviewBox review={agentReview.reviews[0]} /> : <P_12R>Loading...</P_12R>}
        
        <ProposalDetailSuggestTitle />
        
        {agent.offer.map((offer,index) => (
        <ProposalDetailOfferCard
          key={offer.auct_id}
          offer={offer}
          index={index}
          isSelectedOffer={isSelectedOffer}
          lastSelectOffer={lastSelectOffer}
          selectOfferHandler={selectOfferHandler}
          />
          ))}
          <View style={styles.cautionBox}>
            <View style={styles.cautionInner}>
              <P_12M style={{color:'#ff3a3a'}}>주의</P_12M>
            </View>
              <P_12R style={styles.cautionText}>제휴카드 발급, 상조가입 할인 등은 어느 매장에서나 받을 수 있는 제도로 별도의 할인이나 오퍼가 아닙니다.</P_12R>
            </View>
          <ProposalDetailBottomButtons />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:24
  },
  inner:{
    backgroundColor:'#fff',
    minHeight:'100%',
    alignItems:'center',
  },
  header:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:16
  },
  offerCard:{elevation:3,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2
    },
    width:'80%',
    padding:16,
    marginBottom:16,
    shadowRadius:16,
    borderRadius:16,
    backgroundColor:'#fff'
  },
  offerCardInner:{
    width:'100%',
    borderRadius:16,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'stretch'
  },
  offerCardHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },

  reviewBox:{
  width:'70%',
  marginTop:16,
   backgroundColor:'#f6f9ff',
  padding:16,
  borderRadius:8
  },
  suggestHeader:{
  justifyContent:'flex-start',
  width:'80%',
  marginTop:40,
  marginBottom:16
  },
  cautionBox:{
  flexDirection:'row',
   justifyContent:'space-between',
  alignItems:'center',
  marginBottom:48,
  width:'80%'
  },
  cautionInner:{
  backgroundColor:'#fff1f1',
  paddingVertical:4,
  paddingHorizontal:8,
  borderRadius:8
  },
  cautionText:{
  color:'#666',
  maxWidth:265
  },
  devidedOfferHeader:{
  paddingBottom:24,
  borderBottomWidth:1,
  borderBottomColor:'#ddd',
  borderStyle:'dashed'
}
})