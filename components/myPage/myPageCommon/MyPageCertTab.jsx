import { Image, StyleSheet, View } from 'react-native';
import P_14R from '../../../style/paragraph/P_14R';

const MyPageCertTab = ({ children }) => {
  return (
    <View style={styles.container}>
      <P_14R style={styles.text}>{children}</P_14R>
      <Image
        style={styles.nextArrow}
        source={require('../../../assets/common/nextarrow.png')}
      />
    </View>
  );
};

export default MyPageCertTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  nextArrow: {
    width: 30,
    height: 30,
  },
  text: {
    color: '#333333',
  },
});
