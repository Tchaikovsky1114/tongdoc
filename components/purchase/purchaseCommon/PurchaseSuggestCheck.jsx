import { Image, Pressable, StyleSheet, View } from 'react-native';
import P_16M from '../../../style/paragraph/P_16M';
import P_16R from '../../../style/paragraph/P_16R';

const PurchaseSuggestCheck = ({ item, option, selected, checkHandler }) => {
  //   console.log(item.id, selected, '1');
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.checkBox}
        onPress={() => {
          checkHandler(item.id, option);
        }}
      >
        {item.id === selected ? (
          <Image
            style={styles.checkImg}
            source={require('../../../assets/purchase/purchaseCheck.png')}
          />
        ) : null}
      </Pressable>
      {item.id === selected ? (
        <P_16M style={{ color: '#333333' }}>{item.contents}</P_16M>
      ) : (
        <P_16R style={{ color: '#333333' }}>{item.contents}</P_16R>
      )}
    </View>
  );
};

export default PurchaseSuggestCheck;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#2D63E2',
    borderRadius: 4,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkImg: {
    width: 14,
    height: 10,
  },
});
