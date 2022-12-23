import { Image, StyleSheet, View } from 'react-native';
import P_16M from '../../../style/paragraph/P_16M';
import P_12R from '../../../style/paragraph/P_12R';
import P_12M from '../../../style/paragraph/P_12M';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
const BuyList = ({ item }) => {
  const [phoneName, setPhoneName] = useState('');
  const getPhoneName = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get(
        `https://api.tongdoc.co.kr/v1/buy/${item.buy_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPhoneName(data.buy.choice_spec);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPhoneName();
  }, []);

  return (
    <View style={[styles.container, { borderColor: '#dddddd' }]}>
      <View style={styles.phoneModelBox}>
        <Image source={require('../../../assets/purchase/phoneDefault.png')} />
        <P_16M style={{ marginLeft: 16 }}>{phoneName}</P_16M>
      </View>
      <View style={styles.phonePurchaseStatus}>
        <P_12R>{item?.created_at}</P_12R>
        {item.reserve_state === 1 ? (
          <View style={[styles.purchaseStatus, { backgroundColor: '#F6F9FF' }]}>
            <P_12M style={{ color: '#2D63E2' }}>방문 예약 접수</P_12M>
          </View>
        ) : item.offer_cnt === 0 ? (
          <View style={[styles.purchaseStatus, { backgroundColor: '#F6F6F6' }]}>
            <P_12M style={{ color: '#666666' }}>제안 수신 대기</P_12M>
          </View>
        ) : (
          <View style={[styles.purchaseStatus, { backgroundColor: '#F6F9FF' }]}>
            <P_12M style={{ color: '#2D63E2' }}>
              제안 건수 {item.offer_cnt}건
            </P_12M>
          </View>
        )}
      </View>
    </View>
  );
};
export default BuyList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
  },
  phoneModelBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phonePurchaseStatus: {
    alignItems: 'flex-end',
  },
  purchaseStatus: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});
