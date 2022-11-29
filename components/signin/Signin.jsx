import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useRecoilState } from "recoil";
import apis from "../../api/api";
import { signinState } from "../../store/signin";

import H4_24R from "../../style/H4_24R";
import P_12R from "../../style/paragraph/P_12R";
import DimensionBtn from "../common/DimensionBtn";
import SigninInput from "../common/SigninInput";
import SigninModal from "./SigninModal/SigninModal";

const Signin = () => {
  const navigation = useNavigation();
  const [isDisable, setIsDisable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
    device_token: "2",
    device_type: Platform.OS,
  });
  const [, setSignin] = useRecoilState(signinState);
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
  }, [signinForm.email !== "" && signinForm.password !== ""]);

  // 주석 : 초기 로그인 화면 진입시 email input에 키보드 올라오게 하기
  useEffect(() => {
    const timer = setTimeout(() => {
      emailRef.current.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // 주석 : 이동 함수
  const moveFindEmail = () => {
    navigation.navigate("Signin/FindInfo", { id: "email" });
  };
  const moveFindPassword = () => {
    navigation.navigate("Signin/FindInfo", { id: "password" });
  };

  const moveSignupPageHandler = () => {
    navigation.navigate("Signup/Certification");
  };

  // 주석 : 모달 닫기
  const closeModalHandler = () => {
    setIsVisible((prev) => !prev);
  };

  // 주석 : 로그인 버튼
  const loginHandler = async () => {
    setIsLoading(true);
    try {
      const response = await apis.Signin(signinForm);
      setIsLoading(false);
      if (!response) {
        setIsVisible((prev) => !prev);
      } else {
        setSignin({
          email: response.user_email,
          name: response.user_name,
          tongkind: response.tcom,
        });
        const inBoundEmail = response.inbound_email;
        
        navigation.navigate("Home", {
          screen: "Main",
          params: {
            tongkind: response.tcom,
            inBoundEmail: inBoundEmail,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <H4_24R style={styles.title}>{"로그인"}</H4_24R>

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
              onSubmitEditing={loginHandler}
            />
          </View>
          <View style={styles.findBox}>
            <Pressable onPress={moveFindEmail}>
              <P_12R style={styles.findTextColor}>이메일 찾기</P_12R>
            </Pressable>
            <Pressable style={styles.findTextMiddle} onPress={moveFindPassword}>
              <P_12R style={styles.findTextColor}>비밀번호 찾기</P_12R>
            </Pressable>
            <Pressable onPress={moveSignupPageHandler}>
              <P_12R style={styles.findTextColor}>회원가입</P_12R>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      <DimensionBtn
        isDisable={isDisable}
        onPress={loginHandler}
        isLoading={isLoading}
      >
        로그인하기
      </DimensionBtn>
      <SigninModal
        isVisible={isVisible}
        firstInfoText={"이메일 주소나 비밀번호를"}
        secondInfoText={"확인 후 다시 입력해 주세요."}
        pressBtn={closeModalHandler}
        btnText={"확인"}
      />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  findTextColor: {
    color: "#333333",
  },
  findTextMiddle: {
    borderLeftWidth: 1,
    borderLeftColor: "#DDDDDD",
    borderRightWidth: 1,
    borderRightColor: "#DDDDDD",
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
