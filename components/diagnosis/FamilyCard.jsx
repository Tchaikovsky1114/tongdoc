import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import P_16M from '../../style/paragraph/P_16M';
import P_12R from '../../style/paragraph/P_12R';
import P_14M from '../../style/paragraph/P_14M';
import 'intl';
import 'intl/locale-data/jsonp/en';
import PhoneDetailModal from './detailModal/PhoneDetailModal';
import ConfirmModal from '../common/ConfirmModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function FamilyCard({ item, index, billType }) {
  const {
    id,
    user_name: name,
    phone_number: phoneNumber,
    tcom: telecom,
    state,
    bill_id: billId,
    check_y,
    check_m,
    charge,
    save: savings,
  } = item;
  const [phoneDetailModalIsVisible, setPhoneDetailModalIsVisible] =
    useState(false);
  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);
  const [detail, setDetail] = useState();

  const fetchGetDiagnosisDetail = async (year, month) => {
    if (state !== 1) {
      setConfirmModalIsVisible((prev) => !prev);
      return;
    } else {
      setPhoneDetailModalIsVisible((prev) => !prev);
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
        console.log(error);
      }
    }
  };

  const changeData = (data) => {
    setDetail(data);
  };

  const togglePhoneDetailModalHandler = () => {
    setPhoneDetailModalIsVisible((prev) => !prev);
  };

  const toggleConfirmModalHandler = () => {
    setConfirmModalIsVisible((prev) => !prev);
  };
  return (
    <>
      <Pressable onPress={() => fetchGetDiagnosisDetail(check_y, check_m)}>
        <View
          style={[
            styles.container,
            {
              borderColor: index === 0 ? '#2D63E2' : '#ddd',
              borderWidth: index === 0 ? 2 : 1,
            },
          ]}
        >
          <View>
            <P_16M>
              {name} {index === 0 ? <Text>(나)</Text> : null}
            </P_16M>
            <View style={{ flexDirection: 'row' }}>
              <P_12R style={{ color: '#666666', paddingRight: 8 }}>
                {telecom}
              </P_12R>
              <P_12R style={{ color: '#666666' }}>
                {phoneNumber.replace(
                  /(\d{3})(\d{2})(\d{3})(\d{1})/,
                  '$1-$2**-*$4'
                )}
              </P_12R>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <P_14M>{parseInt(savings).toLocaleString()}원</P_14M>
            <View style={styles.saveMoneyBox}>
              <P_14M style={{ color: '#2d63e2' }}>(</P_14M>
              <Image
                style={{
                  width: 4.5,
                  height: 3.6,
                  marginRight: 4,
                  marginLeft: 2,
                  top: 1,
                }}
                source={require('../../assets/diagnosis/bluereversetriangle.png')}
              />
              <P_14M style={{ color: '#2d63e2' }}>
                {parseInt(savings).toLocaleString()})
              </P_14M>
            </View>
          </View>
        </View>
      </Pressable>
      <PhoneDetailModal
        detail={detail}
        isVisible={phoneDetailModalIsVisible}
        togglePhoneDetailModalHandler={togglePhoneDetailModalHandler}
        billType="phone"
        changeData={changeData}
        toggleConfirmModalHandler={toggleConfirmModalHandler}
      />
      <ConfirmModal
        firstInfoText={`현재 청구서 분석중입니다.`}
        buttonText="닫기"
        isVisible={confirmModalIsVisible}
        pressBtn={toggleConfirmModalHandler}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 64,
  },
  saveMoneyBox: {
    marginLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
