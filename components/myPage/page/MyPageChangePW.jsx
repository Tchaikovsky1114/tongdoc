// api 문제로 잠시 대기

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import H4_24R from '../../../style/H4_24R';
import DimensionBtn from '../../common/DimensionBtn';
import SignupInput from '../../common/SignupInput';
const MyPageChangePW = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);
  const [totalFormCheck, setTotalFormCheck] = useState(true);
  const [detectBackspaceKey, setDetectBackspaceKey] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    prevPassword: '',
    password: '',
    passwordConfirm: '',
  });
  const [isFocus, setIsFocus] = useState(false);
  const isValidPassword = useCallback((password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,20}$/.test(
      password
    );
  }, []);
  const changePasswordFormHandler = (e, name) => {
    const {
      nativeEvent: { text },
    } = e;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: text,
    }));
  };
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
  const focusHandler = () => {
    setIsFocus(true);
  };
  const blurHandler = () => {
    setIsFocus(false);
  };

  const openConfirmModalHandler = () => {
    setConfirmModalIsVisible((prev) => !prev);
  };

  const changePassWord = async () => {
    try {
      const token = await AsyncStorage.getItem('access');
      const response = await axios.put(
        'https://api.tongdoc.co.kr/v1/user/password/reset',
        {
          password: passwordForm.prevPassword,
          new_password: passwordForm.password,
          new_password_confirmation: passwordForm.passwordConfirm,
        },
        {
          headers: {
            accept: 'applycation/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (detectBackspaceKey) return;
    const extractRequiredPropertyObj = passwordForm;
    setTotalFormCheck(true);

    for (const inputs in extractRequiredPropertyObj) {
      if (inputs !== 'recommendCode') {
        if (inputs === 'password') {
          if (!isValidPassword(passwordForm[inputs])) {
            setTotalFormCheck(false);
          }
        }
        if (inputs === 'passwordConfirm') {
          if (passwordForm.password !== passwordForm[inputs]) {
            setTotalFormCheck(false);
          }
        }
      }
    }
  }, [passwordForm.password, passwordForm.passwordConfirm, totalFormCheck]);
  useEffect(() => {
    setIsDisable((prev) => !prev);
  }, [
    passwordForm.prevPassword !== '' &&
      passwordForm.password !== '' &&
      passwordForm.passwordConfirm !== '',
  ]);
  return (
    <View style={styles.container}>
      <H4_24R style={styles.title}>비밀번호를 변경해 주세요.</H4_24R>
      <ScrollView>
        <KeyboardAvoidingView>
          <>
            <TextInput
              type="password"
              value={passwordForm.prevPassword}
              clearTextOnFocus={true}
              autoCapitalize="none"
              cursorColor={isFocus ? '#2D63E2' : '#ddd'}
              placeholder=" 기존 비밀번호"
              secureTextEntry
              maxLength={20}
              onChange={(e) => changePasswordFormHandler(e, 'prevPassword')}
              style={[
                styles.input,
                { borderColor: isFocus ? '#2D63E2' : '#ddd' },
              ]}
              onFocus={focusHandler}
              onBlur={blurHandler}
            />
            <Text style={styles.blank}>.</Text>
          </>
          <SignupInput
            type="password"
            value={passwordForm.password}
            clearTextOnFocus
            autoCapitalize="none"
            placeholder=" 비밀번호"
            secureTextEntry
            maxLength={20}
            onChange={(e) => changePasswordFormHandler(e, 'password')}
            errorText="* 10자리 이상 *영문 소문자,숫자,특수기호 2가지 조합"
            onKeyPress={detectBackspaceKeyHandler}
          />
          <SignupInput
            type="passwordConfirm"
            value={passwordForm.passwordConfirm}
            signupForm={passwordForm}
            clearTextOnFocus
            placeholder=" 비밀번호 확인"
            autoCapitalize="none"
            secureTextEntry
            maxLength={20}
            onChange={(e) => changePasswordFormHandler(e, 'passwordConfirm')}
            errorText="입력하신 비밀번호와 다릅니다."
            onKeyPress={detectBackspaceKeyHandler}
          />
        </KeyboardAvoidingView>
      </ScrollView>
      <DimensionBtn isDisable={isDisable} onPress={changePassWord}>
        확인
      </DimensionBtn>
    </View>
  );
};

export default MyPageChangePW;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    marginBottom: 40,
  },
  input: {
    fontFamily: 'Noto400',
    fontSize: 14,
    borderBottom: 1,
    borderBottomWidth: 1,
    height: 30,
    color: '#333',
    includeFontPadding: false,
    paddingBottom: 8,
    marginBottom: 24,
  },
  blank: {
    fontFamily: 'Noto400',
    fontSize: 12,
    includeFontPadding: false,
    opacity: 0,
  },
});
