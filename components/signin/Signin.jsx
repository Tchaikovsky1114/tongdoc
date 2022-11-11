import { useNavigation } from '@react-navigation/native';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import apis from '../../api/api';
import { signinState } from '../../store/signin';

import H4_24R from '../../style/H4_24R';
import P_12R from '../../style/paragraph/P_12R';
import SigninInput from '../common/SigninInput';
import SigninModal from './SigninModal/SigninModal';

const { width } = Dimensions.get('window');

const Signin = () => {
  const navigation = useNavigation();
  const [isDisable, setIsDisable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [signinForm, setSigninForm] = useState({
    email: '',
    password: '',
  });
  const [signin, setSignin] = useRecoilState(signinState);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // 주석 : 이메일 입력
  const emailHandler = (inputWrite) => {
    setSigninForm((prev) => ({
      ...prev,
      email: inputWrite,
    }));
  };
  // 주석 : 비밀번호 입력
  const passwordHandler = (inputPassword) => {
    setSigninForm((prev) => ({
      ...prev,
      password: inputPassword,
    }));
  };

  // 주석 : 하단 버튼 disabled <=> able 구현
  useEffect(() => {
    setIsDisable((prev) => !prev);
  }, [signinForm.email !== '' && signinForm.password !== '']);

  // 주석 : 초기 로그인 화면 진입시 email input에 키보드 올라오게 하기
  useEffect(() => {
    const timer = setTimeout(() => {
      emailRef.current.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // 주석 : 이동 함수
  const moveFindEmail = () => {
    navigation.navigate('Signin/FindInfo', { id: 'email' });
  };
  const moveFindPassword = () => {
    navigation.navigate('Signin/FindInfo', { id: 'password' });
  };

  const moveSignupPageHandler = () => {
    navigation.navigate('Signup/Certification');
  };

  // 주석 : 모달 닫기
  const closeModalHandler = () => {
    setIsVisible((prev) => !prev);
  };

  // 주석 : 로그인 버튼
  const loginHandler = async () => {
    setSignin(signinForm);
    const response = await apis.Signin(signinForm);
    if (response !== 'OK') {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <View style={styles.container}>
        <ScrollView style={styles.screen}>
          <KeyboardAvoidingView style={styles.screen} behavior="position">
            <H4_24R style={styles.title}>{'로그인'}</H4_24R>
            <View style={styles.inputBox}>
              <SigninInput
                ref={emailRef}
                type="email"
                inputStyle={styles.inputMargin}
                placeholder="이메일"
                autoCapitalize="none"
                onChangeInput={emailHandler}
                returnKey="next"
                keyboardType="email-address"
                onSubmitEditing={() => {
                  passwordRef.current.focus();
                }}
              />
              <SigninInput
                ref={passwordRef}
                type="password"
                placeholder="비밀번호"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeInput={passwordHandler}
              />
            </View>
            <View style={styles.findBox}>
              <Pressable onPress={moveFindEmail}>
                <P_12R style={styles.findTextColor}>이메일 찾기</P_12R>
              </Pressable>
              <Pressable onPress={moveFindPassword}>
                <P_12R style={styles.findTextMiddle}>비밀번호 찾기</P_12R>
              </Pressable>
              <Pressable onPress={moveSignupPageHandler}>
                <P_12R style={styles.findTextColor}>회원가입</P_12R>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View
          style={isDisable ? styles.loginBtnBoxDisabled : styles.loginBtnBox}
        >
          <Pressable disabled={isDisable} onPress={loginHandler}>
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>로그인하기</Text>
            </View>
          </Pressable>
        </View>
        <SigninModal
          isVisible={isVisible}
          firstInfoText={'이메일 주소나 비밀번호를'}
          secondInfoText={'확인 후 다시 입력해 주세요.'}
          pressBtn={closeModalHandler}
          btnText={'확인'}
        />
      </View>
    </Suspense>
  );
};

export default Signin;

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
    marginBottom: 40,
  },
  inputBox: {
    flex: 1,
    marginBottom: 64,
  },

  inputMargin: {
    marginBottom: 24,
  },
  findBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  findTextColor: {
    color: '#333333',
  },
  findTextMiddle: {
    color: '#333333',
    borderLeftWidth: 1,
    borderLeftColor: '#DDDDDD',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD',
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  loginBtnBox: {
    flex: 1,
    width,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  loginBtnBoxDisabled: {
    flex: 1,
    width,
    position: 'absolute',
    bottom: 0,
    left: 0,
    opacity: 0.5,
  },
  loginBtn: {
    flex: 1,
    backgroundColor: '#2D63E2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
  },

  loginBtnText: {
    fontFamily: 'Noto500',
    color: '#FFFFFF',
    fontSize: 17,
  },
});
