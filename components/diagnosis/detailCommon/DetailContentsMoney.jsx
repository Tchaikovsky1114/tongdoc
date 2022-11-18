import { StyleSheet, View } from 'react-native';
import usePrice from '../../../hooks/usePrice';
import P_12R from '../../../style/paragraph/P_12R';
import P_14R from '../../../style/paragraph/P_14R';

const DetailContentsMoney = ({ price, isLast }) => {
  return (
    <View style={styles.totalChargeBoxRight}>
      <P_14R style={isLast ? styles.textBlue : null}>{usePrice(price)}</P_14R>
      <P_12R style={styles.unitText}>원</P_12R>
    </View>
  );
};

export default DetailContentsMoney;

const styles = StyleSheet.create({
  totalChargeBoxRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unitText: {
    color: '#666666',
    marginLeft: 2,
  },
  textBlue: {
    color: '#2D63E2',
    marginLeft: 2,
  },
});
