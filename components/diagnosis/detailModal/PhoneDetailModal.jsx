import {
  Dimensions,
  Image,
  Modal,
  Pressable,
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
import P_12M from '../../../style/paragraph/P_12M';
import P_16M from '../../../style/paragraph/P_16M';
import P_14R from '../../../style/paragraph/P_14R';
import ConfirmModal from '../../common/ConfirmModal';
const { width } = Dimensions.get('window');

const PhoneDetailModal = ({ isVisible, modalHandler, item, billType }) => {
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
  const [selectMonthIsVisible, setSelectMonthIsVisible] = useState(false);
  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);
  
  const toggleSelectMonthModalHandler = () => {
    setSelectMonthIsVisible((prev) => !prev);
  };
  const toggleConfirmModalHandler = () => {
    setConfirmModalIsVisible((prev) => !prev);
  };
  useEffect(() => {
    fetchGetDiagnosisDetail();
  }, []);

  const fetchGetDiagnosisDetail = async (
    year = checkYear,
    month = checkMonth
  ) => {
    try {
      const token = await AsyncStorage.getItem('access');
      const { data } = await axios.get(
        `https://api.tongdoc.co.kr/v1/doctor/detail?user_id=${id}&bill_type=${billType}&year=${year}&month=${month}`,
        {
          headers: {
            accept: 'applycation/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDetail(data);
    } catch (error) {
      modalHandler();
      toggleConfirmModalHandler((prev) => !prev);
      console.log(error);
    }
  };

  const discountPrice = () => {
    if (detail?.bill.sale.plan_sale > 0 && detail?.bill.sale.join_sale > 0) {
      return detail?.bill.sale.plan_sale + detail?.bill.sale.join_sale;
    }
    if (detail?.bill.sale.plan_sale <= 0 && detail?.bill.sale.join_sale <= 0) {
      return 0;
    }
    if (detail?.bill.sale.plan_sale > 0 && detail?.bill.sale.join_sale < 0) {
      return detail?.bill.sale.plan_sale;
    }
    if (detail?.bill.sale.plan_sale < 0 && detail?.bill.sale.join_sale > 0) {
      return detail?.bill.sale.join_sale;
    }
  };

  return (
    <>
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
                detail={detail}
                changePhoneCharge={fetchGetDiagnosisDetail}
                selectMonthIsVisible={selectMonthIsVisible}
                toggleSelectMonthModalHandler={toggleSelectMonthModalHandler}
              />
            </View>
            <DetailTotalCharge price={`${detail?.charge}`} />
            <View style={styles.contents}>
              <View style={styles.contentsBigTitle}>
                <P_14M>1. 통화비 합계</P_14M>
                <DetailTitleMoney price={`${detail?.bill.usage_sum}`} />
              </View>
              <View style={styles.detailBox}>
                <DetailPhoneChargeTitle
                  title={'1-1. 사용요금제'}
                  status={`${detail?.bill.use.status}`}
                />
                <View>
                  <DetailContents
                    title={'월정액'}
                    price={`${detail?.bill.use.plan_price}`}
                  />
                  <DetailContents
                    title={'추가 사용요금'}
                    price={`${detail?.bill.use.add_price}`}
                  />
                  <DetailContents
                    title={'기타요금'}
                    price={`${detail?.bill.use.etc_price}`}
                  />
                  <DetailContents
                    title={'절감 가능액'}
                    price={`${detail?.section_save.use}`}
                    isLast={true}
                  />
                </View>
              </View>
              <View style={styles.detailBox}>
                <DetailPhoneChargeTitle
                  title={'1-2. 유료 부가 서비스'}
                  status={`${detail?.bill.vas.status}`}
                />
                <View>
                  <DetailContents
                    title={'부가 서비스 요금'}
                    price={`${detail?.bill.vas.vas_price}`}
                  />
                  <DetailContents
                    title={'절감 가능액'}
                    price={`${detail?.section_save.vas}`}
                    isLast={true}
                  />
                </View>
              </View>
              <View style={styles.detailBox}>
                <DetailPhoneChargeTitle
                  title={'1-3. 할인요금'}
                  status={`${detail?.bill.sale.status}`}
                />
                <View>
                  <DetailContents
                    title={'선택 약정 할인'}
                    price={`${detail?.bill.sale.plan_sale}`}
                  />
                  <DetailContents
                    title={'결합할인'}
                    price={`${detail?.bill.sale.join_sale}`}
                  />
                  <DetailContents
                    title={'절감 가능액'}
                    price={discountPrice()}
                    isLast={true}
                  />
                  <DetailContents
                    title={'기타 할인'}
                    price={`${detail?.bill.sale.etc_sale}`}
                  />
                  <DetailContents
                    title={'10원 미만 할인'}
                    price={`${detail?.bill.sale.cut_sale}`}
                  />
                  <DetailContents
                    title={'절감 가능액'}
                    price={`${detail?.section_save.sale}`}
                    isLast={true}
                  />
                </View>
              </View>
              <View style={styles.detailBox}>
                <DetailPhoneChargeTitle
                  title={'1-4. 부가세'}
                  vat={`${detail?.bill.vat_price === 0 ? '1' : '0'}`}
                  vatPrice={`${detail?.bill.vat_price}`}
                />
              </View>
              <View style={styles.contentsBigTitleBottom}>
                <P_14M>2. 단말기 할부금</P_14M>
                <DetailTitleMoney price={`${detail?.bill.device_price}`} />
              </View>

              <DetailBottomInfo />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      <ConfirmModal
        firstInfoText={`현재 청구서 분석중입니다.`}
        buttonText="닫기"
        isVisible={confirmModalIsVisible}
        pressBtn={toggleConfirmModalHandler}
      />
    </>
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
