import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import P_18R from "../../../style/paragraph/P_18R";

const SigninModal = (props) => {
  const { isVisible, firstInfoText, secondInfoText, pressBtn, btnText } = props;
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <View style={styles.modalTextBox}>
            <P_18R style={styles.modalText}>{firstInfoText}</P_18R>
            <P_18R style={styles.modalText}>{secondInfoText}</P_18R>
          </View>
          <Pressable onPress={pressBtn}>
            <View style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>{btnText}</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SigninModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33333380",
    paddingHorizontal: 24,
  },
  modalBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    fontSize: 200,
    padding: 24,
  },
  modalTextBox: {
    alignItems: "center",
    marginBottom: 16,
  },
  modalText: {
    color: "#000000",
  },
  modalBtn: {
    backgroundColor: "#2D63E2",
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  modalBtnText: {
    fontFamily: "Noto500",
    color: "#FFFFFF",
    fontSize: 16,
  },
});
