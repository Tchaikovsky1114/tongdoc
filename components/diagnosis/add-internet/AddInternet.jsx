import {StyleSheet,View} from 'react-native';
import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SMS from 'expo-sms';
import axios from 'axios';

import SelectInternetModal from '../SelectInternetModal';
import AddCommonHeader from '../add-common/AddCommonHeader';
import AddInternetSelectTelecomBox from './AddInternetSelectTelecomBox';
import AddCommonInputBox from '../add-common/AddCommonInputBox';
import AddCommonRequestConsentButton from '../add-common/AddCommonRequestConsentButton';


export default function AddInternet() {
  const navigation = useNavigation();
  const [isBorderHighlight, setIsBorderHighlight] = useState(false);
  const [isBorderHighlight2, setIsBorderHighlight2] = useState(false);
  const [isChoiceTelecomModalVisible, setIsChoiceTelecomModalVisible] = useState(false);
  const [selectedTelecom, setSelectedTelecom] = useState('');
  const [internetForm, setInternetForm] = useState({
    name: '',
    phoneNumber: '',
  });

  const onChangeTextHandler = useCallback((name, text) => {
    setInternetForm((prev) => ({
      ...prev,
      [name]: text,
    }));
  }, []);

  const showChoiceTelecomModalHandler = useCallback(() => {
    setIsChoiceTelecomModalVisible((prev) => !prev);
  }, []);

  const selectTelecomHandler = useCallback((telecom) => {
    setSelectedTelecom(telecom);
    showChoiceTelecomModalHandler();
  },[])



  const postAddInternetHandler = useCallback(async () => {
    const token = await AsyncStorage.getItem('access');
    let message = '';
    try {
      const { data } = await axios.post(
        'https://api.tongdoc.co.kr/v1/family',
        {
          family_name: internetForm.name,
          family_type: 'internet',
          phone_number: internetForm.phoneNumber,
          telecom: selectedTelecom,
        },
        {
          headers: {
            Authorization: ` Bearer ${token}`,
          },
        }
      );
      message = data.send_message;
    } catch (error) {
      console.error(error.response.data.messages);
    }
    const isAvailable = SMS.isAvailableAsync();
    if (isAvailable) {
      try {
        SMS.sendSMSAsync(internetForm.phoneNumber, message);
        navigation.navigate('Diagnosis', {
          internet: true,
        });
      } catch (error) {
        console.error(error.response.data.messages)
      }
    }
  },[]);
  
  return (
    <>
      <SelectInternetModal
        isChoiceTelecomModalVisible={isChoiceTelecomModalVisible}
        onPress={selectTelecomHandler}
        showChoiceTelecomModalHandler={showChoiceTelecomModalHandler}
        />
      <View style={styles.container}>
        <AddCommonHeader title={`인터넷 가입정보 ${'\n'}등록하기`} />
        <AddInternetSelectTelecomBox
          showChoiceTelecomModalHandler={showChoiceTelecomModalHandler}
          isBorderHighlight={isBorderHighlight}
          selectedTelecom={selectedTelecom}
          />      
        <AddCommonInputBox
          onFocus={() => setIsBorderHighlight(() => true)}
          onBlur={() => setIsBorderHighlight(() => false)}
          onChangeText={(text) => onChangeTextHandler('name', text)}
          value={internetForm.name}
          style={styles.input}
          isBorderHighlight={isBorderHighlight}
          placeholder="인터넷 가입 명의자 이름 (실명)"
        />
        <AddCommonInputBox
          isBorderHighlight={isBorderHighlight2}
          onFocus={() => setIsBorderHighlight2(() => true)}
          onBlur={() => setIsBorderHighlight2(() => false)}
          onChangeText={(text) => onChangeTextHandler('phoneNumber', text)}
          style={styles.input}
          value={internetForm.phoneNumber}
          keyboardType="phone-pad"
          placeholder="명의자 휴대폰 번호 (- 없이 숫자만 입력해 주세요.)"
          /> 
        <AddCommonRequestConsentButton onPress={postAddInternetHandler}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    position: 'relative',
  },
  inputBox: {
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 16,
  },
  input: {
    fontFamily: 'Noto400',
    fontSize: 14,
    height: 30,
    width: '100%',
  },


  selectInput:{
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }
  
});
