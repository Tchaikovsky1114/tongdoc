import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';
import React, { useState,useCallback } from 'react';
import P_16M from '../../style/paragraph/P_16M';
import P_12R from '../../style/paragraph/P_12R';
import P_14M from '../../style/paragraph/P_14M';
import 'intl';
import 'intl/locale-data/jsonp/en';
import PhoneDetailModal from './detailModal/PhoneDetailModal';
import ConfirmModal from '../common/ConfirmModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import P_12M from '../../style/paragraph/P_12M';
import P_18R from '../../style/paragraph/P_18R';
import P_16R from '../../style/paragraph/P_16R';
import P_14R from '../../style/paragraph/P_14R';
import { useNavigation } from '@react-navigation/native';

export default function FamilyCard({ item, index, billType }) {
  const {id,user_name: name,phone_number: phoneNumber,tcom: telecom,state,check_y,check_m,charge,save: savings,} = item;
  const navigation = useNavigation()
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
      const { data } = await axios.delete(`https://api.tongdoc.co.kr/v1/family/${item.family_id}?family_type=phone`,{
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

  return (
    <>
      <Modal
      animationType='fade'
      transparent={true}
      visible={isDeleteFamilyModalVisible}
      onRequestClose={() => setIsDeleteFamilyModalVisible(prev => !prev)}
      >
        <View style={{backgroundColor:'rgba(0,0,0,0.2)',flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={{width:'80%',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderRadius:8,padding:16}}>
            <P_18R style={{textAlign:'center'}}>{item.user_name}님을 {'\n'} 삭제하시겠습니까?</P_18R>
            <P_14R>삭제 멈춰!</P_14R>
            <View style={{marginTop:16,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Pressable onPress={toggleDeleteFamilyModalHandler} style={({pressed}) => [{flex:1,height:50,alignItems:'center',justifyContent:'center',borderRadius:8,}]}><P_16R style={{textAlign:'center',color:'#2d63e2'}}>아니요</P_16R></Pressable>
            <Pressable onPress={deleteFamilyHandler} style={({pressed}) => [{flex:1,height:50,alignItems:'center',justifyContent:'center',borderRadius:8,backgroundColor: pressed ? '#2D63E273' : '#2d63e2'}]}><P_16R style={{textAlign:'center',color:'#fff'}}>예</P_16R></Pressable>
            </View>
          </View>
        </View>
      </Modal>
      

      <Pressable onPress={() => fetchGetDiagnosisDetail(check_y, check_m)}>
        <View
          style={[
            styles.container,
            {
              borderColor: index === 0 ? '#2D63E2' : '#ddd',
              borderWidth: index === 0 ? 2 : 1,
            },
          ]}
        >
          <View>
            <P_16M>
              {name} {index === 0 ? <Text>(나)</Text> : null}
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
            {index !== 0 && <Pressable onPress={toggleDeleteFamilyModalHandler}><Image style={{width:24, height:24,marginLeft:8}} source={require('../../assets/common/remove.png')} /></Pressable>}
          </View>
          : <View style={{flexDirection:'row',alignItems:'center'}}>
              <View>
                <View style={{paddingVertical:2,paddingHorizontal:4,backgroundColor:'#f6f6f6',borderRadius:8,marginBottom:2,}}>
                  <P_12M style={{color:'#666',textAlign:'center'}}>{item.state_txt}</P_12M>
                </View>
                <View>
                  {item.state === 0 &&<Pressable style={({pressed}) => [{backgroundColor:'#F6F9FF',paddingVertical:2,paddingHorizontal:4,borderRadius:8}]}><P_12M style={{color:'#2d63e2',textAlign:'right'}}>요금청구서 등록 방법</P_12M></Pressable>}
                  {/* 기능 미구현: 가족 거절 {item.state === 2 &&<Pressable><P_12M>{item.state_txt}</P_12M></Pressable>} */}
                  {item.state === 3 &&<Pressable style={({pressed}) => [{backgroundColor:'#F6F9FF',paddingVertical:2,paddingHorizontal:4,borderRadius:8}]}><P_12M style={{color:'#2d63e2',textAlign:'right'}}>동의요청 재발송</P_12M></Pressable>}
                  {/* 기능 미구현: 가족 탈퇴 {item.state === 4 &&<Pressable><P_12M>{item.state_txt}</P_12M></Pressable>} */}
                  {item.state === 5 &&<Pressable style={({pressed}) => [{backgroundColor:'#F6F9FF',paddingVertical:2,paddingHorizontal:4,borderRadius:8}]}><P_12M style={{color:'#2d63e2',textAlign:'right'}}>청구서 분석중</P_12M></Pressable>}
                </View>
              </View>
              <View>
                {index !== 0 && <Pressable onPress={toggleDeleteFamilyModalHandler}><Image style={{width:24, height:24,marginLeft:8}} source={require('../../assets/common/remove.png')} /></Pressable>}  
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
  }
});
