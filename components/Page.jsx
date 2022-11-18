import React from 'react';
import { Text,StyleSheet, View } from 'react-native';

const Page = ({item,style}) => {
  return <View style={styles.pageItem} >
    <Text>{item.num}</Text>
  </View>
};

export default Page;


const styles = StyleSheet.create({
  pageItem: {
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
  }
})
