import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import SendingBillsKT from '../KT/SendingBillsKT';
import SendingBillsLG from '../LG/SendingBillsLG';
import SendingBillsSKT from '../SKT/SendingBillsSKT';
import H6_18M from '../../../style/H6_18M';
import P_14M from '../../../style/paragraph/P_14M';
import P_16M from '../../../style/paragraph/P_16M';
import P_12R from '../../../style/paragraph/P_12R';
import * as Linking from 'expo-linking';
import { useState } from 'react';
const HomeModal = ({ tongkind }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [homeModalVisible, setHomeModalVisible] = useState(true);
  const modalHandler = () => {
    setIsVisible((prev) => !prev);
  };
  const homeModalHandler = () => {
    setHomeModalVisible((prev) => !prev);
  };
  const callTong = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };
  return (
    <Modal visible={homeModalVisible} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <View style={styles.titleBox}>
            <H6_18M>통신닥터 메일로 요금 청구서 보내기</H6_18M>
            <Pressable style={styles.xbtnBox} onPress={homeModalHandler}>
              <Image
                resizeMode="contain"
                style={styles.xbtnImg}
                source={require('../../../assets/sendingBills/xBtn.png')}
              />
            </Pressable>
          </View>
          <View style={styles.mailBox}>
            <P_14M style={styles.mailBoxTitle}>통신닥터 메일 주소</P_14M>
            <View style={styles.mailCopy}>
              <P_16M style={styles.mailAddress}>bill@tongdoc.co.kr</P_16M>
              <View style={styles.copyBtnBox}>
                <Image
                  resizeMode="contain"
                  style={styles.copyBtnImg}
                  source={require('../../../assets/sendingBills/copyBtn.png')}
                />
              </View>
            </View>
          </View>
          <View style={styles.sendBillMethodBox}>
            <P_14M style={styles.sendBillMethodTitle}>
              통신닥터에 요금 청구서 보내는 방법
            </P_14M>
            <View>
              {tongkind === '1' && (
                <View style={[styles.sendBillBtn, styles.sendBillBlueBtn]}>
                  <Pressable
                    style={styles.btnPress}
                    onPress={callTong.bind(this, '080-011-6000')}
                  >
                    <Text style={styles.sendBillBlueBtnText}>
                      SKT상담사 전화 요청
                    </Text>
                  </Pressable>
                </View>
              )}
              {tongkind === '2' && (
                <View style={[styles.sendBillBtn, styles.sendBillBlueBtn]}>
                  <Pressable
                    style={styles.btnPress}
                    onPress={callTong.bind(this, '080-000-1618')}
                  >
                    <Text style={styles.sendBillBlueBtnText}>
                      KT상담사 전화 요청
                    </Text>
                  </Pressable>
                </View>
              )}
              {tongkind === '3' && (
                <View style={[styles.sendBillBtn, styles.sendBillBlueBtn]}>
                  <Pressable
                    style={styles.btnPress}
                    onPress={callTong.bind(this, '114')}
                  >
                    <Text style={styles.sendBillBlueBtnText}>
                      LG U+상담사 전화 요청
                    </Text>
                  </Pressable>
                </View>
              )}

              {tongkind === '1' && (
                <View style={[styles.sendBillBtn]}>
                  <Pressable style={styles.btnPress} onPress={modalHandler}>
                    <Text style={styles.sendBillWhiteBtnText}>
                      SKT앱에서 전송
                    </Text>
                  </Pressable>
                </View>
              )}
              {tongkind === '2' && (
                <View style={[styles.sendBillBtn]}>
                  <Pressable style={styles.btnPress} onPress={modalHandler}>
                    <Text style={styles.sendBillWhiteBtnText}>
                      KT앱에서 전송
                    </Text>
                  </Pressable>
                </View>
              )}
              {tongkind === '3' && (
                <View style={[styles.sendBillBtn]}>
                  <Pressable style={styles.btnPress} onPress={modalHandler}>
                    <Text style={styles.sendBillWhiteBtnText}>
                      LG U+앱에서 전송
                    </Text>
                  </Pressable>
                </View>
              )}
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
      {tongkind === '1' && (
        <SendingBillsSKT isVisible={isVisible} modalHandler={modalHandler} />
      )}
      {tongkind === '2' && (
        <SendingBillsKT isVisible={isVisible} modalHandler={modalHandler} />
      )}
      {tongkind === '3' && (
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
    borderRadius: 8,
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
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.9,
    shadowRadius: 6,
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
    height: 20,
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
  btnPress: {
    width: '100%',
  },
  sendBillBlueBtnText: {
    fontFamily: 'Noto500',
    fontSize: 16,
    textAlign: 'center',
    includeFontPadding: false,
    color: '#ffffff',
  },
  sendBillWhiteBtnText: {
    fontFamily: 'Noto500',
    fontSize: 16,
    textAlign: 'center',
    includeFontPadding: false,
    color: '#2D63E2',
  },
  personalInfoText: {
    color: '#999999',
  },
});
