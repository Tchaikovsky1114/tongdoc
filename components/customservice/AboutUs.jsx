import {Image,SafeAreaView,StyleSheet,View} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import P_12R from '../../style/paragraph/P_12R';
import P_14R from '../../style/paragraph/P_14R';
import H4_24R from '../../style/H4_24R';
import LoadingIndicator from '../common/LoadingIndicator';
import AboutUsItem from './AboutUsItem';


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
          <LoadingIndicator />
        ) : (
          <View>
            <AboutUsItem title="회사명" content={aboutUs.company_name} />
            <AboutUsItem title="대표" content={aboutUs.ceo_name} />
            <AboutUsItem title="주소" content={aboutUs.company_addr} />
            <AboutUsItem title="홈페이지" content={aboutUs.company_site} />
            <AboutUsItem title="사업자 등록번호" content={aboutUs.company_registration_number} />
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
