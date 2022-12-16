import { Pressable, StyleSheet, View } from 'react-native';
import P_12R from '../../../style/paragraph/P_12R';
import P_16R from '../../../style/paragraph/P_16R';

const PhoneModelSelectBox = ({ style, item }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { ...style },
        item.num === 2 ? { marginHorizontal: 8 } : null,
      ]}
    >
      <P_16R>{item.title}</P_16R>
      {item.smallTitle && (
        <P_12R style={{ color: '#666666' }}>{item.smallTitle}</P_12R>
      )}
    </Pressable>
  );
};

export default PhoneModelSelectBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dddddd',
  },
});
