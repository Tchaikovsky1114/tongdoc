import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import P_12R from '../../../style/paragraph/P_12R';
import P_14M from '../../../style/paragraph/P_14M';
import P_16M from '../../../style/paragraph/P_16M';
import P_16R from '../../../style/paragraph/P_16R';
import SendingBtn from './SendingBtn';
import * as Linking from 'expo-linking';
const CallModal = ({ isVisible, tongkind, callModalHandler }) => {
  const callTong = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };
  return (
    <Modal transparent visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <View style={styles.xBtnBox}>
            <Pressable onPress={callModalHandler}>
              <Image
                style={styles.xBtn}
                source={require('../../../assets/sendingBills/xBtn.png')}
              />
            </Pressable>
          </View>
          <View style={styles.titleBox}>
            <View>
              <Image
                style={styles.csModelImg}
                source={require('../../../assets/sendingBills/csModel.png')}
              />
            </View>
            <P_16M>통신사 상담사에게 이렇게 요청해보세요.</P_16M>
          </View>
          <View style={styles.informationBox}>
            <View style={styles.informationTop}>
              <View style={styles.informationNumber}>
                <P_16R style={styles.textColorBlue}>1.</P_16R>
              </View>
              <View>
                <View>
                  <P_14M style={styles.textColorBlue}>
                    당월(혹은 지난달) 요금 청구서를 지금{'\n'}
                    bill@tongdoc.co.kr로 전송해 주세요.
                  </P_14M>
                </View>
                <View>
                  <P_12R style={styles.textColorGray}>
                    당월 청구서가 나오기 전이라면 지난달 요금{'\n'}청구서로 무료
                    진단 서비스를 받아보세요.
                  </P_12R>
                </View>
              </View>
            </View>
            <View style={styles.informationBottom}>
              <View style={styles.informationNumber}>
                <P_16R style={styles.textColorBlue}>2.</P_16R>
              </View>
              <View>
                <View>
                  <P_14M style={styles.textColorBlue}>
                    앞으로 요금 청구서를 {'\n'}bill@tongdoc.co.kr로 전송해
                    주세요.
                  </P_14M>
                </View>
                <View>
                  <P_12R style={styles.textColorGray}>
                    매달 통신닥터가 요금 청구서 분석 및 진단 결과를{'\n'}
                    고객님께 알려드려요.
                  </P_12R>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.btnBox}>
            {tongkind === '1' && (
              <SendingBtn
                onPress={callTong.bind(this, '080-011-6000')}
                blue={true}
              >
                SKT 고객센터 전화연결
              </SendingBtn>
            )}
            {tongkind === '2' && (
              <SendingBtn
                onPress={callTong.bind(this, '080-000-1618')}
                blue={true}
              >
                KT 고객센터 전화연결
              </SendingBtn>
            )}
            {tongkind === '3' && (
              <SendingBtn onPress={callTong.bind(this, '114')} blue={true}>
                LG U+ 고객센터 전화연결
              </SendingBtn>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CallModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33333380',
    paddingHorizontal: 24,
  },
  modalBox: {
    width: 312,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  xBtnBox: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  xBtn: {
    width: 16,
    height: 16,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  csModelImg: {
    width: 18,
    height: 22,
    marginRight: 8,
  },
  informationBox: {
    flexDirection: 'column',
    width: '100%',
  },
  informationTop: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  informationBottom: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  informationNumber: {
    marginRight: 24,
  },
  textColorBlue: {
    color: '#2D63E2',
  },
  textColorGray: {
    color: '#666666',
  },
  btnBox: {
    width: '100%',
  },
});
