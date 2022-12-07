import { StyleSheet, Text, View,Image,Pressable,SafeAreaView } from 'react-native';
import H2_28M from '../../style/H2_28M'; 
import React from 'react';
import P_16R from '../../style/paragraph/P_16R';
import P_12R from '../../style/paragraph/P_12R';
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
        {/* <View>
          <Image source={require('../../assets/custom-service/talk.png')} style={styles.talkImage} />
          <H2_28M>고객센터</H2_28M>
        </View>
        
        <View style={styles.infoTextBox}>
          <P_16R>궁금한 정보의 문의를 남겨주세요.</P_16R>
          <P_12R style={styles.detailInfoText}>통닥 고객문의 운영시간 {'\n'}평일: 09:00~18:00 {'\n'}휴일: 주말,공휴일</P_12R>
        </View> */}
        
        <View style={styles.tabsList}>
          {/* <ImageButton onPress={() => moveToPageHandler('CustomService/Notice')} pressedColor="#ddd" imageURL={require("../../assets/custom-service/notice.png")} imageStyle={{height:22,width:'100%'}} buttonStyle={{paddingVertical:16,borderBottomWidth:1,borderBottomColor:'#ddd'}} />
          <ImageButton onPress={() => moveToPageHandler('CustomService/Inquiry')} pressedColor="#ddd" imageURL={require("../../assets/custom-service/inquire.png")} imageStyle={{height:22,width:'100%'}} buttonStyle={{paddingVertical:16,borderBottomWidth:1,borderBottomColor:'#ddd'}} />
          <ImageButton onPress={() => moveToPageHandler('CustomService/InfomationUse')} pressedColor="#ddd" imageURL={require("../../assets/custom-service/useinfomation.png")} imageStyle={{height:22,width:'100%'}} buttonStyle={{paddingVertical:16,borderBottomWidth:1,borderBottomColor:'#ddd'}} />
          <ImageButton onPress={() => moveToPageHandler('CustomService/AboutUs')} pressedColor="#ddd" imageURL={require("../../assets/custom-service/introduce.png")} imageStyle={{height:22,width:'100%'}} buttonStyle={{paddingVertical:16,borderBottomWidth:1,borderBottomColor:'#ddd'}} /> */}

          <ImageButton onPress={() => moveToPageHandler('CustomService/Notice')} buttonText="공지사항" pressedColor="#ddd" imageURL={require("../../assets/common/nextarrow.png")} imageStyle={{height:24,width:24}} textStyle={{color:'#333'}} buttonStyle={{paddingBottom:8,paddingTop:24,borderBottomWidth:1,borderBottomColor:'#ddd'}} />
          <ImageButton onPress={() => moveToPageHandler('CustomService/Inquiry')} buttonText="1:1 문의" pressedColor="#ddd" imageURL={require("../../assets/common/nextarrow.png")} imageStyle={{height:24,width:24}} textStyle={{color:'#333'}} buttonStyle={{paddingBottom:8,paddingTop:24,borderBottomWidth:1,borderBottomColor:'#ddd'}} />
          <ImageButton onPress={() => moveToPageHandler('CustomService/AboutUs')} buttonText="회사소개" pressedColor="#ddd" imageURL={require("../../assets/common/nextarrow.png")} imageStyle={{height:24,width:24}} textStyle={{color:'#333'}} buttonStyle={{paddingBottom:8,paddingTop:24,borderBottomWidth:1,borderBottomColor:'#ddd'}} />
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
    marginTop:32,
    width:'100%'
  }
})