import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import P_14M from '../../../style/paragraph/P_14M';
import DetailTitle from '../detailCommon/DetailTitle';
import DetailSummary from '../detailCommon/DetailSummary';
import DetailTotalCharge from '../detailCommon/DetailTotalCharge';
import DetailTitleMoney from '../detailCommon/DetailTitleMoney';
import DetailPhoneChargeTitle from '../detailCommon/DetailPhoneChargeTitle';
import DetailContents from '../detailCommon/DetailContents';
import DetailBottomInfo from '../detailCommon/DetailBottomInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PhoneDetailModal = ({ isVisible, modalHandler, item, billType }) => {
  console.log(item, 'modal');
  const {
    id,
    user_name: name,
    phone_number: phoneNumber,
    tcom: telecom,
    state,
    bill_id: billId,
    check_y: checkYear,
    check_m: checkMonth,
    charge,
    save: savings,
  } = item;
  const [detail, setDetail] = useState();
  const fetchGetDiagnosisDetail = async () => {
    try {
      const token = await AsyncStorage.getItem('access');
      const { data } = await axios.get(
        `https://api.tongdoc.co.kr/v1/doctor/detail?user_id=${id}&bill_type=${billType}&year=${checkYear}&month=${checkMonth}`,
        {
          headers: {
            accept: 'applycation/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGetDiagnosisDetail();
  }, []);

  console.log(detail, 'detail');

  return (
    <Modal visible={isVisible} animationType="slide">
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.screen}>
          <View style={styles.container}>
            <DetailTitle
              margin={{ marginBottom: 24 }}
              title={`${detail?.user.user_name} 님의 ${detail?.bill_type} 진단서`}
              tong={`${detail?.user.tcom}`}
              number={`${detail?.user.phone_number.replace(
                /(\d{3})(\d{2})(\d{3})(\d{1})/,
                '$1-$2**-*$4'
              )}`}
              modalHandler={modalHandler}
            />
            <DetailSummary
              margin={{ marginBottom: 32 }}
              date={{
                year: `${detail?.year}`,
                month: `${detail?.month}`,
              }}
              status={`${detail?.state}`}
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
              <DetailPhoneChargeTitle
                title={'1-1. 사용요금제'}
                status={'나쁨'}
              />
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
      </SafeAreaView>
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
