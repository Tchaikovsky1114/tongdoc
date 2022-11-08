import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import H4_24R from "../../../style/H4_24R";
import P_14M from "../../../style/paragraph/P_14M";
import Input from "../../common/Input";
import SigninModal from "../SigninModal/SigninModal";
const { width } = Dimensions.get("window");
const FindInfo = (props) => {
  const { id } = props;
  const [selectTap, setSelectTap] = useState(id);
  const [isVisible, setIsVisible] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const selectEmail = () => {
    setSelectTap("email");
  };
  const selectPassword = () => {
    setSelectTap("password");
  };
  const closeModalHandler = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <H4_24R style={styles.title}>{`이메일ㆍ비밀번호 찾기`}</H4_24R>
        {selectTap === "email" ? (
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

        {selectTap === "email" ? (
          <View style={styles.inputBox}>
            <Input inputStyle={styles.inputMargin} placeholder="이름" />
            <Input placeholder="휴대폰 번호 ( - 없이 숫자만 입력해 주세요.)" />
          </View>
        ) : (
          <View style={styles.inputBox}>
            <Input inputStyle={styles.inputMargin} placeholder="이메일" />
            <Input inputStyle={styles.inputMargin} placeholder="이름" />
            <Input placeholder="휴대폰 번호 ( - 없이 숫자만 입력해 주세요.)" />
          </View>
        )}
      </ScrollView>
      <View style={isDisable ? styles.loginBtnBoxDisabled : styles.loginBtnBox}>
        <Pressable disabled={isDisable}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>확인</Text>
          </View>
        </Pressable>
      </View>
      {selectTap === "email" ? (
        <SigninModal
          isVisible={isVisible}
          firstInfoText={"이메일 주소가"}
          secondInfoText={"문자로 발송되었습니다."}
          pressBtn={closeModalHandler}
          btnText={"로그인하기"}
        />
      ) : (
        <SigninModal
          isVisible={isVisible}
          firstInfoText={"임시 비밀번호가"}
          secondInfoText={"문자로 발송되었습니다."}
          pressBtn={closeModalHandler}
          btnText={"로그인하기"}
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
    backgroundColor: "#ffffff",
    padding: 24,
  },

  title: {
    flex: 1,
    marginBottom: 40,
  },
  tapBox: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 40,
  },
  tapWrapper: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#DDDDDD",
  },
  tapWrapperSelect: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#2D63E2",
  },
  tapText: {
    color: "#999999",
  },
  tapTextSelect: {
    color: "#2D63E2",
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
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  loginBtnBoxDisabled: {
    flex: 1,
    width,
    position: "absolute",
    bottom: 0,
    left: 0,
    opacity: 0.5,
  },
  loginBtn: {
    flex: 1,
    backgroundColor: "#2D63E2",
    justifyContent: "center",
    alignItems: "center",
    height: 58,
  },
  loginBtnText: {
    fontFamily: "Noto500",
    color: "#FFFFFF",
    fontSize: 17,
  },
});
