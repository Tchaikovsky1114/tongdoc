import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import H4_24R from '../../../style/H4_24R';
import P_14R from '../../../style/paragraph/P_14R';
import MyPageSwitch from '../myPageCommon/MyPageSwitch';
import * as SMS from 'expo-sms';
const MyPageNotification = () => {
  const [app, setApp] = useState(false);
  const [sms, setSms] = useState(false);
  const [email, setEmail] = useState(false);

  const testFunc = async () => {
    try {
      const isAvailable = await SMS.isAvailableAsync();
      //   isAvailable = false;
      if (isAvailable) {
        console.log(isAvailable, '1');
      } else {
        console.log(isAvailable, '2');
      }
    } catch (error) {
      console.log(isAvailable, '3');
    }
  };
  testFunc();
  const onchangeTest = () => {
    setApp((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <H4_24R style={styles.title}>알림설정</H4_24R>
      <P_14R style={styles.subTitle}>
        통식닥터 소식 및 혜택 정보를 받으실 수 있습니다.
      </P_14R>
      <View>
        <MyPageSwitch value={app} onValueChange={onchangeTest}>
          앱 알림
        </MyPageSwitch>
        <MyPageSwitch value={sms} onValueChange={onchangeTest}>
          문자
        </MyPageSwitch>
        <MyPageSwitch value={email} onValueChange={onchangeTest}>
          이메일
        </MyPageSwitch>
      </View>
    </View>
  );
};

export default MyPageNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    marginBottom: 16,
  },
  subTitle: {
    color: '#666666',
    marginBottom: 40,
  },
});
