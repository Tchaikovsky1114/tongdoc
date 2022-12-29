import {Dimensions,Image,Modal,Pressable,StyleSheet,Text,TextInput,View} from 'react-native';
import React, { useCallback, useState } from 'react';
import H4_24R from '../../style/H4_24R';
import P_14R from '../../style/paragraph/P_14R';
import P_16M from '../../style/paragraph/P_16M';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as SMS from 'expo-sms';
import InternetSelectButton from './InternetSelectButton';
import SelectInternetModal from './SelectInternetModal';
const { width } = Dimensions.get('window');

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
  const [telecoms, setTelecoms] = useState({
    LG: 'LGU+',
    SKT: 'SKT',
    KT: 'KT',
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

  const postAddInternetHandler = async () => {
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
      console.error(error.response.data);
    }
    const isAvailable = SMS.isAvailableAsync();
    if (isAvailable) {
      try {
        const { result } = SMS.sendSMSAsync(internetForm.phoneNumber, message);
        navigation.navigate('Diagnosis', {
          internet: true,
        });
      } catch (error) {
        console.error(error.response.data)
      }
    }
  };
  
  const selectTelecomHandler = useCallback((telecom) => {
    setSelectedTelecom(telecom);
    showChoiceTelecomModalHandler();
  },[])

  return (
    <>
    <SelectInternetModal isChoiceTelecomModalVisible={isChoiceTelecomModalVisible} onPress={selectTelecomHandler} showChoiceTelecomModalHandler={showChoiceTelecomModalHandler}  />
      <View style={styles.container}>
        <H4_24R style={{ marginTop: 40 }}>
          인터넷 가입정보 {'\n'}등록하기
        </H4_24R>
        <View style={{ marginTop: 16, marginBottom: 40 }}>
          <P_14R style={{ color: '#666' }}>
            가족 등록은 함께 거주하지 않더라도 가능합니다. (배우자, 부모, 자녀,
            형제자매, 며느리, 사위 등)
          </P_14R>
        </View>

        <Pressable
          onPress={showChoiceTelecomModalHandler}
          style={({ pressed }) => [
            styles.inputBox,
            {
              borderBottomColor: isBorderHighlight ? '#2D63E2' : '#ddd',
              backgroundColor: pressed ? '#f6f9ff' : '#fff',
            },
          ]}
        >
          <View style={styles.selectInput}>
            <P_14R style={{ color: '#333' }}>
              {selectedTelecom || '통신사를 선택해주세요'}
            </P_14R>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../assets/downIcon.png')}
            />
          </View>
        </Pressable>
        <View style={[styles.inputBox,{ borderBottomColor: isBorderHighlight ? '#2D63E2' : '#ddd' }]}>
          <TextInput
            onFocus={() => setIsBorderHighlight(() => true)}
            onBlur={() => setIsBorderHighlight(() => false)}
            placeholderTextColor="#333"
            onChangeText={(text) => onChangeTextHandler('name', text)}
            value={internetForm.name}
            cursorColor="#2d63e2"
            style={styles.input}
            placeholder="인터넷 가입 명의자 이름 (실명)"
          />
        </View>
        <View style={[styles.inputBox,{ borderBottomColor: isBorderHighlight2 ? '#2D63E2' : '#ddd' }]}>
          <TextInput
            onFocus={() => setIsBorderHighlight2(() => true)}
            onBlur={() => setIsBorderHighlight2(() => false)}
            placeholderTextColor="#333"
            onChangeText={(text) => onChangeTextHandler('phoneNumber', text)}
            value={internetForm.phoneNumber}
            keyboardType="phone-pad"
            cursorColor="#2d63e2"
            style={styles.input}
            placeholder="명의자 휴대폰 번호 (- 없이 숫자만 입력해 주세요.)"
          />
        </View>
        <Pressable
          onPress={postAddInternetHandler}
          style={({ pressed }) => [ pressed ? styles.pressedConsentRequestButton : styles.consentRequestButton]}
        >
          <P_16M style={{ color: '#fff' }}>문자 동의 요청</P_16M>
        </Pressable>
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
  outer:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner:{
    width: '80%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  selectBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  consentRequestButton: {
    backgroundColor: '#2d63e2',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width,
  },
  pressedConsentRequestButton:{
    backgroundColor: '#2D63E278',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width,
  },
  selectInput:{
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }
});
