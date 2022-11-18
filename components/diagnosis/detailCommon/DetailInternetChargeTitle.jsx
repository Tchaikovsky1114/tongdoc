import { Image, StyleSheet, View } from 'react-native';
import P_14M from '../../../style/paragraph/P_14M';
import P_14R from '../../../style/paragraph/P_14R';
import DetailContentsMoney from './DetailContentsMoney';

const DetailInternetChargeTitle = ({ title, price }) => {
  return (
    <View style={styles.titleBox}>
      <P_14M>{title}</P_14M>
      <View style={styles.titleImgBox}>
        <DetailContentsMoney price={price} />
      </View>
    </View>
  );
};

export default DetailInternetChargeTitle;

const styles = StyleSheet.create({
  titleBox: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 4,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleImgBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleImg: {
    width: 18,
    height: 18,
    marginRight: 2,
  },
  titleRedText: {
    color: '#FF3A3A',
  },
  titleBlueText: {
    color: '#2D63E2',
  },
});
