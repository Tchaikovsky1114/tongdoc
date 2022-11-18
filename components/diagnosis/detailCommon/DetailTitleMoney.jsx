import { StyleSheet, View } from 'react-native';
import usePrice from '../../../hooks/usePrice';
import P_12R from '../../../style/paragraph/P_12R';
import P_16M from '../../../style/paragraph/P_16M';

const DetailTitleMoney = ({ price }) => {
  return (
    <View style={styles.totalChargeBoxRight}>
      <P_16M>{usePrice(price)}</P_16M>
      <P_12R style={styles.totalChargeUnit}>원</P_12R>
    </View>
  );
};

export default DetailTitleMoney;

const styles = StyleSheet.create({
  totalChargeBoxRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalChargeUnit: {
    color: '#666666',
    marginLeft: 2,
  },
});
