import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import P_12M from '../../../style/paragraph/P_12M';

const SuggestIndexBox = ({index}) => {
  return (
    <View style={styles.indexBox}>
      <P_12M style={{color:'rgb(45,99,226)'}}>제안 {index}</P_12M>
    </View>
  )
}

const styles = StyleSheet.create({
  indexBox: {
    paddingVertical:4,
    paddingHorizontal:8,
    borderWidth:1,
    borderColor:'rgb(45,99,226)',
    justifyContent:'flex-start',
    alignItems:'center',
    borderRadius:8,
    width:54,
    marginTop:8,
    marginBottom:8
  }
      
})

export default React.memo(SuggestIndexBox);