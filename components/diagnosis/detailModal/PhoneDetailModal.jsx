import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import P_14M from '../../../style/paragraph/P_14M';
import DetailTitle from '../detailCommon/DetailTitle';
import DetailSummary from '../detailCommon/DetailSummary';
import DetailTotalCharge from '../detailCommon/DetailTotalCharge';
import DetailTitleMoney from '../detailCommon/DetailTitleMoney';
import DetailPhoneChargeTitle from '../detailCommon/DetailPhoneChargeTitle';
import DetailContents from '../detailCommon/DetailContents';
import DetailBottomInfo from '../detailCommon/DetailBottomInfo';

const PhoneDetailModal = () => {
  return (
    <Modal visible animationType="slide">
      <ScrollView style={styles.screen}>
        <View style={styles.container}>
          <DetailTitle
            margin={{ marginBottom: 24 }}
            title={'오*라 님의 휴대폰 진단서'}
            tong={'KT'}
            number={'010-23**-*234'}
          />
          <DetailSummary
            margin={{ marginBottom: 32 }}
            date={{
              year: '2022',
              month: '11',
            }}
            phoneReduceYear={84480}
            phoneReduceMonth={7040}
          />
        </View>
        <DetailTotalCharge price={112115} />
        <View style={styles.contents}>
          <View style={styles.contentsBigTitle}>
            <P_14M>1. 통화비 합계</P_14M>
            <DetailTitleMoney price={45056} />
          </View>
          <View style={styles.detailBox}>
            <DetailPhoneChargeTitle title={'1-1. 사용요금제'} status={'나쁨'} />
            <View>
              <DetailContents title={'월정액'} price={29900} />
              <DetailContents title={'추가 사용요금'} price={0} />
              <DetailContents title={'기타요금'} price={7040} />
              <DetailContents
                title={'절감 가능액'}
                price={7040}
                isLast={true}
              />
            </View>
          </View>
          <View style={styles.detailBox}>
            <DetailPhoneChargeTitle
              title={'1-2. 유료 부가 서비스'}
              status={'좋음'}
            />
            <View>
              <DetailContents title={'부가 서비스 요금'} price={0} />
              <DetailContents title={'절감 가능액'} price={0} isLast={true} />
            </View>
          </View>
          <View style={styles.detailBox}>
            <DetailPhoneChargeTitle title={'1-3. 할인요금'} status={'좋음'} />
            <View>
              <DetailContents title={'선택 약정 할인'} price={21875} />
              <DetailContents title={'결합할인'} price={0} />
              <DetailContents title={'절감 가능액'} price={0} isLast={true} />
              <DetailContents title={'기타 할인'} price={0} />
              <DetailContents title={'10원 미만 할인'} price={-9} />
              <DetailContents title={'절감 가능액'} price={0} isLast={true} />
            </View>
          </View>
          <View style={styles.detailBox}>
            <DetailPhoneChargeTitle
              title={'1-4. 부가세'}
              vat={'부가세 포함'}
              vatPrice={4505}
            />
          </View>
          <View style={styles.contentsBigTitleBottom}>
            <P_14M>2. 단말기 할부금</P_14M>
            <DetailTitleMoney price={67059} />
          </View>

          <DetailBottomInfo />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default PhoneDetailModal;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  contents: {
    paddingHorizontal: 24,
  },
  contentsBigTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 17,
  },
  detailBox: {
    marginBottom: 30,
  },
  contentsBigTitleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
});
