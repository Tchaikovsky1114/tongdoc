import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import H4_24R from "../../style/H4_24R";
import P_12R from "../../style/paragraph/P_12R";
import Input from "../common/Input";

const { width } = Dimensions.get("window");

const Signin = () => {
  const navigation = useNavigation();

  const moveFindEmail = () => {
    navigation.navigate("Signin/FindInfo", { id: "email" });
  };
  const moveFindPassword = () => {
    navigation.navigate("Signin/FindInfo", { id: "password" });
  };

  const moveSignupPageHandler = () => {
    navigation.navigate("Signup/Certification");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <H4_24R style={styles.title}>{"로그인"}</H4_24R>
          <View style={styles.inputBox}>
            <Input inputStyle={styles.inputMargin} placeholder="이메일" />
            <Input placeholder="비밀번호" />
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
      <View style={styles.loginBtnBox}>
        <Pressable>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>로그인하기</Text>
          </View>
        </Pressable>
      </View>
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
    marginBottom: 65.5,
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
    color: "#333333",
    borderLeftWidth: 1,
    borderLeftColor: "#DDDDDD",
    borderRightWidth: 1,
    borderRightColor: "#DDDDDD",
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  loginBtnBox: {
    flex: 1,
    width,
    position: "absolute",
    bottom: 0,
    left: 0,
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
