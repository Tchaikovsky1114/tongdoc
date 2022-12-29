import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { isDevice } from 'expo-device';
import { openSettings } from 'expo-linking';

import * as Contacts from 'expo-contacts';
import * as Notifications from 'expo-notifications';
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';

import H4_24R from '../../style/H4_24R';
import P_14R from '../../style/paragraph/P_14R';
import { useRecoilState } from 'recoil';
import { signupState } from '../../store/signup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

export default function Signup() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(signupState);

  const getAuthorityPressHandler = async () => {

    let allPermissionIsGranted = false;
    if(!isDevice){
      Alert.alert(
        '데스크탑에서 실행중이신가요?',
        '스마트폰 외에는 접근 권한을 설정할 수 없습니다. 다음 페이지로 이동합니다.',
      [
        {
          text:'OK',
          onPress: () => {navigation.navigate('ChoiceSignMethod')}
        }
      ],
      {
        cancelable:true
      });

      return;
    }
    setIsLoading(true);
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        //  if(data.length > 0) {
        //    const contact = data[1];
        //    console.log(contact); 유저 기기의 연락처를 확인할 수 있음.
        //  }
        allPermissionIsGranted = true;
      } else {
        allPermissionIsGranted = false;
      }
    } catch (err) {
      console.error(err.response);
      allPermissionIsGranted = false;
    }

    /** SMS PERMISSION
     * https://docs.expo.dev/versions/latest/sdk/sms/
     * 권한 승인 후 SMS.sendSMSAsync(address, message, options)로 SMS 발송 가능
     */
    try {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        allPermissionIsGranted = true;
      } else {
        allPermissionIsGranted = false;
      }
    } catch (error) {
      allPermissionIsGranted = false;
    }

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({});

        allPermissionIsGranted = true;
      } else {
        allPermissionIsGranted = false;
      }
    } catch (err) {
      console.error(err.response);
      allPermissionIsGranted = false;
    }

    let token;
    try {
      const { status: notificationStatus } = await Notifications.getPermissionsAsync();
      let NotificationStatus = notificationStatus;
      if (notificationStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        NotificationStatus = status;
        allPermissionIsGranted = true;
      }

      if (NotificationStatus !== 'granted') {
        Alert.alert(
          '앱 푸시 알림에 동의를 해주세요.',
          '통신비 진단서 도착 및 휴대폰 최저가 매장 확인을 위하여 알림을 보내드립니다.',
          [
            {
              text: '거절하기',
            },
            {
              text: 'Setting으로 이동하기',
              onPress: async () => openSettings(),
            },
          ]
        );
        allPermissionIsGranted = false;
      }
      // firebase의 Cloud Message를 사용하기 때문에 Expo Push Token이 아닌 Native Device Token을 가져옵니다.
      const { data:pushToken } = await Notifications.getDevicePushTokenAsync({
        experienceId: '@ermerskim/tongdoc_app',
      });
      token = pushToken;
      setUserInfo((prev) => ({
        ...prev,
        userPushToken: pushToken,
      }));
      await AsyncStorage.setItem('pushToken', JSON.stringify(pushToken));

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    } catch (err) {
      console.error(err.response);
    }
      navigation.navigate('ChoiceSignMethod')
      setIsLoading(false)
      return token; 
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.headingBox}>
          <H4_24R>앱 접근 권한을 허용해 주세요.</H4_24R>
        </View>

        <View style={styles.choiceAuthorityBox}>
          <P_14R style={styles.choiceAuthorityText}>선택 권한</P_14R>
          <Image
            style={styles.choiceAuthorityImage}
            source={require('../../assets/signup/authorities.png')}
          />
        </View>
        <View style={styles.noticeBox}>
          <P_14R style={{ color: '#999999' }}>
            각 선택 권한을 허용하지 않아도 앱 사용이 가능하지만 일부 서비스
            이용은 제한될 수 있습니다.
          </P_14R>
        </View>
      </View>

      <View style={styles.buttonBox}>
        {isLoading ? (
          <View style={[styles.button, { opacity: 0.8 }]}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <Pressable onPress={getAuthorityPressHandler}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>확인</Text>
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 24,
  },
  headingBox: {
    marginTop: 24,
    flex: 1,
  },
  choiceAuthorityBox: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  choiceAuthorityImage: {
    width: 307,
    height: 168,
  },
  choiceAuthorityText: {
    color: '#999999',
    marginBottom: 24,
  },
  noticeBox: {
    flex: 3,
    maxWidth: 366,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonBox: {
    width,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  button: {
    flex: 1,
    backgroundColor: '#2D63E2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
  },
  buttonText: {
    fontFamily: 'Noto500',
    color: '#fff',
    fontSize: 17,
  },
});
