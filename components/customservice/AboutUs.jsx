import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import P_12R from '../../style/paragraph/P_12R';
import P_14R from '../../style/paragraph/P_14R';
import H4_24R from '../../style/H4_24R';

export default function AboutUs() {
  const [aboutUs, setAboutUs] = useState();
  const getAboutUs = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get(
        'https://api.tongdoc.co.kr/v1/info/company',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAboutUs(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAboutUs();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <H4_24R style={styles.title}>회사소개</H4_24R>

        {!aboutUs ? (
          <ActivityIndicator />
        ) : (
          <View>
            <View style={styles.itemBox}>
              <P_12R style={{ color: '#666', marginBottom: 8 }}>회사명</P_12R>
              <P_14R>{aboutUs.company_name}</P_14R>
            </View>
            <View style={styles.itemBox}>
              <P_12R style={{ color: '#666', marginBottom: 8 }}>대표</P_12R>
              <P_14R>{aboutUs.ceo_name}</P_14R>
            </View>
            <View style={styles.itemBox}>
              <P_12R style={{ color: '#666', marginBottom: 8 }}>주소</P_12R>
              <P_14R>{aboutUs.company_addr}</P_14R>
            </View>
            <View style={styles.itemBox}>
              <P_12R style={{ color: '#666', marginBottom: 8 }}>홈페이지</P_12R>
              <P_14R>{aboutUs.company_site}</P_14R>
            </View>
            <View style={styles.itemBox}>
              <P_12R style={{ color: '#666', marginBottom: 8 }}>
                사업자 등록번호
              </P_12R>
              <P_14R>{aboutUs.company_registration_number}</P_14R>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    marginVertical: 40,
  },
  itemBox: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
