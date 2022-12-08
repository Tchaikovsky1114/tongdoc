import { StyleSheet, Text, View,TextInput,Modal } from 'react-native'
import React from 'react'
import ImageButton from '../../common/ImageButton'

export default function InquiryModal({isInquiryModalVisible,showInquiryModalHandler}) {
  return (
    <Modal
    animationType='slide'
    transparent={true}
    visible={isInquiryModalVisible}
    onRequestClose={showInquiryModalHandler}
    >
    <View style={styles.container}>
      <View style={styles.closeBox}>
        <ImageButton onPress={showInquiryModalHandler} buttonStyle={styles.closeButton} imageStyle={{width:24,height:24}} imageURL={require('../../../assets/common/close.png')} />
      </View>

      <View style={styles.titleBox}>
        <TextInput
        style={styles.input}
        cursorColor="#2D63E2"
        placeholder='제목을 입력해 주세요.' />
      </View>

      <View style={styles.contentBox}>
        <TextInput
        style={styles.input}
        cursorColor="#2D63E2"
        multiline
        numberOfLines={20}
        placeholder='문의 내용을 입력해 주세요.' />
      </View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
    paddingHorizontal:24
  },
  closeBox:{
    alignItems:'flex-end',
    paddingTop:40
  },
  closeButton:{
    width:24,
    height:24,
    justifyContent:'center'
  },
  titleBox:{
    marginTop:40,
    justifyContent:'flex-end',
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
  },
  contentBox:{
    marginTop:24,
  },
  input:{
    fontFamily:'Noto400',
    textAlignVertical:'top',
    
  }
})