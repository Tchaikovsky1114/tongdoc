import { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
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

const FamilyRegistration = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({
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
  }, [form.name !== '' && form.phone !== '']);

  const testBtnPressHandler = () => {
    setIsVisible((prev) => !prev);
  };

  const closeModalHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen}>
          <H4_24R style={styles.title}>가족 등록하기</H4_24R>
          <P_14R style={styles.titleInfo}>
            가족 등록은 함께 거주하지 않더라도 가능합니다.{'\n'}(배우자, 부모,
            자녀, 형제자매, 며느리, 사위 등)
          </P_14R>
          <View style={styles.inputBox}>
            <SigninInput
              ref={nameRef}
              type="text"
              autoCapitalize="none"
              onChangeInput={nameHandler}
              placeholder="가족의 이름(실명)"
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
              placeholder="가족의 휴대폰 번호(-없이 숫자만 입력해 주세요.)"
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
        </KeyboardAvoidingView>
      </ScrollView>
      <DimensionBtn isDisable={isDisable} onPress={testBtnPressHandler}>
        SMS 동의 요청
      </DimensionBtn>
      <ConfirmModal
        isVisible={isVisible}
        firstInfoText={`가족 추가 동의 요청${'\n'}SMS가 발송되었습니다.`}
        secondInfoText={`가족이 동의 완료와 요금 청구서를 연결 후${'\n'}가계통신비 진단이 가능합니다.`}
        pressBtn={closeModalHandler}
      />
    </View>
  );
};

export default FamilyRegistration;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
  },
  title: {
    flex: 1,
    marginBottom: 16,
  },
  titleInfo: {
    color: '#666666',
    marginBottom: 40,
  },
  inputBox: {
    marginBottom: 32,
  },
  familyAgreeBox: {
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
