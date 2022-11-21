import { FlatList, StyleSheet, Text, View,Dimensions } from 'react-native'
import React, { useEffect } from 'react';
import P_14M from '../../style/paragraph/P_14M';
import P_14R from '../../style/paragraph/P_14R';
import P_12M from '../../style/paragraph/P_12M';
const reviews = [
  {
    id:1,
    title: '우리 가족 통신비가 연간 무려 70여만원(한달에 59,000원)이나 절감되었어요.',
    description:'그동안 아무것도 모르고 자동이체로 매달 통신비가 빠져나가고 있었는데, 이번에 통닥으로 점검을 하려고 등록해 보니 4인 가족인 우리집에서 내는 통신비가 인터넷까지 무려 한달에 약 32만 5천원 정도라구요...',
  },
  {
    id:2,
    title: '저도 몰랐던 유료 부가서비스가 1년 넘게 매달 12,000원씩 빠져나가고 있었네요. ㅠㅠ',
    description:'통닥으로 점검을 해보니 인터넷 요금중에 저도 기억이 나지 않는 유료 부가서비스가 매달 12,000원씩 결제되고 있었네요.ㅠ 아마 우리 얘 VOD를 보여주려고 신청했던게 1회인지 알...',
  },
  {
    id:3,
    title: '휴대폰 구매시 6개월 의무라고 가입한 고가요금제를 잊고 있었네요.',
    description:'휴대폰을 구매할때 기계값을 싸게 주는 대신 고가 요금제를 6개월간 꼭 써야 한다고 해서 저의 사용량보다 3만 5천이나 비싼 요금제를 가입하고 지금까지 잊고 있었네요. 금번 통닥의 분석내용을 보고서야 알게되었습니다. ㅠㅠ...',
  },
  {
    id:4,
    title: '가족 모두의 통신비를 한눈에 보고 관리할 수 있어서 좋네요.',
    description:'저희 가족은 딸을 포함해서 3명인데, 그 동안 신경쓰지 않았던 결합할인을 받으려고 부모님까지 묶었더니 월 2만원 이상 더 절감이 되더군요. 통닥에서 가족 모두의 통신비 현황을 매달 한눈에 볼수 있.',
  },
  
]

const {width} = Dimensions.get('window');

export default function ReviewCarousel() {

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View style={styles.itemInner}>
      <View style={styles.reviewIndexBox}>
      <P_12M style={{textAlign:'left',color:'#2D63E2'}}>후기 {item.id}</P_12M>
      </View>
      <View style={styles.title}>
        <P_14M>{item.title}</P_14M>
      </View>
      <View style={styles.description}>
        <P_14R style={{color:'#666666'}}>{item.description}</P_14R>
      </View>
      <View style={{width:'100%'}}>
        <P_12M style={{textAlign:'right',color:'#2D63E2'}}>더보기</P_12M>
      </View>
    </View>
    </View>
  )
  
  useEffect(() => {

  },[])
  return (
    <FlatList contentContainerStyle={styles.container} data={reviews} renderItem={renderItem} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} pagingEnabled />
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:6,
    alignItems:'center',
    
  },
  item:{
    paddingVertical:10,
  },
  itemInner:{
    width: width - 64,
    backgroundColor:'#fff',
    borderRadius:16,
    paddingHorizontal:16,
    paddingVertical:24,
    marginHorizontal:8,
    alignItems:'center',
    height:260,
  },
  reviewIndexBox:{
    width:'100%'
  },
  title:{
    marginVertical:8
  },
  description:{}
})