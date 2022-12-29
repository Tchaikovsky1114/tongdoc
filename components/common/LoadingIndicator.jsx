import { Dimensions,View, Text,Image } from 'react-native'
import React from 'react'


const { width } = Dimensions.get('window');

const LoadingIndicator = () => {
  return (
    <View style={{position:'absolute',top:0,left:0, flex:1,backgroundColor:'rgba(0,0,0,0.2)',position:'absolute',width,height:'100%',alignItems:'center',justifyContent:'center'}}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../../assets/common/indicator.gif')} />
    </View>
  </View>
  )
}

export default React.memo(LoadingIndicator);