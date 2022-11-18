import { StyleSheet, View } from 'react-native';
import P_14R from '../../../style/paragraph/P_14R';
import DetailContentsMoney from './DetailContentsMoney';

const DetailContents = ({ title, price, isLast }) => {
  return (
    <View style={styles.detailBox}>
      <P_14R style={isLast ? styles.blueText : styles.grayText}>{title}</P_14R>
      <DetailContentsMoney price={price} isLast={isLast} />
    </View>
  );
};

export default DetailContents;

const styles = StyleSheet.create({
  detailBox: {
    paddingHorizontal: 16,
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  grayText: {
    color: '#666666',
  },
  blueText: {
    color: '#2D63E2',
  },
});
