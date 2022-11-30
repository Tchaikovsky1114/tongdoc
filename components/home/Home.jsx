import {
  Dimensions,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Banner from './Banner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AddFamilyBanner from './AddFamilyBanner';
import PhoneContractDateCalculatorBanner from './PhoneContractDateCalculatorBanner';
import TongdocNews from './TongdocNews';
import Reviews from './Reviews';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [isAddFamilyBannerShow, SetIsAddFamilyBannerShow] = useState(true);
  const [mainConfiguringData, setMainConfiguringData] = useState();
  const [diagnosisResultData, setDiagnosisResultData] = useState();

  const closeAddFamilyBannerHandler = useCallback(() => {
    SetIsAddFamilyBannerShow(false);
  }, []);

  const showPrepareServiceAlertHandler = () => {
    return Alert.alert('현재 서비스 준비 중인 페이지입니다.', '', [
      {
        text: '홈으로 이동하기',
        onPress: () => navigation.navigate('Main'),
      },
    ]);
  };

  const fetchGetMainConfiguringData = async () => {
    const token = await AsyncStorage.getItem('access');
    const { data } = await axios.get('https://api.tongdoc.co.kr/v1', {
      headers: {
        accept: 'applycation/json',
        Authorization: `Bearer ${token}`,
        // 'X-CSRF-TOKEN': 'CJTzj9l5WROahObvRB98RHjc6pNI8rb9T2FEJ9LG'
      },
    });
    setMainConfiguringData(data);
  };
  const fetchGetDiagnosisData = async () => {
    const token = await AsyncStorage.getItem('access');
    const { data } = await axios.get('https://api.tongdoc.co.kr/v1/doctor', {
      headers: {
        accept: 'applycation/json',
        Authorization: `Bearer ${token}`,
      },
    });
    setDiagnosisResultData(data);
  };
  const goToPageHandler = (page) => {
    navigation.navigate(page);
  };
  useEffect(() => {
    fetchGetMainConfiguringData();
    fetchGetDiagnosisData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mainConfiguringData && diagnosisResultData ? (
        <>
          <View style={styles.topInner}>
            {isAddFamilyBannerShow && (
              <AddFamilyBanner onPress={closeAddFamilyBannerHandler} />
            )}
            <Pressable
              onPress={() => goToPageHandler('Diagnosis')}
              style={({ pressed }) => []}
            >
              <Banner
                diagnosisResultData={diagnosisResultData}
                mainConfiguringData={mainConfiguringData}
              />
            </Pressable>

            <Pressable
              onPress={showPrepareServiceAlertHandler}
              style={({ pressed }) => []}
            >
              <PhoneContractDateCalculatorBanner />
            </Pressable>
            <Pressable
              onPress={showPrepareServiceAlertHandler}
              style={({ pressed }) => []}
            >
              <TongdocNews mainConfiguringData={mainConfiguringData} />
            </Pressable>
          </View>
          <View style={styles.bottomInner}>
            <Reviews mainConfiguringData={mainConfiguringData.doctor.review} />
          </View>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    paddingBottom: 4,
  },
  topInner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  bottomInner: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Banner: {},
  review: {},
  articles: {},
});
