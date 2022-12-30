import {Dimensions,StyleSheet,View} from 'react-native';
import React, { useCallback, useState } from 'react';
import * as SMS from 'expo-sms';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AddCommonHeader from '../add-common/AddCommonHeader';
import AddPhoneInfoBox from './AddPhoneInfoBox';
import AddCommonInputBox from '../add-common/AddCommonInputBox';
import AddCommonRequestConsentButton from '../add-common/AddCommonRequestConsentButton';

const { width } = Dimensions.get('window');

export default function AddPhone() {
  const navigation = useNavigation();
  const [addFamilyForm, setAddFamilyForm] = useState({
    familyName: '',
    familyPhoneNumber: '',
  });
  const [SMSContents, setSMSContents] = useState('');
  const [borderHighlight1,setBorderHighlight1] = useState(false);
  const [borderHighlight2,setBorderHighlight2] = useState(false);

  const onChangeTextHandler = useCallback((property, text) => {
    setAddFamilyForm((prev) => ({
      ...prev,
      [property]: text,
    }));
  }, []);

  const sendSMSConsentHandler = async () => {
    const token = await AsyncStorage.getItem('access');
    let message = '';
    try {
      const { data } = await axios.post(
        'https://api.tongdoc.co.kr/v1/family',
        {
          family_name: addFamilyForm.familyName,
          family_type: 'phone',
          phone_number: addFamilyForm.familyPhoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSMSContents(data);
      message = data.send_message;
    } catch (error) {
      console.error(error);
    }
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      try {
        await SMS.sendSMSAsync(
          addFamilyForm.familyPhoneNumber,
          message
        );
        navigation.navigate('Diagnosis', {
          add: true,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('문자 사용 불가능 장치');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <AddCommonHeader title="가족 등록하기" headerStyle={{marginTop:0}} />
        <View style={{ marginTop: 40 }}>
          <AddCommonInputBox
            isBorderHighlight={borderHighlight1}
            placeholder={`가족의 이름(실명)      `}
            style={styles.input}
            onFocus={() => setBorderHighlight1(() => true)}
            onBlur={() => setBorderHighlight1(() => false)}
            onChangeText={(text) => onChangeTextHandler('familyName', text)}
            value={addFamilyForm.familyName}
          />
          <AddCommonInputBox
            isBorderHighlight={borderHighlight2}
            style={styles.input}
            placeholder="가족의 휴대폰 번호 (-없이 숫자만 입력해 주세요)"
            onFocus={() => setBorderHighlight2(() => true)}
            onBlur={() => setBorderHighlight2(() => false)}
            onChangeText={(text) => onChangeTextHandler('familyPhoneNumber', text)}
            value={addFamilyForm.familyPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        <AddPhoneInfoBox />
        <AddCommonRequestConsentButton onPress={sendSMSConsentHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  inner: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 24,
  },
  input: {
    fontFamily: 'Noto400',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingTop: 16,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  }
});
