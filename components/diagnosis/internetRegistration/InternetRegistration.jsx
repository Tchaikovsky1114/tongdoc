import { useEffect, useRef, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import H4_24R from '../../../style/H4_24R';
import P_12M from '../../../style/paragraph/P_12M';
import P_12R from '../../../style/paragraph/P_12R';
import P_14R from '../../../style/paragraph/P_14R';
import ConfirmModal from '../../common/ConfirmModal';
import DimensionBtn from '../../common/DimensionBtn';
import SigninInput from '../../common/SigninInput';
import InternetSelectModal from './InternetSelectModal';

const InternetRegistration = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [selectedInternet, setSelectedInternet] = useState('SKT(SKB)');
  const [form, setForm] = useState({
    internet: selectedInternet,
    name: '',
    phone: '',
  });
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const nameHandler = (inputWrite) => {
    setForm((prev) => ({
      ...prev,
      name: inputWrite,
    }));
  };
  const phoneHandler = (inputWrite) => {
    setForm((prev) => ({
      ...prev,
      phone: inputWrite,
    }));
  };
  useEffect(() => {
    setIsDisable((prev) => !prev);
  }, [form.internet !== '' && form.name !== '' && form.phone !== '']);

  const smsAllowBtnPressHandler = () => {
    setConfirmModalVisible((prev) => !prev);
  };

  const modalHandler = () => {
    setIsVisible((prev) => !prev);
  };
  const selectInternet = (item) => {
    setSelectedInternet(item);
    setIsVisible((prev) => !prev);
  };
  const confirmModalHandler = () => {
    setConfirmModalVisible((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView>
          <H4_24R style={styles.title}>인터넷 가입정보{'\n'}등록하기</H4_24R>
          <P_14R style={styles.titleInfo}>
            가족 등록은 함께 거주하지 않더라도 가능합니다.{'\n'}(배우자, 부모,
            자녀, 형제자매, 며느리, 사위 등)
          </P_14R>
          <View style={styles.inputBox}>
            <Pressable onPress={modalHandler}>
              <View style={styles.selectInternetBox}>
                <P_14R style={styles.selectText}>{selectedInternet}</P_14R>
                <Image
                  style={styles.downIcon}
                  source={require('../../../assets/downIcon.png')}
                />
              </View>
            </Pressable>
            <SigninInput
              ref={nameRef}
              type="text"
              autoCapitalize="none"
              onChangeInput={nameHandler}
              placeholder="인터넷 가입 명의자 이름 (실명)"
              onSubmitEditing={() => {
                phoneRef.current.focus();
              }}
            />
            <SigninInput
              ref={phoneRef}
              type="text"
              autoCapitalize="none"
              onChangeInput={phoneHandler}
              keyboardType="decimal-pad"
              placeholder="명의자 휴대폰 번호 ( - 없이 숫자만 입력해 주세요.)"
            />
          </View>
          <View style={styles.familyAgreeBox}>
            <View style={[styles.familyAgreeInfo, styles.marginBottom4]}>
              <P_12M style={styles.familyInfoNumber}>1.</P_12M>
              <P_12R style={styles.familyInfoText}>
                가족에게 동의 요청 안내가 발송됩니다.
              </P_12R>
            </View>
            <View style={[styles.familyAgreeInfo]}>
              <P_12M style={styles.familyInfoNumber}>2.</P_12M>
              <P_12R style={styles.familyInfoText}>
                동의 완료 후 가족의 가계통신비 점검이 진행됩니다.
              </P_12R>
            </View>
          </View>

          <InternetSelectModal
            isVisible={isVisible}
            modalHandler={modalHandler}
            onChange={selectInternet}
          />
          <ConfirmModal
            isVisible={confirmModalVisible}
            firstInfoText={`가족 추가 동의 요청${'\n'}SMS가 발송되었습니다.`}
            secondInfoText={`가족이 동의 완료와 요금 청구서를 연결 후${'\n'}가계통신비 진단이 가능합니다.`}
            pressBtn={confirmModalHandler}
          />
        </KeyboardAvoidingView>
      </ScrollView>
      <DimensionBtn isDisable={isDisable} onPress={smsAllowBtnPressHandler}>
        SMS 동의 요청
      </DimensionBtn>
    </View>
  );
};

export default InternetRegistration;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    flex: 1,
    marginBottom: 16,
  },
  titleInfo: {
    flex: 1,
    color: '#666666',
    marginBottom: 40,
  },
  inputBox: {
    flex: 1,
    marginBottom: 32,
  },
  selectInternetBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    marginBottom: 24,
  },
  selectText: {
    color: '#333333',
  },
  downIcon: {
    width: 24,
    height: 24,
  },
  familyAgreeBox: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F6F9FF',
    borderRadius: 8,
  },
  familyAgreeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginBottom4: {
    marginBottom: 4,
  },
  familyInfoNumber: {
    color: '#2D63E2',
    marginRight: 4,
    paddingHorizontal: 7,
    paddingVertical: 3.5,
  },
  familyInfoText: {
    color: '#666666',
  },
});
