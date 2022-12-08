import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import H4_24R from '../../../style/H4_24R';
import P_12R from '../../../style/paragraph/P_12R';
import P_14R from '../../../style/paragraph/P_14R';
import { ScrollView } from 'react-native-gesture-handler';

export default function InquiryDetail({route}) {
  const { inquiryDetail } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      {
        !inquiryDetail
        ? <ActivityIndicator />
        : <ScrollView>
            <View style={styles.header}>
            <H4_24R style={styles.title}>{inquiryDetail.subject}</H4_24R>
            <P_12R style={{color:'#666'}}>{inquiryDetail.updated_at.split('/')[0]}년 {inquiryDetail.updated_at.split('/')[1]}월 {inquiryDetail.updated_at.split('/')[2]}일</P_12R>
            </View>
            <View style={[styles.postedReview]}>
              <P_14R>{inquiryDetail.contents}</P_14R>
            </View>
            <View style={[styles.receivedReview]}>
              <P_14R style={{marginBottom:8,color:'#333'}}>통닥 답변</P_14R>
              
              { inquiryDetail.answer
              ? <P_14R>{inquiryDetail.answer}</P_14R>
              : <P_14R style={{color:'#999'}}>아직 답변이 도착하지 않았어요!</P_14R>
              }
              
            </View>
          </ScrollView>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:24,
  },
  title:{
    marginTop:40,
    marginBottom:8
  },
  header:{
    marginBottom:40,
  },
  postedReview:{
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    minHeight:200
  },
  receivedReview:{
    paddingTop:24 
  }
})