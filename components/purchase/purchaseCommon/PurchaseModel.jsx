import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import P_12R from '../../../style/paragraph/P_12R';
import P_16M from '../../../style/paragraph/P_16M';
import P_18M from '../../../style/paragraph/P_18M';
import usePrice from '../../../hooks/usePrice';
const PurchaseModel = ({ item, selectHandler, style }) => {
  // console.log(item.id);
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={() => selectHandler(item.id)}
    >
      <View style={styles.imgBox}>
        <Image
          source={{
            uri: item.img,
          }}
          style={{ width: 56, height: 56 }}
          resizeMode="contain"
        />
      </View>
      <View>
        <View style={styles.flexRow}>
          <P_16M style={{ color: '#333333' }}>{item.phone_name}</P_16M>
          <View style={styles.storageBox}>
            <Text style={styles.storage}>{item.phone_storage}G</Text>
          </View>
        </View>

        <View style={styles.flexRow}>
          <P_12R style={{ color: '#666666', marginRight: 4 }}>정상가</P_12R>
          <P_18M>{usePrice(item.phone_price)}원</P_18M>
        </View>
      </View>
    </Pressable>
  );
};

export default PurchaseModel;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imgBox: {
    width: 56,
    height: '100%',
  },
  storageBox: {
    padding: 6,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginLeft: 4,
  },
  storage: {
    fontFamily: 'Noto500',
    fontSize: 12,
    color: '#666666',
    includeFontPadding: false,
  },
});
