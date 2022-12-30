import {StyleSheet,Pressable,View,Alert,ScrollView,Keyboard,Dimensions,Platform,KeyboardAvoidingView} from 'react-native';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {POLICY_OTHER_URL,POLICY_PRIVACY_URL,POLICY_SERVICE_URL} from './constants/Constants';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

import CheckBox from '../common/CheckBox';
import Button from '../common/Button';
import SignupInput from '../common/SignupInput';
import Modal from '../common/TermsModal';
import { signupState } from '../../store/signup';
import H4_24R from '../../style/H4_24R';
import P_16R from '../../style/paragraph/P_16R';
import P_14R from '../../style/paragraph/P_14R';

const { width } = Dimensions.get('window');

export default function EmailAndPassword({ navigation }) {
  const [totalTermsCheck, setTotalTermsCheck] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const emailRef = useRef(null);
  const [termsDetail, setTermsDetail] = useState('');
  const userInfo = useRecoilValue(signupState);
  const [totalFormCheck, setTotalFormCheck] = useState(true);
  const [detectBackspaceKey, setDetectBackspaceKey] = useState(false);
  const [requiredTermsConsent, setRequiredTermsConsent] = useState({
    service: false,
    privacy: false,
  });
  const [signupForm, setSignupForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    recommendCode: '',
  });

  const toggleTotalTermsCheckHandler = useCallback(() => {
    setTotalTermsCheck((prev) => !prev);
  }, []);

  const changeSignupFormHandler = (e, name) => {
    const {
      nativeEvent: { text },
    } = e;
    setSignupForm((prev) => ({
      ...prev,
      [name]: text,
    }));
  };

  const showDetailTermsModalHandler = useCallback(async (termsURL) => {
    setTermsDetail(termsURL);
    setModalVisible((prev) => !prev);
  }, []);

  const isValidEmail = useCallback((email) => {
    return /^[a-zA-Z0-9][a-zA-Z0-9._]+[@][a-zA-Z][A-Za-z.]+[.]\w{3,}/.test(
      email
    );
  }, []);

  const isValidPassword = useCallback((password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,20}$/.test(
      password
    );
  }, []);

  const detectBackspaceKeyHandler = (e) => {
    const {
      nativeEvent: { key },
    } = e;
    setTotalFormCheck(false);
    if (key === 'Backspace') {
      setDetectBackspaceKey(true);
    } else {
      setDetectBackspaceKey(false);
    }
  };

  const submitSignupHandler = async () => {
    try {
      const obj = {
        user_email: signupForm.email,
        password: signupForm.password,
        password_confirmation: signupForm.passwordConfirm,
        user_name: userInfo.name,
        tongkind: userInfo.telecom,
        hphone: userInfo.phone_number,
        user_birth: userInfo.birth,
        phone_number: userInfo.phone_number,
        tcom: userInfo.telecom,
        gender: userInfo.gender,
        auth_type: 0,
        device_token: userInfo.userPushToken,
        device_type: Platform.OS,
        dupinfo: userInfo.dupinfo,
        recommender: signupForm.recommendCode,
        third_party: 1,
        marketing: 1,
      };
      await axios.post('https://api.tongdoc.co.kr/v1/register', obj, {});
      Alert.alert('회원가입이 완료되었습니다', '로그인 페이지로 이동합니다', [
        {
          text: '확인',
          onPress: () => navigation.navigate('Signin'),
        },
      ]);
    } catch (error) {
      console.error(error.message);
      Alert.alert(error.message, '', [
        {
          text: '확인',
        },
      ]);
    }
  };

  useEffect(() => {
    if (detectBackspaceKey) return;
    const extractRequiredPropertyObj = signupForm;
    // delete extractRequiredPropertyObj.recommendCode;
    setTotalFormCheck(true);

    for (const inputs in extractRequiredPropertyObj) {
      if (inputs !== 'recommendCode') {
        if (inputs === 'password') {
          if (!isValidPassword(signupForm[inputs])) {
            setTotalFormCheck(false);
          }
        }
        if (inputs === 'passwordConfirm') {
          if (signupForm.password !== signupForm[inputs]) {
            setTotalFormCheck(false);
          }
        }
      }
    }
    if (
      totalFormCheck &&
      signupForm.password === signupForm.passwordConfirm &&
      isValidEmail(signupForm.email)
    ) {
      Keyboard.dismiss();
    }
  }, [
    signupForm.email,
    signupForm.password,
    signupForm.passwordConfirm,
    totalFormCheck,
  ]);

  return (
    <View style={styles.container}>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        termsDetail={termsDetail}
      />
      <View style={styles.heading}>
        <H4_24R>회원가입</H4_24R>
        <P_14R style={styles.subTitle}>
          서비스 이용을 위해 본인 이메일을 입력해 주세요.
        </P_14R>
      </View>
      <View style={styles.inner}>
        <KeyboardAvoidingView behavior="position">
          <ScrollView scrollEnabled>
            <View style={styles.body}>
              <SignupInput
                ref={emailRef}
                type="email"
                value={signupForm.email}
                clearButtonMode="while-editing"
                autoCapitalize="none"
                placeholder="이메일"
                keyboardType="email-address"
                onChange={(e) => changeSignupFormHandler(e, 'email')}
                errorText="이메일 주소를 다시 확인해 주세요."
                onKeyPress={detectBackspaceKeyHandler}
              />
              <SignupInput
                type="password"
                value={signupForm.password}
                clearTextOnFocus
                autoCapitalize="none"
                placeholder="비밀번호"
                secureTextEntry
                maxLength={20}
                onChange={(e) => changeSignupFormHandler(e, 'password')}
                errorText="* 10자리 이상 *영문 소문자,숫자,특수기호 2가지 조합"
                onKeyPress={detectBackspaceKeyHandler}
              />
              <SignupInput
                type="passwordConfirm"
                value={signupForm.passwordConfirm}
                signupForm={signupForm}
                clearTextOnFocus
                placeholder="비밀번호 확인"
                autoCapitalize="none"
                secureTextEntry
                maxLength={20}
                onChange={(e) => changeSignupFormHandler(e, 'passwordConfirm')}
                errorText="입력하신 비밀번호와 다릅니다."
                onKeyPress={detectBackspaceKeyHandler}
              />
              <SignupInput
                type="recommendCode"
                value={signupForm.recommendCode}
                signupForm={signupForm}
                placeholder="(선택) 추천인 코드"
                onChange={(e) => changeSignupFormHandler(e, 'recommendCode')}
                errorText="해당 추천인 코드가 존재하지 않습니다."
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <View style={styles.bottom}>
          <View style={styles.checkBoxGroup}>
            <View style={styles.checkBoxInner}>
              <CheckBox
                style={{ marginRight: 8 }}
                type="full"
                onPress={toggleTotalTermsCheckHandler}
                totalTermsCheck={totalTermsCheck}
                setTotalTermsCheck={setTotalTermsCheck}
              />
              <P_16R>전체동의</P_16R>
            </View>
          </View>
          <View style={[styles.checkBoxGroup]}>
            <View style={styles.checkBoxInner}>
              <CheckBox
                style={{ marginRight: 8 }}
                type="non-outline"
                totalTermsCheck={totalTermsCheck}
                setTotalTermsCheck={setTotalTermsCheck}
                isRequired
                setRequiredTermsConsent={setRequiredTermsConsent}
                name="service"
              />
              <P_14R>(필수) 서비스 이용약관</P_14R>
            </View>
            <Pressable
              onPress={() => showDetailTermsModalHandler(POLICY_SERVICE_URL)}
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            >
              <P_14R
                style={{ color: '#999999', textDecorationLine: 'underline' }}
              >
                상세보기
              </P_14R>
            </Pressable>
          </View>
          <View style={[styles.checkBoxGroup]}>
            <View style={styles.checkBoxInner}>
              <CheckBox
                style={{ marginRight: 8 }}
                type="non-outline"
                totalTermsCheck={totalTermsCheck}
                setTotalTermsCheck={setTotalTermsCheck}
                isRequired
                setRequiredTermsConsent={setRequiredTermsConsent}
                name="service"
              />
              <P_14R>(필수) 개인정보 수집 및 이용동의</P_14R>
            </View>
            <Pressable
              onPress={() => showDetailTermsModalHandler(POLICY_PRIVACY_URL)}
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            >
              <P_14R
                style={{ color: '#999999', textDecorationLine: 'underline' }}
              >
                상세보기
              </P_14R>
            </Pressable>
          </View>
          <View style={[styles.checkBoxGroup]}>
            <View style={styles.checkBoxInner}>
              <CheckBox
                style={{ marginRight: 8 }}
                type="non-outline"
                totalTermsCheck={totalTermsCheck}
                setTotalTermsCheck={setTotalTermsCheck}
                isRequired
                setRequiredTermsConsent={setRequiredTermsConsent}
                name="privacy"
              />
              <P_14R>(필수) 제3자 정보제공동의</P_14R>
            </View>
            <Pressable
              onPress={() => showDetailTermsModalHandler(POLICY_OTHER_URL)}
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            >
              <P_14R
                style={{ color: '#999999', textDecorationLine: 'underline' }}
              >
                상세보기
              </P_14R>
            </Pressable>
          </View>
          <View style={[styles.checkBoxGroup]}>
            <View style={styles.checkBoxInner}>
              <CheckBox
                style={{ marginRight: 8 }}
                type="non-outline"
                totalTermsCheck={totalTermsCheck}
                setTotalTermsCheck={setTotalTermsCheck}
              />
              <P_14R>(선택) 마케팅정보 활용 및 수신동의</P_14R>
            </View>
            <Pressable
              onPress={() => showDetailTermsModalHandler(POLICY_MARKETING_URL)}
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            >
              <P_14R
                style={{ color: '#999999', textDecorationLine: 'underline' }}
              >
                상세보기
              </P_14R>
            </Pressable>
          </View>
          {/* <View style={[styles.checkBoxGroup]}>
            <View style={styles.checkBoxInner}>
              <CheckBox
                style={{ marginRight: 8 }}
                type="non-outline"
                totalTermsCheck={totalTermsCheck}
                setTotalTermsCheck={setTotalTermsCheck}
              />
              <P_14R>(선택) 마케팅정보 활용 및 수신동의</P_14R>
            </View>
            <Pressable
              onPress={() => showDetailTermsModalHandler(POLICY_MARKETING_URL)}
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            >
              <P_14R
                style={{ color: '#999999', textDecorationLine: 'underline' }}
              >
                상세보기
              </P_14R>
            </Pressable>
          </View> */}
        </View>
      </View>
      <View style={{ position: 'absolute', width, bottom: 0 }}>
        <Button
          onPress={submitSignupHandler}
          text="다음"
          buttonStyle={{ backgroundColor: 'rgb(45, 99, 226)' }}
          textStyle={{ color: '#fff' }}
          totalTermsCheck={
            requiredTermsConsent.service &&
            requiredTermsConsent.privacy &&
            totalFormCheck
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 24,
  },
  heading: {
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  body: {
    paddingBottom: 40,
  },
  bottom: {},
  subTitle: {
    color: '#666666',
    marginTop: 16,
  },
  checkBoxGroup: {
    flexDirection: 'row',
    rowGap: 8,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBoxInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
