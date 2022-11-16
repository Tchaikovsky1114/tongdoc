import { Dimensions,Image,SafeAreaView, StyleSheet, Text, View,useWindowDimensions, Pressable } from 'react-native';
import React from 'react';
import SendingBillsKT from '../sendingBills/KT/SendingBillsKT';
import SendingBillsSKT from '../sendingBills/SKT/SendingBillsSKT';
import Banner from './Banner';

const {width} = Dimensions.get('window');

export default function Home() {
  
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.header}>
          <Image style={{width:94,height:24}} source={require('../../assets/common/logo.png')} />
          <Image style={{width:24,height:24}} source={require('../../assets/common/bell.png')} />
        </View>
        <Pressable style={({pressed}) => []}>
        <Banner />
        </Pressable>
        <View><Text>UserReview</Text></View>
        <View><Text>Articles</Text></View>
      </View>
      {/* <SendingBillsSKT /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex:1,
    marginTop:75,
    paddingHorizontal:24
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  Banner: {},
  review:{},
  articles:{}
});
