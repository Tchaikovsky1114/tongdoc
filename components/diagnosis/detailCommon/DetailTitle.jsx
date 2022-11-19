import { Image, Pressable, StyleSheet, View } from "react-native";
import H6_18M from "../../../style/H6_18M";
import P_12R from "../../../style/paragraph/P_12R";

const DetailTitle = ({ margin, title, tong, number, closeHandler }) => {
  return (
    <View style={margin}>
      <View style={styles.titleBox}>
        <H6_18M>{title}</H6_18M>
        <Pressable onPress={closeHandler}>
          <Image
            style={styles.xBtn}
            source={require("../../../assets/xBtn.png")}
          />
        </Pressable>
      </View>
      <View style={styles.numberBox}>
        <P_12R style={styles.tongText}>{tong}</P_12R>
        <P_12R style={styles.numberText}>{number}</P_12R>
      </View>
    </View>
  );
};

export default DetailTitle;

const styles = StyleSheet.create({
  titleBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  xBtn: {
    width: 13.18,
    height: 13.18,
  },
  numberBox: {
    flexDirection: "row",
  },
  numberText: {
    color: "#666666",
  },
  tongText: {
    color: "#666666",
    marginRight: 10,
  },
});
