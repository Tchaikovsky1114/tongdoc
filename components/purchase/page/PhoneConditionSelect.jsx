import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import P_14R from '../../../style/paragraph/P_14R';
import P_16M from '../../../style/paragraph/P_16M';
import DimensionBtn from '../../common/DimensionBtn';
import PurchaseSelectBox from '../purchaseCommon/PurchaseSelectBox';

const SELECT_METHOD = [
  {
    num: 0,
    title: '휴대폰 추천받기',
    select: 'recommend',
  },
  {
    num: 1,
    title: '휴대폰 선택하기',
    select: 'selected',
  },
];

const COMPANY = [
  {
    num: 0,
    title: '전체',
    select: 'total',
  },
  {
    num: 1,
    title: '삼성',
    select: 'sam',
  },
  {
    num: 2,
    title: '애플',
    select: 'app',
  },
];

const PRICE = [
  {
    num: 0,
    title: '최신 고급형',
    smallTitle: '80만원 이상',
    select: 'latest',
  },
  {
    num: 1,
    title: '중급형',
    smallTitle: '50만원 이상',
    select: 'middle',
  },
  {
    num: 2,
    title: '보급형',
    smallTitle: '50만원 이하',
    select: 'entry',
  },
];

const PhoneConditionSelect = () => {
  const navigation = useNavigation();
  const [isDisable, setIsDisable] = useState(false);
  const [id, setId] = useState('');
  const [gubun, setGubun] = useState('');
  const [company, setCompany] = useState('');
  const [spec, setSpec] = useState('');
  const [token, setToken] = useState('');
  const gubunHandler = useCallback(
    (num) => {
      setGubun(num);
    },
    [gubun]
  );
  const companyHandler = useCallback(
    (num) => {
      setCompany(num);
    },
    [company]
  );
  const specHandler = useCallback(
    (num) => {
      setSpec(num);
    },
    [spec]
  );
  const linkToSelectModel = () => {
    if (gubun === 0) {
      navigation.navigate('PhoneOrderSuggest', {
        id,
        token,
        gubun,
        company,
        spec,
      });
    } else {
      navigation.navigate('PhoneModelSelect', {
        id,
        token,
        gubun,
        company,
        spec,
      });
    }
  };

  const getUser = async () => {
    const getToken = await AsyncStorage.getItem('access');
    setToken(getToken);
    const { data } = await axios.get('https://api.tongdoc.co.kr/v1/user', {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    });
    setId(data.user_id);
  };

  useEffect(() => {
    getUser();
    setIsDisable((prev) => !prev);
  }, [spec !== '']);

  return (
    <View style={styles.container}>
      <View style={styles.itemBox}>
        <View style={styles.modelSelectTitle}>
          <P_16M>제안받을 휴대폰 구매 조건을 선택해 주세요.</P_16M>
        </View>
        <View style={styles.modelSelectItemBox}>
          {SELECT_METHOD.map((item) => (
            <PurchaseSelectBox
              item={item}
              key={item.num}
              handler={gubunHandler}
              style={gubun === item.num && styles.select}
              textStyle={gubun === item.num && styles.textSelect}
            />
          ))}
        </View>
      </View>
      {gubun !== '' && (
        <View style={styles.itemBox}>
          <View style={styles.modelSelectTitle}>
            <P_16M>제조사</P_16M>
            <P_14R style={{ color: '#666666' }}>(중복선택 가능)</P_14R>
          </View>
          <View style={styles.modelSelectItemBox}>
            {COMPANY.map((item) => (
              <PurchaseSelectBox
                item={item}
                key={item.num}
                center={true}
                handler={companyHandler}
                style={company === item.num && styles.select}
                textStyle={company === item.num && styles.textSelect}
              />
            ))}
          </View>
        </View>
      )}
      {company !== '' && (
        <View style={styles.itemBox}>
          <View style={styles.modelSelectTitle}>
            <P_16M>사양 및 가격</P_16M>
          </View>
          <View style={styles.modelSelectItemBox}>
            {PRICE.map((item) => (
              <PurchaseSelectBox
                item={item}
                key={item.num}
                center={true}
                handler={specHandler}
                style={spec === item.num && styles.select}
                textStyle={spec === item.num && styles.textSelect}
              />
            ))}
          </View>
        </View>
      )}
      <DimensionBtn isDisable={isDisable} onPress={linkToSelectModel}>
        다음
      </DimensionBtn>
    </View>
  );
};

export default PhoneConditionSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  itemBox: {
    marginBottom: 24,
  },
  modelSelectTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  modelSelectItemBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  select: {
    borderWidth: 1,
    borderColor: '#2D63E2',
  },
  textSelect: {
    color: '#2D63E2',
  },
});
