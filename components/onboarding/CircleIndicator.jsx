import React from 'react';
import {StyleSheet,View} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const CircleIndicator = ({item}) => {

  const onBoardingSlideHandler = () => {

  }
  return (
    <View style={styles.circleIndicator}>
      <Pressable onPress={() => {}}>
        <View style={[styles.circle, item.num < 1 ? styles.nextCircle : styles.circle, item.num === 1 && styles.activeCircle ]}></View>
      </Pressable>
      <Pressable onPress={() => {}}>
        <View style={[styles.circle, item.num < 2 ? styles.nextCircle : styles.circle ,item.num === 2 && styles.activeCircle ]}></View>
      </Pressable>
      <Pressable onPress={() => {}}>
        <View style={[styles.circle, item.num < 3 ? styles.nextCircle : styles.circle ,item.num === 3 && styles.activeCircle ]}></View>
      </Pressable>
      <Pressable onPress={() => {}}>
        <View style={[styles.circle, item.num < 4 ? styles.nextCircle : styles.circle , item.num === 4 && styles.activeCircle ]}></View>
      </Pressable>
      
      
    </View>
  );
};

export default CircleIndicator;

const styles = StyleSheet.create({
  circleIndicator:{
    flex:0.5,
    flexDirection:'row',
    marginTop:72
  },
  circle:{
    width:8,
    height:8,
    borderRadius:4,
    backgroundColor:'#DDDDDD',
    marginLeft:8,
  },
  activeCircle:{
    backgroundColor:'#2D63E2',
  },
  nextCircle:{
    backgroundColor:'#666666'
  }
})