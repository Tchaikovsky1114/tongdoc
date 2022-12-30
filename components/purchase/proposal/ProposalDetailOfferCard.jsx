import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import SuggestIndexBox from '../suggest/SuggestIndexBox'
import ProposalOrderCardTextLine from './ProposalOrderCardTextLine'
import P_16M from '../../../style/paragraph/P_16M'
import P_14M from '../../../style/paragraph/P_14M'
import P_12R from '../../../style/paragraph/P_12R'

const ProposalDetailOfferCard = ({offer,index,isSelectedOffer,lastSelectOffer,selectOfferHandler}) => {
  return (
    <View key={offer.auct_id} style={styles.offerCard}>
            <View style={styles.offerCardInner}>
              <View style={styles.offerCardHeader}>
              <SuggestIndexBox index={index + 1} />
              <BouncyCheckbox
                size={32}
                fillColor="#fff"
                unfillColor='#fff'
                onPress={(isChecked) => selectOfferHandler(isChecked,index)}
                style={{justifyContent:'center',alignItems:'center',borderWidth:0}}
                iconImageStyle={{width:14}}
                iconStyle={{position:'absolute',top:0,right:0}}
                iconComponent={(isSelectedOffer && lastSelectOffer === index) ? <Image style={{width:32,height:32}} source={require('../../../assets/common/tongdoc_checked.png')} /> : (<Image style={{width:32,height:32}} source={require('../../../assets/common/tongdoc_noncheck.png')} />)}
              />
              </View>

              <View style={{flexDirection:'row'}}>
                <View style={{marginRight:8}}>
                  <P_16M>{offer.phone_name}</P_16M>
                </View>
              </View>
              <ProposalOrderCardTextLine fontSize={14} title="월 예상 납부금액" content={`${(offer.total_price).toLocaleString()}원`} cardStyle={{backgroundColor:'#f6f9ff',marginVertical:24,paddingVertical:10}} contentStyle={{color:'#2d63e2'}} titleStyle={{color:'#2d63e2'}} />

              <View style={styles.devidedOfferHeader}>
                <ProposalOrderCardTextLine fontSize={14} title="정상가" content={`${(offer.phone_price).toLocaleString()}원`} titleStyle={{color:'#666'}} contentStyle={{color:'#666'}} />
                <ProposalOrderCardTextLine fontSize={14} title="공시지원금" content={`-${(offer.offer_price).toLocaleString()}원`} titleStyle={{color:'#666'}} contentStyle={{color:'#2d63e2'}} />
                <ProposalOrderCardTextLine fontSize={14} title="추가할인" content={`-${offer.suggest}원`} titleStyle={{color:'#666'}} contentStyle={{color:'#2d63e2'}} />
                {/* <ProposalOrderCardTextLine fontSize={14} title="실구매가" content={`${}원`} titleStyle={{color:'#666'}} contentStyle={{color:'#666'}} /> */}
                <ProposalOrderCardTextLine fontSize={14} title="부가가치세" content={`${(offer.device_vat).toLocaleString()}원`} titleStyle={{color:'#666'}} contentStyle={{color:'#666'}} />
                <ProposalOrderCardTextLine fontSize={14} title="월 휴대폰 할부금" content={`${(offer.device_price).toLocaleString()}원`} titleStyle={{color:'#000'}} contentStyle={{color:'#000'}} />
              </View>
              <View style={{marginTop:24}}>
                <ProposalOrderCardTextLine fontSize={14} title="월정액 (요금제 : 5G 스마트)" content={`${(offer.bill_price).toLocaleString()}원`} titleStyle={{color:'#666'}} contentStyle={{color:'#666'}} />
                <ProposalOrderCardTextLine fontSize={14} title="선택약정할인" content={`-0원`} titleStyle={{color:'#666'}} contentStyle={{color:'#2d63e2'}} />
                <ProposalOrderCardTextLine fontSize={14} title="기타할인" content={`-0원`} titleStyle={{color:'#666'}} contentStyle={{color:'#2d63e2'}} />
                <ProposalOrderCardTextLine fontSize={14} title="월 통신요금" content={`${(offer.bill_price).toLocaleString()}원`} titleStyle={{color:'#000'}} contentStyle={{color:'#000'}} />
              </View>
              <View style={{marginTop:24}}>
                <P_14M>별도 오퍼</P_14M>
                <P_12R style={{color:'#666'}}>{offer.offer_comment}</P_12R>
              </View>
            </View>
          </View>
  )
}

export default ProposalDetailOfferCard;

const styles = StyleSheet.create({
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
})