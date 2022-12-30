import { View, Modal,Pressable,StyleSheet } from 'react-native'
import React from 'react'
import P_18R from '../../style/paragraph/P_18R'
import P_14R from '../../style/paragraph/P_14R'
import P_16R from '../../style/paragraph/P_16R'

const ConfirmRemoveFamilyModal = ({item,onRequestClose,toggleDeleteFamilyModalHandler,deleteFamilyHandler,isDeleteFamilyModalVisible}) => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isDeleteFamilyModalVisible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.container}>
        <View style={styles.inner}>
          <P_18R style={{textAlign:'center'}}>{item.user_name}님을 {'\n'} 삭제하시겠습니까?</P_18R>
          <P_14R>삭제 후 재등록에는 재동의가 필요합니다.</P_14R>
          <View style={styles.buttonGroup}>
            <Pressable 
              onPress={toggleDeleteFamilyModalHandler}
              style={styles.defaultButton}>
                <P_16R style={styles.defaultButtonText}>아니요</P_16R>
            </Pressable>
            <Pressable
              onPress={deleteFamilyHandler}
              style={({pressed}) => [styles.defaultButton,{backgroundColor: pressed ? '#2D63E273' : '#2d63e2'}]}>
                <P_16R style={{textAlign:'center',color:'#fff'}}>예</P_16R>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default React.memo(ConfirmRemoveFamilyModal);

const styles = StyleSheet.create({
  container:{backgroundColor:'rgba(0,0,0,0.2)',flex:1,justifyContent:'center',alignItems:'center'},
  inner:{width:'80%',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderRadius:8,padding:16}, 
  defaultButton:{flex:1,height:50,alignItems:'center',justifyContent:'center',borderRadius:8,},
  defaultButtonText:{textAlign:'center',color:'#2d63e2'},
  buttonGroup:{marginTop:16,flexDirection:'row',justifyContent:'center',alignItems:'center'},
})