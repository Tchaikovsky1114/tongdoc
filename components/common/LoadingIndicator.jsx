import {StyleSheet, Dimensions,View,Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'


const { width } = Dimensions.get('window');


// 로딩이 짧다면 로딩 인디케이터의 배경색rgba(0,0,0,0.2)이 짧은 시간동안만 보였다 사라지기 때문에 사용자 경험에 안좋을 수 있습니다..
// 해결하지 못하고 떠납니다..
const LoadingIndicator = () => {
  const animatedValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue,{
        toValue:0,
        duration:200,
        useNativeDriver:true
      }),
      Animated.timing(animatedValue,{
        toValue:1,
        duration:500,
        useNativeDriver:true
      }),
      Animated.timing(animatedValue,{
        toValue:0,
        duration:500,
        useNativeDriver:true
      })
    ])).start()
  },[])

  return (
    <View style={stlyes.container}>
    <View style={stlyes.inner}>
      <Animated.Image style={{width:120,height:18,opacity:animatedValue}} source={require('../../assets/common/indicator.png')} />
    </View>
  </View>
  )
}

export default React.memo(LoadingIndicator);

const stlyes = StyleSheet.create({
  container:{position:'absolute',top:0,left:0, flex:1,backgroundColor:'rgba(0,0,0,0.1)',position:'absolute',width,height:'100%',alignItems:'center',justifyContent:'center'},
  inner:{justifyContent:'center',alignItems:'center'}
})