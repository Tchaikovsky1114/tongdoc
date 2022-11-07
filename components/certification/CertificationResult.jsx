import { StyleSheet, Text, View,Modal,Pressable } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useRecoilState } from 'recoil';
import { signupState } from '../../store/signup';
import P_14R from '../../style/paragraph/P_14R';
import P_12R from '../../style/paragraph/P_12R';
import { useNavigation } from '@react-navigation/native';


export default function CertificationResult({route,navigation}) {
  const {params} = route;
  const user = params ? JSON.parse(params.userInfo) : '';
  const [signupForm,setSignupForm] = useRecoilState(signupState)
  const [modalVisible,setModalVisible] = useState(true)

  const moveEmailAndPasswordPageHandler = () => {
    navigation.navigate('Signup/EmailAndPassword');
    setModalVisible(prev => !prev);
  }

  useEffect(() => {
    if(!user) return;
    setSignupForm(user)
  },[])

  return (
    <View style={styles.centeredView}>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {setModalVisible(prev => !prev)}}
      >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <P_14R style={styles.modalText}>본인 인증이 완료되었습니다. {'\n'} 다음 페이지로 이동합니다.</P_14R>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={moveEmailAndPasswordPageHandler}
          >
            <P_12R style={styles.textStyle}>다음 단계로</P_12R>
          </Pressable>
        </View>
      </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(51,51,51, .1)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2D63E2",
  },
  textStyle: {
    color: "white",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:'#000',
    fontFamily:'Noto500'
  }
});