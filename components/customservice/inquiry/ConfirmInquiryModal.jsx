import { View, Modal, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import P_18R from '../../../style/paragraph/P_18R'
import P_12R from '../../../style/paragraph/P_12R'

const ConfirmInquiryModal = ({onRequestClose,postInquiryHandler}) => {
  return (
    <Modal animationType='fade' transparent={true} visible onRequestClose={onRequestClose}>
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={{marginTop:24}}>
          <P_18R style={{color:'#333',marginBottom:16,textAlign:'center'}}>작성하신 내용으로 문의할까요?</P_18R>
          <P_12R style={{color:'#666',textAlign:'center'}}>최대 1~3일 소요될 수 있어요.</P_12R>
        </View>
        <View style={styles.buttonGroup}>
          <Pressable
          onPress={onRequestClose}
          style={({pressed}) => [styles.defaultButton,{backgroundColor: pressed ? '#F6F9FF' : '#fff'}]}>
            <P_18R style={{textAlign:'center',color:'#2D63E2'}}>취소</P_18R>
          </Pressable>
          <Pressable
            onPress={postInquiryHandler}
            style={({pressed}) => [styles.defaultButton,{backgroundColor: pressed ? '#2d75d0' : '#2D63E2'}]}>
              <P_18R style={{textAlign:'center',color:'#fff'}}>확인</P_18R>
          </Pressable>
        </View>
      </View>
    </View>
  </Modal>
  )
}

export default React.memo(ConfirmInquiryModal);


const styles = StyleSheet.create({
  container:{backgroundColor:'rgba(0,0,0,0.2)',flex:1,justifyContent:'center',alignItems:'center'},
  inner:{width:312,height:200,backgroundColor:'#fff',borderRadius:8,justifyContent:'flex-start',alignItems:'center',padding:16},
  buttonGroup:{flexDirection:'row',justifyContent:'center',width:'100%',marginTop:16},
  defaultButton:{flex:1,marginTop:16,height:50,justifyContent:'center',borderRadius:8,}
})