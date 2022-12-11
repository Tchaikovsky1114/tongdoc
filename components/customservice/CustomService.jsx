import { StyleSheet, View, SafeAreaView } from 'react-native';
// import H2_28M from '../../style/H2_28M'; 
// import P_16R from '../../style/paragraph/P_16R';
// import P_12R from '../../style/paragraph/P_12R';
import React from 'react';

import ImageButton from '../common/ImageButton';
import { useNavigation } from '@react-navigation/native';

export default function CustomService() {
  const navigation = useNavigation()

  const moveToPageHandler = (destination) => {
    navigation.navigate(destination)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        

        <View style={styles.tabsList}>
          <ImageButton onPress={() => moveToPageHandler('CustomService/Notice')} buttonText="공지사항" pressedColor="#F6F9FF" imageURL={require("../../assets/common/nextarrow.png")} imageStyle={{height:24,width:24}} textStyle={{color:'#333'}} buttonStyle={{paddingBottom:8,paddingTop:24,borderBottomWidth:1,borderBottomColor:'#ddd'}} />
          <ImageButton onPress={() => moveToPageHandler('CustomService/Inquiry')} buttonText="1:1 문의" pressedColor="#F6F9FF" imageURL={require("../../assets/common/nextarrow.png")} imageStyle={{height:24,width:24}} textStyle={{color:'#333'}} buttonStyle={{paddingBottom:8,paddingTop:24,borderBottomWidth:1,borderBottomColor:'#ddd'}} />
          <ImageButton onPress={() => moveToPageHandler('CustomService/AboutUs')} buttonText="회사소개" pressedColor="#F6F9FF" imageURL={require("../../assets/common/nextarrow.png")} imageStyle={{height:24,width:24}} textStyle={{color:'#333'}} buttonStyle={{paddingBottom:8,paddingTop:24,borderBottomWidth:1,borderBottomColor:'#ddd'}} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  inner:{
    paddingHorizontal:24,
    paddingVertical:32,
  },
  talkImage:{
    width:120,
    height:90
  },
  infoTextBox: {
    marginTop:24
  },
  detailInfoText:{
    color:'#666',
    marginTop:8
  },
  tabsList:{
  }
})