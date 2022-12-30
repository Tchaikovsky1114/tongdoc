import {StyleSheet,View,ScrollView,Alert,BackHandler,RefreshControl} from 'react-native';

import React, { useCallback, useEffect, useState } from 'react';
import Banner from './Banner';
import AddFamilyBanner from './AddFamilyBanner';
import PhoneContractDateCalculatorBanner from './PhoneContractDateCalculatorBanner';
import TongdocNews from './TongdocNews';
import Reviews from './Reviews';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function Home({
  mainConfiguringData,
  diagnosisResultData,
  fetchGetMainConfiguringData,
}) {
  const navigation = useNavigation();

  const [isAddFamilyBannerShow, SetIsAddFamilyBannerShow] = useState(true);

  const closeAddFamilyBannerHandler = useCallback(() => {
    SetIsAddFamilyBannerShow(false);
  }, []);

  const goToPageHandler = useCallback((page) => {
    navigation.navigate(page);
  }, []);

  const showToast = () => {
    Toast.show({
      type: 'refreshToast',
      autoHide: true,
      text1: '페이지 새로고침 ✨',
      visibilityTime: 1000,
      position: 'bottom',
      bottomOffset: 20,
    });
  };

  /** 기기의 백버튼을 누르면, 앱 종료를 묻는 알럿이 뜨게 만드는 함수입니다.*/
  const confirmExitAppHandler = useCallback(() => {
    Alert.alert(
      '통신닥터를 종료할까요?',
      '',
      [
        {
          text: '아니요',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: '네',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: true,
      }
    );
    return true;
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      confirmExitAppHandler
    );
    return () => backHandler.remove();
  }, []);

  // Notification.addNotificationReceivedListener((notification) => {})

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={false}
          enabled
          colors={['#fff', '#f91', '#f51', '#c31', '#ff3', '#2df']}
          progressBackgroundColor="#4499FA"
          onRefresh={() => {
            fetchGetMainConfiguringData();
            showToast();
          }}
          progressViewOffset={10}
          tintColor="#4499FA"
        />
      }
    >
      <View style={styles.topInner}>


        {isAddFamilyBannerShow && (<AddFamilyBanner onPress={closeAddFamilyBannerHandler} />)}
        <Banner diagnosisResultData={diagnosisResultData} mainConfiguringData={mainConfiguringData} onPress={() => goToPageHandler('Diagnosis')} />
        <PhoneContractDateCalculatorBanner />
        <TongdocNews mainConfiguringData={mainConfiguringData} />


      </View>
      <View style={styles.bottomInner}>
        <Reviews />
      </View>
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
