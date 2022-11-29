import { Image, Modal, Pressable, StyleSheet, View } from 'react-native';
import SendingBillsKT from '../KT/SendingBillsKT';
import SendingBillsLG from '../LG/SendingBillsLG';
import SendingBillsSKT from '../SKT/SendingBillsSKT';
import H6_18M from '../../../style/H6_18M';
import P_14M from '../../../style/paragraph/P_14M';
import P_16M from '../../../style/paragraph/P_16M';
import P_12R from '../../../style/paragraph/P_12R';

import { useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import CopySuccessModal from '../sendingBillsCommon/CopySuccessModal';
import CallModal from '../sendingBillsCommon/CallModal';
import SendingBtn from '../sendingBillsCommon/SendingBtn';
import { StatusBar } from 'expo-status-bar';
const HomeModal = ({ tongkind, inBoundEmail }) => {
  const [homeModalVisible, setHomeModalVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [copyModalVisible, setCopyModalVisible] = useState(false);
  const [callModalVisible, setCallModalVisible] = useState(false);

  const modalHandler = () => {
    setIsVisible((prev) => !prev);
  };
  const homeModalHandler = () => {
    setHomeModalVisible((prev) => !prev);
  };

  const callModalHandler = () => {
    setCallModalVisible((prev) => !prev);
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(`${inBoundEmail}`);
    setCopyModalVisible(true);
    setTimeout(setCopyModalVisible, 2000, 'false');
  };

  return (
    <Modal visible={homeModalVisible} transparent={true} animationType="fade">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <View style={styles.titleBox}>
            <H6_18M>통신닥터 메일로 요금 청구서 보내기</H6_18M>
            <Pressable style={styles.xbtnBox} onPress={homeModalHandler}>
              <Image
                resizeMode="contain"
                style={styles.xbtnImg}
                source={require('../../../assets/xBtn.png')}
              />
            </Pressable>
          </View>
          <View style={styles.mailBox}>
            <P_14M style={styles.mailBoxTitle}>통신닥터 메일 주소</P_14M>
            <View style={styles.mailCopy}>
              <P_16M style={styles.mailAddress}>{inBoundEmail}</P_16M>
              <Pressable style={styles.copyBtnBox} onPress={copyToClipboard}>
                <Image
                  resizeMode="center"
                  style={styles.copyBtnImg}
                  source={require('../../../assets/sendingBills/copyBtn.png')}
                />
              </Pressable>
              <CopySuccessModal isVisible={copyModalVisible} />
            </View>
          </View>
          <View style={styles.sendBillMethodBox}>
            <P_14M style={styles.sendBillMethodTitle}>
              통신닥터에 요금 청구서 보내는 방법
            </P_14M>
            <View>
              {tongkind === 'SKT' && (
                <SendingBtn blue={true} onPress={callModalHandler}>
                  SKT상담사 전화 요청
                </SendingBtn>
              )}
              {tongkind === 'KT' && (
                <SendingBtn blue={true} onPress={callModalHandler}>
                  KT상담사 전화 요청
                </SendingBtn>
              )}
              {tongkind === 'LGU+' && (
                <SendingBtn blue={true} onPress={callModalHandler}>
                  LG U+상담사 전화 요청
                </SendingBtn>
              )}

              {tongkind === 'SKT' && (
                <SendingBtn onPress={modalHandler}>SKT앱에서 전송</SendingBtn>
              )}
              {tongkind === 'KT' && (
                <SendingBtn onPress={modalHandler}>KT앱에서 전송</SendingBtn>
              )}
              {tongkind === 'LGU+' && (
                <SendingBtn onPress={modalHandler}>LG U+앱에서 전송</SendingBtn>
              )}
              <CallModal
                isVisible={callModalVisible}
                tongkind={tongkind}
                callModalHandler={callModalHandler}
              />
            </View>
          </View>
          <View>
            <P_12R style={styles.personalInfoText}>
              고객님의 정보는 개인정보보호법에 따라 안전하게 관리되며, 빅데이터
              분석에 필요한 단순 요금 청구 정보만을 활용합니다.
            </P_12R>
          </View>
        </View>
      </View>
      {tongkind === 'SKT' && (
        <SendingBillsSKT isVisible={isVisible} modalHandler={modalHandler} />
      )}
      {tongkind === 'KT' && (
        <SendingBillsKT isVisible={isVisible} modalHandler={modalHandler} />
      )}
      {tongkind === 'LGU+' && (
        <SendingBillsLG isVisible={isVisible} modalHandler={modalHandler} />
      )}
    </Modal>
  );
};

export default HomeModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#33333380',
  },
  modalBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: -5,
    paddingTop: 24,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  xbtnBox: {
    width: 13,
    height: 13,
  },
  xbtnImg: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
  },
  mailBox: {
    width: '100%',
  },
  mailBoxTitle: {
    marginBottom: 8,
  },
  mailCopy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 10,
    marginBottom: 24,
    backgroundColor: '#F6F9FF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  mailAddress: {
    color: '#2D63E2',
    marginRight: 8,
  },
  copyBtnBox: {
    width: 20,
    height: 20,
  },
  copyBtnImg: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
  },
  sendBillMethodBox: {
    width: '100%',
    marginBottom: 24,
  },
  sendBillMethodTitle: {
    marginBottom: 8,
  },
  sendBillBtn: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    borderColor: '#2D63E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendBillBlueBtn: {
    backgroundColor: '#2D63E2',
    marginBottom: 8,
  },

  personalInfoText: {
    color: '#999999',
  },
});
