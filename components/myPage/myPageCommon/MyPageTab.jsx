import { Image, Pressable, StyleSheet, View } from 'react-native';
import P_12R from '../../../style/paragraph/P_12R';
import P_14R from '../../../style/paragraph/P_14R';
import HandlerBtn from './HandlerBtn';

const MyPageTab = ({ children, version, image, button }) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <P_14R style={styles.text}>{children}</P_14R>
        {version && <P_12R style={styles.version}>Ver {version}</P_12R>}
        {image && (
          <Image
            style={styles.nextArrow}
            source={require('../../../assets/common/nextarrow.png')}
          />
        )}
        {button && <HandlerBtn>탈퇴하기</HandlerBtn>}
      </View>
    </Pressable>
  );
};

export default MyPageTab;

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
  version: {
    color: '#666666',
  },
});
