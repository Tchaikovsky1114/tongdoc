import React, { useState } from 'react';
import { Dimensions, View,StyleSheet,Text,ScrollView,Image } from 'react-native';
import CircleIndicator from './CircleIndicator';


const {width} = Dimensions.get('window');

const OnboardingCarousel = ({pages}) => {
  
  return (
  
    <ScrollView pagingEnabled horizontal contentContainerStyle={styles.carousel} >
      {pages.map((item,index) => (
        <View key={item.num} style={styles.carouselItem}>
          <View style={styles.titleBox}>
          <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.descriptionBox}>
          <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.imageBox}>
          <Image source={item.imageURL} />
          <CircleIndicator item={item} />
          </View>
          
        </View>
      ))}
    </ScrollView>
  )
};

export default OnboardingCarousel;

const styles = StyleSheet.create({
  carousel: {
    
  },
  carouselItem: {
    width,
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  title:{
    fontSize:26,
    fontFamily:'Noto500',
    color: '#2D63E2',
    fontWeight:'500',
    textAlign:'center',
    
  },
  description:{
    fontFamily:'Noto400',
    fontSize:18,
    textAlign:'center'
  },
  titleBox:{
    marginTop:128,
    flex:1,
    justifyContent:'center',
  },
  descriptionBox: {
    flex:1,
    justifyContent:'flex-start',
  },
  imageBox:{
    flex:4,
    alignItems:'center'
  },

})