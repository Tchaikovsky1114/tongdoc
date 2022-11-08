import { StyleSheet, Text, View,Image,Pressable,Dimensions } from 'react-native'
import React from 'react'
import H4_24R from '../../style/H4_24R'
import P_14R from '../../style/paragraph/P_14R'

import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window')

export default function Certification() {
  const navigation = useNavigation();


  const getCertificationHandler = () => {

    navigation.navigate('Signup/CertificationInProgress')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.titleBox}>
        <H4_24R style={styles.title}>본인 인증을 진행해 주세요.</H4_24R>
        <P_14R style={styles.description}>정보보호를 위해 본인 명의의 휴대폰으로 진행해 주세요.</P_14R>
        </View>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={require('../../assets/signup/certification.png')} />
        </View>
      </View>

      <View style={styles.buttonBox}>
        <Pressable onPress={getCertificationHandler}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>인증하기</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:24
  },
  inner:{
    flex:9
  },
  titleBox:{
    flex:1
  },
  imageBox:{
    flex:2,
    alignItems:'center',
    justifyContent:'flex-start'
  }
  ,
  title:{
    marginTop:24
  },
  description:{
    marginTop:16,
    color:'#666666'
  },
  image:{
    width: 118.08,
    height: 99.87
  },
  buttonBox: {
    width,
    flex:1,
    position:'absolute',
    bottom:0,
    left:0,
    
  },
  button:{
    flex:1,
    backgroundColor:'#2D63E2',
    justifyContent:'center',
    alignItems:'center',
    height:58
  },
  buttonText:{
    fontFamily:'Noto500',
    color:'#fff',
    fontSize:17
  },
})