import { SafeAreaView, ScrollView, StyleSheet,LayoutAnimation, UIManager } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import 'intl/locale-data/jsonp/en-ZA'
import axios from 'axios'

import ProposalDetailBottomButtons from './ProposalDetailBottomButtons'
import ProposalDetailFirstReviewBox from './ProposalDetailFirstReviewBox'
import ProposalDeatailAgentEvaluatedBox from './ProposalDetailAgentEvaluatedBox'
import ProposalDetailHeader from './ProposalDetailHeader'
import ProposalDetailSuggestTitle from './ProposalDetailSuggestTitle'
import ProposalDetailOfferCard from './ProposalDetailOfferCard'
import LoadingIndicator from '../../common/LoadingIndicator'
import ProposalDetailCautionBox from './ProposalDetailCautionBox'

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

  const showAllIntroduceHandler = useCallback(() => {
    LayoutAnimation.configureNext({
      duration: 500,
      // create: { type: "linear", property: "opacity" },
      update: { type: "spring", springDamping: 0.8 },
      // delete: { type: "linear", property: "opacity" }
    });
    setIsShowAllText((prev) => !prev)
  },[])

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

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.inner}>
        
        <ProposalDetailHeader showAllIntroduceHandler={showAllIntroduceHandler} isShowAllText={isShowAllText} agent={agent} />
        <ProposalDeatailAgentEvaluatedBox reviewCount={agent.review_cnt} />

        {agentReview
        ? <ProposalDetailFirstReviewBox review={agentReview.reviews[0]} />
        : <LoadingIndicator />
        }
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
          <ProposalDetailCautionBox />
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
  devidedOfferHeader:{
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    borderStyle:'dashed'
}
})