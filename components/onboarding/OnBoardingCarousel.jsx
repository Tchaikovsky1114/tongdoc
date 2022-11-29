import React, { useState,useRef, useEffect } from 'react';
import { Dimensions, View,StyleSheet,Text,ScrollView,Image } from 'react-native';
import CircleIndicator from './CircleIndicator';
import H3_26M from '../../style/H3_26M';
import P_20R from '../../style/paragraph/P_20R';

const {width} = Dimensions.get('window');




const PAGES = [
  {
    num:1,
    title:'통신비 무료 진단',
    description:'연간 최대 수십만 원까지 \n 절약할 수 있습니다.',
    imageURL:require('../../assets/onboarding_img1.png')
  },
  {
    num:2,
    title:'최적의 요금제 추천',
    description:'내 데이터에 딱 맞는 요금제를 \n 추천받습니다.',
    imageURL:require('../../assets/onboarding_img2.png')
  },
  {
    num:3,
    title:'더 큰 혜택을 가족과 함께',
    description:'인원이 늘어날수록 \n 할인 혜택도 커집니다.',
    imageURL:require('../../assets/onboarding_img3.png')
  },
  {
    num:4,
    title:'매장별 휴대폰 판매 조건 비교',
    description:'주변 매장들의 휴대폰 판매가를 \n 비교 후 구매합니다.',
    imageURL:require('../../assets/onboarding_img4.png')
  }
]

const OnboardingCarousel = () => {
  const carouselRef = useRef(null);
  const [currentPageNumber,setCurrentPageNumber] = useState(1)
  
  const pressScrollXHandler = (times) => {
    carouselRef.current.scrollTo({x: width * times})
    setCurrentPageNumber(times + 1);
  }

 const scrollHandler = (e) => {
  const {nativeEvent:{contentOffset:{x}}} = e;
  setCurrentPageNumber(Math.round(x / width) + 1);
 }
 
  
  return (
  <>
    <ScrollView ref={carouselRef} pagingEnabled horizontal contentContainerStyle={styles.carousel} showHorizontalScrollIndicator={false} onScroll={scrollHandler} scrollEventThrottle={300} >
      
      {PAGES.map((item,index) => (
        <View key={item.num} style={[styles.carouselItem]}>
          <View style={styles.titleBox}>
          <H3_26M style={styles.title}>{item.title}</H3_26M>
          </View>
          <View style={styles.descriptionBox}>
          <P_20R style={styles.description}>{item.description}</P_20R>
          </View>
          <View style={styles.imageBox}>
          <Image style={styles.onBoardingImage} source={item.imageURL} />
          </View>
        </View>
      ))}
      
    </ScrollView>

    <View style={styles.indicatorBox}>
    <CircleIndicator currentPageNumber={currentPageNumber} pressScrollXHandler={pressScrollXHandler} />
    </View>
    
    </>
  )
};

export default OnboardingCarousel;

const styles = StyleSheet.create({
  carousel: {
    backgroundColor:'#fff'
  },
  carouselItem: {
    width,
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  title:{
    color: '#2D63E2',
    textAlign:'center',
  },
  description:{
    textAlign:'center'
  },
  titleBox:{
    marginTop:128,
    flex:1,
    justifyContent:'center',
  },
  descriptionBox: {
    flex:2,
    justifyContent:'flex-start',
    marginTop:-8
  },
  imageBox:{
    flex:7,
    alignItems:'center',
    marginTop:-32
  },
  onBoardingImage:{
    width:188.67,
    height:240
  },
  indicatorBox:{
    flex:0,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center' 
  }
})