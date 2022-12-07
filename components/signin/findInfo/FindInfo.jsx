import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import H4_24R from '../../../style/H4_24R';
import P_14M from '../../../style/paragraph/P_14M';
import SigninInput from '../../common/SigninInput';
import SigninModal from '../SigninModal/SigninModal';
const { width } = Dimensions.get('window');

const FindInfo = ({ id }) => {
  const [selectTap, setSelectTap] = useState(id);
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isPWVisible, setIsPWVisible] = useState(false);
  const [isEmailDisable, setIsEmailDisable] = useState(false);
  const [isPWDisable, setIsPWDisable] = useState(false);
  const [emailFind, setEmailFind] = useState({
    email: '',
    phone: '',
  });
  const [passwordFind, setPasswordFind] = useState({
    email: '',
    name: '',
    phone: '',
  });
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const lastRef = useRef(null);
  const selectEmail = () => {
    setPasswordFind({
      email: '',
      name: '',
      phone: '',
    });
    setSelectTap('email');
  };
  const selectPassword = useCallback(() => {
    setEmailFind({
      email: '',
      phone: '',
    });
    setSelectTap('password');
  }, [selectTap]);
  const closeModalHandler = () => {
    if (selectTap === 'email') {
      setIsEmailVisible((prev) => !prev);
    } else {
      setIsPWVisible((prev) => !prev);
    }
  };

  const changeEmailHandler = useCallback(
    (e, key) => {
      setEmailFind((prev) => ({
        ...prev,
        [key]: e,
      }));
    },
    [emailFind]
  );
  const changePWHandler = (e, key) => {
    setPasswordFind((prev) => ({
      ...prev,
      [key]: e,
    }));
  };
  // 주석 : 초기  화면 진입시 이름 input에 키보드 올라오게 하기
  useEffect(() => {
    const timer = setTimeout(() => {
      firstRef.current.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, [selectTap]);

  // 주석 : 이메일 찾기, 비밀번호 찾기 버튼 활성화 비활성화

  useEffect(() => {
    setIsEmailDisable((prev) => !prev);
  }, [emailFind.email !== '' && emailFind.phone !== '']);

  useEffect(() => {
    setIsPWDisable((prev) => !prev);
  }, [
    passwordFind.email !== '' &&
      passwordFind.name !== '' &&
      passwordFind.phone !== '',
  ]);

  // 주석 : 이메일 찾기 함수
  const [foundEmail, setFoundEmail] = useState('');
  const findEmailHandler = useCallback(async () => {
    try {
      await axios
        .get(
          `https://api.tongdoc.co.kr/v1/user/email/find?user_name=${emailFind.email}&phone_number=${emailFind.phone}`
        )
        .then((res) => setFoundEmail(res.data));
      setIsEmailVisible((prev) => !prev);
      console.log(emailFind, '2');
    } catch (error) {
      console.log(error);
    }
  }, [emailFind]);
  console.log(emailFind, '1');
  return (
    <View style={styles.container}>
      <ScrollView>
        <H4_24R style={styles.title}>{`이메일ㆍ비밀번호 찾기`}</H4_24R>
        {selectTap === 'email' ? (
          <View style={styles.tapBox}>
            <View style={styles.tapWrapperSelect}>
              <Pressable onPress={selectEmail}>
                <P_14M style={styles.tapTextSelect}>이메일 찾기</P_14M>
              </Pressable>
            </View>
            <View style={styles.tapWrapper}>
              <Pressable onPress={selectPassword}>
                <P_14M style={styles.tapText}>비밀번호 찾기</P_14M>
              </Pressable>
            </View>
          </View>
        ) : (
          <View style={styles.tapBox}>
            <View style={styles.tapWrapper}>
              <Pressable onPress={selectEmail}>
                <P_14M style={styles.tapText}>이메일 찾기</P_14M>
              </Pressable>
            </View>
            <View style={styles.tapWrapperSelect}>
              <Pressable onPress={selectPassword}>
                <P_14M style={styles.tapTextSelect}>비밀번호 찾기</P_14M>
              </Pressable>
            </View>
          </View>
        )}

        {selectTap === 'email' ? (
          <View style={styles.inputBox}>
            <SigninInput
              ref={firstRef}
              inputStyle={styles.inputMargin}
              placeholder=" 이름"
              returnKey="next"
              onChangeInput={(e) => changeEmailHandler(e, 'email')}
              onSubmitEditing={() => {
                secondRef.current.focus();
              }}
            />
            <SigninInput
              ref={secondRef}
              placeholder=" 휴대폰 번호 ( - 없이 숫자만 입력해 주세요.)"
              onChangeInput={(e) => changeEmailHandler(e, 'phone')}
              keyboardType="decimal-pad"
            />
          </View>
        ) : (
          <View style={styles.inputBox}>
            <SigninInput
              ref={firstRef}
              inputStyle={styles.inputMargin}
              placeholder=" 이메일"
              returnKey="next"
              keyboardType="email-address"
              onChangeInput={(e) => changePWHandler(e, 'email')}
              onSubmitEditing={() => {
                secondRef.current.focus();
              }}
            />
            <SigninInput
              ref={secondRef}
              inputStyle={styles.inputMargin}
              placeholder=" 이름"
              returnKey="next"
              onChangeInput={(e) => changePWHandler(e, 'name')}
              onSubmitEditing={() => {
                lastRef.current.focus();
              }}
            />
            <SigninInput
              ref={lastRef}
              onChangeInput={(e) => changePWHandler(e, 'phone')}
              placeholder=" 휴대폰 번호 ( - 없이 숫자만 입력해 주세요.)"
              keyboardType="decimal-pad"
            />
          </View>
        )}
      </ScrollView>
      {selectTap === 'email' ? (
        <View
          style={
            isEmailDisable ? styles.loginBtnBoxDisabled : styles.loginBtnBox
          }
        >
          <Pressable disabled={isEmailDisable} onPress={findEmailHandler}>
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>확인</Text>
            </View>
          </Pressable>
        </View>
      ) : (
        <View
          style={isPWDisable ? styles.loginBtnBoxDisabled : styles.loginBtnBox}
        >
          <Pressable disabled={isPWDisable}>
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>확인</Text>
            </View>
          </Pressable>
        </View>
      )}
      {selectTap === 'email' ? (
        <SigninModal
          isVisible={isEmailVisible}
          firstInfoText={`${foundEmail.user_name}님의 이메일은`}
          secondInfoText={`${foundEmail.user_email}입니다.`}
          pressBtn={closeModalHandler}
          btnText={'닫기'}
        />
      ) : (
        <SigninModal
          isVisible={isPWVisible}
          firstInfoText={'임시 비밀번호가'}
          secondInfoText={'문자로 발송되었습니다.'}
          pressBtn={closeModalHandler}
          btnText={'닫기'}
        />
      )}
    </View>
  );
};

export default FindInfo;

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
  tapBox: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 40,
  },
  tapWrapper: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#DDDDDD',
  },
  tapWrapperSelect: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#2D63E2',
  },
  tapText: {
    color: '#999999',
  },
  tapTextSelect: {
    color: '#2D63E2',
  },
  inputBox: {
    flex: 1,
  },

  inputMargin: {
    marginBottom: 24,
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
