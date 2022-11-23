import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Pressable,
  Modal,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import P_16M from '../../style/paragraph/P_16M';
import P_16R from '../../style/paragraph/P_16R';
import P_12R from '../../style/paragraph/P_12R';
import P_14R from '../../style/paragraph/P_14R';
import FamilyCard from './FamilyCard';
import RegisterCard from './RegisterCard';
import axios from 'axios';
import SummaryBannerCard from './SummaryBannerCard';
import ConfirmModal from '../common/ConfirmModal';

const { width } = Dimensions.get('window');

const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;

export default function Diagnosis() {
  const [diagnosisResultData, setDiagnosisResultData] = useState();
  const [isSelectMonthModalVisible, setIsSelectMonthModalVisible] =
    useState(false);
  const [isPrepareServiceModalVisible, setIsPrepareServiceModalVisible] =
    useState(false);

  const toggleSelectMonthModalHandler = useCallback(() => {
    setIsSelectMonthModalVisible((prev) => !prev);
  }, []);

  const togglePrepareServiceModalHandler = useCallback(() => {
    setIsPrepareServiceModalVisible((prev) => !prev);
  }, []);

  const fetchGetDiagnosisData = async (
    year = currentYear,
    month = currentMonth
  ) => {
    try {
      const token = await AsyncStorage.getItem('access');
      const { data } = await axios.get(
        `https://api.tongdoc.co.kr/v1/doctor?year=${year}&month=${month}`,
        {
          headers: {
            accept: 'applycation/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDiagnosisResultData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGetDiagnosisData();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!diagnosisResultData ? (
        <ActivityIndicator />
      ) : (
        <>
          <Modal
            visible={isSelectMonthModalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={toggleSelectMonthModalHandler}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalInner}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: 16,
                  }}
                >
                  <P_16M>월 선택하기</P_16M>
                  <Pressable onPress={toggleSelectMonthModalHandler}>
                    <Image
                      style={{ width: 24, height: 24 }}
                      source={require('../../assets/common/close.png')}
                    />
                  </Pressable>
                </View>
                <View style={{ alignItems: 'flex-start', width: '100%' }}>
                  {diagnosisResultData.dates.map((item) => (
                    <Pressable
                      key={item.text}
                      style={({ pressed }) => [
                        {
                          marginVertical: 4,
                          paddingVertical: 2,
                          width: '100%',
                        },
                        {
                          backgroundColor: pressed
                            ? 'rgba(0,0,255,0.2)'
                            : '#fff',
                        },
                      ]}
                      onPress={() => {
                        fetchGetDiagnosisData(item.year, item.month);
                        toggleSelectMonthModalHandler();
                      }}
                    >
                      <P_14R>{item.text}</P_14R>
                    </Pressable>
                  ))}
                </View>
              </View>
            </View>
          </Modal>
          <ConfirmModal
            firstInfoText={`현재 서비스 준비중인 ${'\n'} 페이지 입니다.`}
            buttonText="뒤로가기"
            isVisible={isPrepareServiceModalVisible}
            pressBtn={togglePrepareServiceModalHandler}
          />
          <View style={styles.header}>
            <View style={styles.headerInner}>
              <Pressable>
                <View style={styles.resultBox}>
                  <Pressable onPress={toggleSelectMonthModalHandler}>
                    <View style={styles.month}>
                      <P_14R
                        style={{
                          color: '#2d63e2',
                        }}
                      >
                        {diagnosisResultData.year} 년{' '}
                        {diagnosisResultData.month} 월
                      </P_14R>
                      <Image
                        style={{
                          width: 23,
                          height: 22.5,
                        }}
                        source={require('../../assets/common/bluearrowdown.png')}
                      />
                    </View>
                  </Pressable>
                </View>
              </Pressable>
              <SummaryBannerCard diagnosisResultData={diagnosisResultData} />
            </View>
          </View>

          <View style={styles.body}>
            <View style={{ flex: 1 }}>
              <P_16R style={{ color: '#333333' }}>휴대폰 통신비</P_16R>
              {diagnosisResultData.phone.map((item, index) => (
                <FamilyCard
                  item={item}
                  index={index}
                  key={item.id}
                  billType="phone"
                />
              ))}
              <RegisterCard
                onPress={togglePrepareServiceModalHandler}
                text="가족을 등록해 주세요."
              />
            </View>
            <P_16R style={{ color: '#333333', marginTop: 24, marginBottom: 8 }}>
              인터넷 요금
            </P_16R>
            {diagnosisResultData.internet.map((item, index) => (
              <FamilyCard item={item} index={index} key={item.id} />
            ))}
            <RegisterCard
              onPress={togglePrepareServiceModalHandler}
              text="인터넷 가입 정보를 등록해 주세요"
            />
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerInner: {
    flex: 1,
    maxHeight: 300,
    marginTop: 8,
    backgroundColor: '#fff',
    shadowOpacity: 0.25,
    shadowColor: '#aaa',
    shadowRadius: 16,
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 24,
    elevation: 10,
  },
  month: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  resultBox: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottom: 2,
    borderBottomColor: 'red',
  },
  resultText: {
    textAlign: 'center',
  },
  header: {
    width,
    backgroundColor: '#fff',
    marginVertical: 24,
  },
  body: {
    position: 'relative',
    width,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52,52,52,0.8)',
  },
  modalInner: {
    width: width - 48,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
