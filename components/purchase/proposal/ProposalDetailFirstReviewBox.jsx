import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import P_12M from '../../../style/paragraph/P_12M'

const ProposalDetailFirstReviewBox = ({review}) => {
  return (
    <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <View style={{marginRight:16}}>
              <P_12M style={{color:'#666'}}>{(review.name).substr(0,1)}{'*'.repeat(review.name.length - 1)}</P_12M>
            </View>
            <P_12M style={{color:'#666'}}>{review.created_at}</P_12M>
          </View>
          <View style={{marginTop:8}}>
            <P_12M style={{color:'#666'}}>{review.contents}</P_12M>
          </View>
        </View>
  )
}

export default ProposalDetailFirstReviewBox

const styles = StyleSheet.create({
  container:{width:'70%',marginTop:16, backgroundColor:'#f6f9ff',padding:16,borderRadius:8}
})