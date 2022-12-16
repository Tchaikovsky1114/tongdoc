import { StyleSheet, Dimensions, View, Modal, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { signupState } from '../../store/signup';

import P_18R from '../../style/paragraph/P_18R';
import P_16R from '../../style/paragraph/P_16R';

const { width: FULL_WIDTH } = Dimensions.get('window');

export default function CertificationResult({ route, navigation }) {
  const { params } = route;
  const user = params ? JSON.parse(params.userInfo) : '';
  const [userInfo, setUserInfo] = useRecoilState(signupState);
  const [modalVisible, setModalVisible] = useState(true);

  const moveEmailAndPasswordPageHandler = () => {
    navigation.navigate('EmailAndPassword');
    setModalVisible((prev) => !prev);
  };
  useEffect(() => {
    if (!user) return;
    setUserInfo((prev) => ({
      ...prev,
      ...user,
    }));
  }, []);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible((prev) => !prev);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <P_18R style={styles.modalText}>
              본인 인증이 완료되었습니다. {'\n'} 다음 페이지로 이동합니다.
            </P_18R>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={moveEmailAndPasswordPageHandler}
            >
              <P_16R style={styles.textStyle}>확인</P_16R>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(121,121,121, .8)',
  },
  modalView: {
    margin: 20,
    width: FULL_WIDTH - 48,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  button: {
    width: 128,
    height: 50,
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2D63E2',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
  },
});
