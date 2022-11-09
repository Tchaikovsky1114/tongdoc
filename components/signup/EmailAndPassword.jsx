
import {TextInput, StyleSheet, Text, View,KeyboardAvoidingView,ScrollView,Keyboard } from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import H4_24R from '../../style/H4_24R'
import P_14R from '../../style/paragraph/P_14R'
import CheckBox from '../common/CheckBox'
import Button from '../common/Button'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import P_16R from '../../style/paragraph/P_16R'
import SignupInput from '../common/SignupInput'



export default function EmailAndPassword() {
  const [totalCheck, setTotalCheck] = useState(false);
  const emailRef = useRef(null);

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    recommendCode: "",
  });
  const toggleTotalCheckHandler = () => {
    setTotalCheck((prev) => !prev);
  };


  useEffect(() => {
    const forceDownKeyboard = signupForm;
    delete forceDownKeyboard.recommendCode;
    let flag = true;
    for(const inputs in forceDownKeyboard){  
      if(signupForm[inputs].length < 10){
        flag = false
      }
    }
    if(flag){
      Keyboard.dismiss();
    }
  },[signupForm])


  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <ScrollView scrollEnabled>
          <View style={styles.heading}>
            <H4_24R>회원가입</H4_24R>
            <P_14R style={styles.subTitle}>
              서비스 이용을 위해 본인 이메일을 입력해 주세요.
            </P_14R>
          </View>
          <View style={styles.body}>
            <SignupInput
              ref={emailRef}
              type="email"
              value={signupForm.email}
              clearButtonMode="while-editing"
              autoCapitalize="none"
              placeholder="이메일"
              keyboardType="email-address"
              onChange={(e) => changeSignupFormHandler(e, "email")}
              errorText="이메일 주소를 다시 확인해 주세요."
            />
            <SignupInput
              type="password"
              value={signupForm.password}
              clearTextOnFocus
              autoCapitalize="none"
              placeholder="비밀번호"
              secureTextEntry
              maxLength={20}
              onChange={(e) => changeSignupFormHandler(e, "password")}
              errorText="* 10자리 이상 *영문 소문자,숫자,특수기호 2가지 조합"
            />
            <SignupInput
              type="password"
              value={signupForm.passwordConfirm}
              clearTextOnFocus
              placeholder="비밀번호 확인"
              autoCapitalize="none"
              secureTextEntry
              maxLength={20}
              onChange={(e) => changeSignupFormHandler(e, "passwordConfirm")}
              errorText="비밀번호를 다시 확인해 주세요."
            />
            <SignupInput
              value={signupForm.recommendCode}
              placeholder="(선택) 추천인 코드"
              onChange={(e) => changeSignupFormHandler(e, "recommendCode")}
              errorText="해당 추천인 코드가 존재하지 않습니다."
            />
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <View style={styles.checkBoxGroup}>
            <View style={styles.checkBoxInner}>
              <CheckBox
                style={{ marginRight: 8 }}
                type="full"
                onPress={toggleTotalCheckHandler}
                totalCheck={totalCheck}
                setTotalCheck={setTotalCheck}
              />
              <P_16R>전체동의</P_16R>
            </View>
          </View>
          <View style={[styles.checkBoxGroup]}>
            <View style={styles.checkBoxInner}>
              <CheckBox
                style={{ marginRight: 8 }}
                type="non-outline"
                totalCheck={totalCheck}
                setTotalCheck={setTotalCheck}
              />
              <P_14R>(필수) 서비스 이용약관</P_14R>
            </View>
            <Pressable>
              <P_14R
                style={{ color: "#999999", textDecorationLine: "underline" }}
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
                totalCheck={totalCheck}
                setTotalCheck={setTotalCheck}
              />
              <P_14R>(필수) 개인정보 수집 및 이용동의</P_14R>
            </View>
            <Pressable>
              <P_14R
                style={{ color: "#999999", textDecorationLine: "underline" }}
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
                totalCheck={totalCheck}
                setTotalCheck={setTotalCheck}
              />
              <P_14R>(선택) 제3자 정보제공동의</P_14R>
            </View>
            <Pressable>
              <P_14R
                style={{ color: "#999999", textDecorationLine: "underline" }}
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
                totalCheck={totalCheck}
                setTotalCheck={setTotalCheck}
              />
              <P_14R>(선택) 마케팅정보 활용 및 수신동의</P_14R>
            </View>
            <Pressable>
              <P_14R
                style={{ color: "#999999", textDecorationLine: "underline" }}
              >
                상세보기
              </P_14R>
            </Pressable>
          </View>
        </View>
      </View>
      <Button
        onPress={() => {
          console.log("clicked");
        }}
        text="확인"
        buttonStyle={{ backgroundColor: "#2D63E2" }}
        textStyle={{ color: "#fff" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    marginTop: 8,
    paddingHorizontal: 24,
  },
  heading: {
    flex: 1,
  },
  body: {
    paddingTop: 40,
  },
  bottom: {
    flex: 2,
  },
  subTitle: {
    color: "#666666",
    marginTop: 16,
  },
  checkBoxGroup: {
    flexDirection: "row",
    rowGap: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkBoxInner: {
    flexDirection: "row",
    alignItems: "center",
  },
});
