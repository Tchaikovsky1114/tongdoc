import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import P_12M from '../../style/paragraph/P_12M'

const FamilyStatusButton = ({text}) => {
  return (
    <Pressable style={() => [styles.familyConsentStatus]}>
      <P_12M style={styles.statusText}>{text}</P_12M>
    </Pressable>
  )
}

export default FamilyStatusButton

const styles = StyleSheet.create({
  familyConsentStatus:{
    backgroundColor:'#F6F9FF',
    paddingVertical:2,
    paddingHorizontal:4,
    borderRadius:8
  },
  statusText:{
    color:'#2d63e2',
    textAlign:'right'
  }
})

