import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import P_16M from '../../style/paragraph/P_16M';
import P_14M from '../../style/paragraph/P_14M';
import P_14R from '../../style/paragraph/P_14R';
import BuyList from './purchaseCommon/BuyList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Purchase = () => {
  const [buyList, setBuyList] = useState([]);
  const navigation = useNavigation();

  const moveToSelectPhone = () => {
    navigation.navigate('PhoneConditionSelect');
  };
<<<<<<< HEAD

  const moveToReceivedProposal = () => {
    navigation.navigate('ReceivedProposal')
  }
  return (
    <View>
      <Pressable style={styles.PressStyle} onPress={moveToSelectPhone}>
        <Text>휴대폰 구매하기</Text>
      </Pressable>
      <Pressable style={styles.PressStyle} onPress={moveToReceivedProposal}>
        <Text>받은 구매 제안서</Text>
      </Pressable>
=======
  const getBuyList = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get('https://api.tongdoc.co.kr/v1/buy', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBuyList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBuyList();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 24 }}>
        <Pressable style={styles.pressPurchase} onPress={moveToSelectPhone}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/purchase/purchase.png')} />
            <P_14M style={styles.phonePurchase}>휴대폰 구매하기</P_14M>
          </View>
          <View>
            <Image
              style={{ width: 23, height: 23 }}
              source={require('../../assets/common/whitenextarrow.png')}
            />
          </View>
        </Pressable>
      </View>
      <P_16M style={{ color: '#333333', marginBottom: 8 }}>주문 내역</P_16M>
      {buyList?.length === 0 ? (
        <View
          style={{
            flex: 1,
            marginBottom: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../assets/purchase/noneList.png')}
            />
            <P_14M style={{ marginTop: 8 }}>
              아직 휴대폰 구매 주문 건이 없어요.
            </P_14M>
          </View>
        </View>
      ) : (
        <ScrollView style={{ flex: 1, marginBottom: 24 }}>
          {buyList?.map((el) => (
            <BuyList key={el.buy_id} item={el} />
          ))}
        </ScrollView>
      )}
      {buyList?.length === 0 ? (
        <View style={{ alignItems: 'center', marginBottom: 72 }}></View>
      ) : (
        <View style={{ alignItems: 'center', marginBottom: 72 }}>
          <Image
            style={{
              transform: [{ rotate: '-90deg' }],
              width: 24,
              height: 24,
            }}
            source={require('../../assets/common/back_arrow.png')}
          />
        </View>
      )}
      <View style={{ marginBottom: 40, alignItems: 'center' }}>
        <P_14R style={{ color: '#666666', textAlign: 'center' }}>
          최근 6개월의 주문 내역만 조회됩니다.{'\n'}받은 구매 제안서는 약 일주일
          동안 유효하나{'\n'}매장마다 상이합니다.
        </P_14R>
      </View>
>>>>>>> 72360377e5325449f6578f3cd6640c9437cf183d
    </View>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  pressPurchase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2D63E2',
    borderRadius: 12,
    paddingVertical: 17,
    paddingHorizontal: 16,
  },
  phonePurchase: {
    marginLeft: 8,
    color: '#FFFFFF',
  },
});
