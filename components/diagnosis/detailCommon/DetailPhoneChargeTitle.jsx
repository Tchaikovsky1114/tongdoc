import { Image, StyleSheet, View } from 'react-native';
import P_14R from '../../../style/paragraph/P_14R';
import DetailContentsMoney from './DetailContentsMoney';

const DetailPhoneChargeTitle = ({ title, status, vat, vatPrice }) => {
  return (
    <View style={styles.titleBox}>
      <P_14R>{title}</P_14R>
      <View style={styles.titleImgBox}>
        {vat === '부가세 포함' ? null : (
          <Image
            style={styles.titleImg}
            source={
              status === '나쁨'
                ? require('../../../assets/diagnosis/detailBad.png')
                : require('../../../assets/diagnosis/detailGood.png')
            }
          />
        )}
        {vat ? (
          <DetailContentsMoney price={vatPrice} />
        ) : (
          <P_14R
            style={
              status === '나쁨' ? styles.titleRedText : styles.titleBlueText
            }
          >
            {status}
          </P_14R>
        )}
      </View>
    </View>
  );
};

export default DetailPhoneChargeTitle;

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
