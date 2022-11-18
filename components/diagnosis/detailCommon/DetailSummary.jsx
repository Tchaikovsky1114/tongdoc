import { Image, StyleSheet, View } from 'react-native';
import usePrice from '../../../hooks/usePrice';
import P_12M from '../../../style/paragraph/P_12M';
import P_12R from '../../../style/paragraph/P_12R';
import P_14M from '../../../style/paragraph/P_14M';
import P_22M from '../../../style/paragraph/P_22M';

const DetailSummary = ({
  margin,
  date,
  phoneReduceYear,
  phoneReduceMonth,
  isInternet,
  internetTotal,
  internetReduceMonth,
}) => {
  return (
    <View style={[styles.summaryBox, { ...margin }]}>
      <View style={styles.summaryYearBox}>
        <P_12M style={styles.yearText}>
          {date.year}년 {date.month}월
        </P_12M>
        <Image
          style={styles.downIcon}
          source={require('../../../assets/common/bluearrowdown.png')}
        />
      </View>
      <View style={styles.statusImgBox}>
        <Image
          style={styles.statusImg}
          source={require('../../../assets/diagnosis/status1.png')}
        />
      </View>
      <View style={styles.summaryTextBox}>
        <P_14M>소액결제가 있습니다.</P_14M>
        <P_14M>무선 또는 유무선 결합 할인을 추가로 받을 수 있습니다.</P_14M>
      </View>
      <View style={styles.summaryBillBox}>
        <View style={styles.summaryBillLeftBox}>
          <View style={styles.flexRow}>
            {isInternet ? (
              <>
                <P_14M>인터넷 총 통신비</P_14M>
              </>
            ) : (
              <>
                <P_14M style={styles.textBlue}>년간 </P_14M>
                <P_14M>절감 가능액</P_14M>
              </>
            )}
          </View>
          <View style={styles.flexRow}>
            {isInternet ? (
              <View style={[styles.flexRow, styles.summaryCharge]}>
                <P_22M style={styles.billTextBlack}>
                  {usePrice(internetTotal)}
                </P_22M>
              </View>
            ) : (
              <View style={[styles.flexRow, styles.summaryCharge]}>
                <Image
                  style={styles.redTriangleImg}
                  source={require('../../../assets/common/redreversetriangle.png')}
                />
                <P_22M style={styles.billTextRed}>
                  {usePrice(phoneReduceYear)}
                </P_22M>
              </View>
            )}

            <View style={styles.billUnitBox}>
              <P_12R style={styles.billUnitText}>원</P_12R>
            </View>
          </View>
        </View>
        <View style={styles.summaryBillRightBox}>
          <View style={styles.flexRow}>
            <P_14M style={styles.textBlue}>월간 </P_14M>
            <P_14M>절감 가능액</P_14M>
          </View>
          <View style={styles.flexRow}>
            <View style={[styles.flexRow, styles.summaryCharge]}>
              <Image
                style={styles.redTriangleImg}
                source={require('../../../assets/common/redreversetriangle.png')}
              />
              <P_22M style={styles.billTextRed}>
                {isInternet
                  ? usePrice(internetReduceMonth)
                  : usePrice(phoneReduceMonth)}
              </P_22M>
            </View>
            <View style={styles.billUnitBox}>
              <P_12R style={styles.billUnitText}>원</P_12R>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default DetailSummary;

const styles = StyleSheet.create({
  summaryBox: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 5,
  },
  summaryYearBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  yearText: {
    color: '#2D63E2',
  },
  downIcon: {
    width: 23.18,
    height: 22.58,
  },
  statusImgBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statusImg: {
    width: 63.16,
    height: 63.16,
  },
  summaryTextBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryBillBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F9FF',
    borderRadius: 16,
    paddingVertical: 18,
  },

  summaryBillLeftBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD',
  },
  summaryBillRightBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexRow: {
    flexDirection: 'row',
  },
  textBlue: {
    color: '#2D63E2',
  },

  summaryCharge: {
    alignItems: 'center',
  },
  redTriangleImg: {
    width: 12,
    height: 12,
    marginRight: 4,
    bottom: 3,
  },
  billTextRed: {
    color: '#FF3A3A',
    marginRight: 2,
  },
  billTextBlack: {
    color: '#000000',
    marginRight: 2,
  },
  billUnitBox: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  billUnitText: {
    color: '#666666',
    bottom: 2,
  },
});
