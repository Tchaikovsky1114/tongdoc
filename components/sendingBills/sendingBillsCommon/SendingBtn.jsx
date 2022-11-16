import { Pressable, StyleSheet, Text, View } from 'react-native';

const SendingBtn = ({ blue, onPress, children }) => {
  return (
    <View
      style={
        blue ? [styles.sendBillBtn, styles.sendBillBlueBtn] : styles.sendBillBtn
      }
    >
      <Pressable style={styles.btnPress} onPress={onPress}>
        <Text
          style={
            blue ? styles.sendBillBlueBtnText : styles.sendBillWhiteBtnText
          }
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default SendingBtn;

const styles = StyleSheet.create({
  btnPress: {
    width: '100%',
  },
  sendBillBlueBtnText: {
    fontFamily: 'Noto500',
    fontSize: 16,
    textAlign: 'center',
    includeFontPadding: false,
    color: '#ffffff',
  },
  sendBillWhiteBtnText: {
    fontFamily: 'Noto500',
    fontSize: 16,
    textAlign: 'center',
    includeFontPadding: false,
    color: '#2D63E2',
  },
  sendBillBtn: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    borderColor: '#2D63E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendBillBlueBtn: {
    backgroundColor: '#2D63E2',
    marginBottom: 8,
  },
});
