import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
const { width } = Dimensions.get('window');
const DimensionBtn = ({ isDisable, onPress, children }) => {
  return (
    <View style={isDisable ? styles.loginBtnBoxDisabled : styles.loginBtnBox}>
      <Pressable style={styles.screen} disabled={isDisable} onPress={onPress}>
        <View style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default DimensionBtn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
  },
  loginBtnBox: {
    flex: 1,
    width,
    backgroundColor: '#2D63E2',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  loginBtnBoxDisabled: {
    flex: 1,
    width,
    backgroundColor: 'rgb(142, 172, 244)',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  loginBtn: {
    flex: 1,
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
