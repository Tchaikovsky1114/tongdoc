import { Dimensions, StyleSheet, View } from 'react-native';
import P_14M from '../../../style/paragraph/P_14M';
import DetailTitleMoney from './DetailTitleMoney';
const { width } = Dimensions.get('window');
const DetailTotalCharge = ({ price }) => {
  return (
    <View style={styles.totalChargeBox}>
      <P_14M>총 통신비 요금</P_14M>
      <DetailTitleMoney price={price} />
    </View>
  );
};

export default DetailTotalCharge;

const styles = StyleSheet.create({
  totalChargeBox: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F9FF',
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
});
