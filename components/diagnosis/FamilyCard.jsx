import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState,useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import PhoneDetailModal from './detailModal/PhoneDetailModal';
import ConfirmModal from '../common/ConfirmModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConfirmRemoveFamilyModal from './ConfirmRemoveFamilyModal';
import FamilyStatusButton from './FamilyStatusButton';
import P_16M from '../../style/paragraph/P_16M';
import P_12R from '../../style/paragraph/P_12R';
import P_14M from '../../style/paragraph/P_14M';
import P_12M from '../../style/paragraph/P_12M';
import axios from 'axios';

export default function FamilyCard({ item, index, billType }) {
  const navigation = useNavigation()
  const {id, user_name: name, phone_number: phoneNumber, tcom: telecom, state, check_y, check_m, charge, save: savings} = item;
  const [phoneDetailModalIsVisible, setPhoneDetailModalIsVisible] = useState(false);
  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);
  const [isDeleteFamilyModalVisible,setIsDeleteFamilyModalVisible] = useState(false);
  const [detail, setDetail] = useState();

  const fetchGetDiagnosisDetail = async (year, month) => {
    if (state !== 1) {
      setConfirmModalIsVisible((prev) => !prev);
      return;
    } else {
      setPhoneDetailModalIsVisible((prev) => !prev);
      try {
        const token = await AsyncStorage.getItem('access');
        const { data } = await axios.get(
          `https://api.tongdoc.co.kr/v1/doctor/detail?user_id=${id}&bill_type=${billType}&year=${year}&month=${month}`,
          {
            headers:
            {
              accept: 'applycation/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDetail(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const changeData = (data) => {
    setDetail(data);
  };

  const togglePhoneDetailModalHandler = useCallback(() => {
    setPhoneDetailModalIsVisible((prev) => !prev);
  },[]);

  const toggleConfirmModalHandler = useCallback(() => {
    setConfirmModalIsVisible((prev) => !prev);
  },[]);

  const toggleDeleteFamilyModalHandler = useCallback( () => {
    setIsDeleteFamilyModalVisible(prev => !prev);
  },[])

  const deleteFamilyHandler = async () => {
   
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.delete(`https://api.tongdoc.co.kr/v1/family/${item.family_id}?family_type=${billType}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })  
      navigation.navigate('Diagnosis',{
        remove:true
      })
    } catch (error) {
      console.error(error)
    } 
  }

  console.log(item);

  return (
    <>
      <ConfirmRemoveFamilyModal
        onRequestClose={() => setIsDeleteFamilyModalVisible(prev => !prev)}
        deleteFamilyHandler={deleteFamilyHandler}
        isDeleteFamilyModalVisible={isDeleteFamilyModalVisible}
        toggleDeleteFamilyModalHandler={toggleDeleteFamilyModalHandler}
      />
      

      <Pressable onPress={() => fetchGetDiagnosisDetail(check_y, check_m)}>
        <View
          style={[
            styles.container,
            {
              borderColor: item.family_id === 0 ? '#2D63E2' : '#ddd',
              borderWidth: item.family_id ? 2 : 1,
            },
          ]}
        >
          <View>
            <P_16M>
              {name} {item.family_id === 0 ? <Text>(나)</Text> : null}
            </P_16M>
            <View style={{ flexDirection: 'row' }}>
              {
                telecom
                ? <P_12R style={{ color: '#666666', paddingRight: 8 }}>{telecom}</P_12R>
                : null
              }
              <P_12R style={{ color: '#666666' }}>
                {phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{1})/,'$1-$2**-*$4')}
              </P_12R>
            </View>
          </View>


          {!item.state_txt
          ? <View style={{ flexDirection: 'row' }}>
            <P_14M>{parseInt(charge).toLocaleString()}원</P_14M>
            <View style={styles.saveMoneyBox}>
              <P_14M style={{ color: '#2d63e2' }}>(</P_14M>
              <Image
                style={styles.reverseTriangleImage}
                source={require('../../assets/diagnosis/bluereversetriangle.png')}
              />
              <P_14M style={{ color: '#2d63e2' }}>
                {parseInt(savings).toLocaleString()})
              </P_14M>
            </View>
            {item.family_id !== 0 && (
              <Pressable onPress={toggleDeleteFamilyModalHandler}>
                <Image style={{width:24, height:24,marginLeft:8}} source={require('../../assets/common/remove.png')} />
              </Pressable>
            )}
          </View>
          : <View style={styles.statusBox}>
              <View>
                <View style={styles.stateTextBox}>
                  <P_12M style={styles.stateText}>{item.state_txt}</P_12M>
                </View>
                <View>
                  {item.state === 0 && <FamilyStatusButton text="요금청구서 등록 방법" />}
                  {item.state === 3 && <FamilyStatusButton text="동의요청 재발송" />}
                  {item.state === 5 && <FamilyStatusButton text="청구서 분석중" /> }
                </View>
              </View>
              <View>
                {item.family_id !== 0 && <Pressable onPress={toggleDeleteFamilyModalHandler}><Image style={{width:24, height:24,marginLeft:8}} source={require('../../assets/common/remove.png')} /></Pressable>}  
              </View>
            </View>
            }
        </View>
      </Pressable>

      <PhoneDetailModal
        detail={detail}
        isVisible={phoneDetailModalIsVisible}
        togglePhoneDetailModalHandler={togglePhoneDetailModalHandler}
        billType="phone"
        changeData={changeData}
        toggleConfirmModalHandler={toggleConfirmModalHandler}
      />
      <ConfirmModal
        firstInfoText={`현재 청구서 분석중입니다.`}
        buttonText="닫기"
        isVisible={confirmModalIsVisible}
        pressBtn={toggleConfirmModalHandler}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 64,
  },
  saveMoneyBox: {
    marginLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reverseTriangleImage:{
    width: 6,
    height: 10,
    marginRight: 4,
    marginLeft: 2,
    top: 1,
  },
  statusBox:{flexDirection:'row',alignItems:'center'},
  stateTextBox:{
    paddingVertical:2,
    paddingHorizontal:4,
    backgroundColor:'#f6f6f6',
    borderRadius:8,
    marginBottom:2,
  },
  stateText:{
    color:'#666',
    textAlign:'center'
  },

});
