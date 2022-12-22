import { Pressable, StyleSheet, View } from 'react-native';
import P_12R from '../../../style/paragraph/P_12R';
import P_16R from '../../../style/paragraph/P_16R';

const PurchaseSelectBox = ({ style, textStyle, item, center, handler }) => {
  return (
    <Pressable
      onPress={handler ? () => handler(item.num) : null}
      style={[
        styles.container,
        { ...style },
        center && item.num === 1 ? { marginHorizontal: 8 } : null,
        !center && item.num === 1 ? { marginLeft: 8 } : null,
      ]}
    >
      <P_16R style={textStyle}>{item.title}</P_16R>
      {item.smallTitle && (
        <P_12R style={{ color: '#666666' }}>{item.smallTitle}</P_12R>
      )}
    </Pressable>
  );
};

export default PurchaseSelectBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dddddd',
  },
});
