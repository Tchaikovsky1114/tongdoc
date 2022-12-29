import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import P_12R from '../../style/paragraph/P_12R'
import P_14R from '../../style/paragraph/P_14R'

const AboutUsItem = ({title,content}) => {
  return (
    <View style={styles.itemBox}>
      <P_12R style={styles.title}>{title}</P_12R>
      <P_14R>{content}</P_14R>
    </View>
  )
}

export default React.memo(AboutUsItem); 

const styles = StyleSheet.create({
  itemBox: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title:{ color: '#666', marginBottom: 8 }
})