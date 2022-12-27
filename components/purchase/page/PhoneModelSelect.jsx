import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import P_14R from '../../../style/paragraph/P_14R';
import P_16M from '../../../style/paragraph/P_16M';
import DimensionBtn from '../../common/DimensionBtn';
import PurchaseModel from '../purchaseCommon/PurchaseModel';

const PHONE = [
  {
    id: 1,
    phone_name: 'iPhone 12 64G',
    phone_produce: 'Apple',
    phone_storage: 64,
    phone_price: 1078000,
    img: 'https://api.tongdoc.co.kr/storage/files/img/thumbnail/107_iphone-12-white',
    service_type_txt: '5G',
    month_price: 47720,
  },
  {
    id: 2,
    phone_name: 'iPhone 13 64G',
    phone_produce: 'Apple',
    phone_storage: 164,
    phone_price: 1078000,
    img: 'https://api.tongdoc.co.kr/storage/files/img/thumbnail/107_iphone-12-white',
    service_type_txt: '5G',
    month_price: 47720,
  },
];

const PhoneModelSelect = ({ route }) => {
  const navigation = useNavigation();
  const [modelList, setModelList] = useState();
  const [selectModel, setSelectModel] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [token, setToken] = useState('');
  const { params } = route;

  useEffect(() => {
    const getPhoneModelList = async () => {
      const getToken = await AsyncStorage.getItem('access');
      setToken(getToken);
      const { data } = await axios.get(
        `https://api.tongdoc.co.kr/v1/buy/phone?company=${params.company}&filter=0`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setModelList(data);
    };
    getPhoneModelList();
  }, []);
  console.log(modelList, 'model');
  useEffect(() => {
    setIsDisable((prev) => !prev);
  }, [selectModel.length === 0]);

  const selectModelHandler = (num) => {
    if (selectModel.includes(num)) {
      setSelectModel(selectModel.filter((el) => el !== num));
    } else {
      setSelectModel([...selectModel, num]);
    }
  };
  const linkToOrder = () => {
    navigation.navigate('PhoneOrderSuggest', {
      token: token,
      buyer_id: 297,
      buyer_type: 'family',
      phone_id: 107,
      choice_spec: 0,
      choice_com: 0,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <P_16M>모델</P_16M>
        <P_14R style={{ color: '#666666' }}>(중복선택 가능)</P_14R>
      </View>
      <View style={styles.conditionBox}>
        <View style={styles.totalCount}>
          <P_14R>전체</P_14R>
          <P_14R style={{ color: '#2D63E2', marginLeft: 2 }}>7</P_14R>
        </View>
        <View style={styles.searchConditionBox}>
          <P_14R>인기상품순</P_14R>
          <Image
            style={styles.downIconImg}
            source={require('../../../assets/downIcon.png')}
          />
        </View>
      </View>
      <SafeAreaView style={{ flex: 1, marginBottom: 100 }}>
        <ScrollView style={{ flex: 1 }}>
          {modelList ? (
            <>
              {modelList.map((item) => (
                <PurchaseModel
                  item={item}
                  key={item.id}
                  selectHandler={selectModelHandler}
                  style={
                    selectModel.includes(item.id)
                      ? { borderColor: '#2D63E2' }
                      : { borderColor: '#DDDDDD' }
                  }
                />
              ))}
            </>
          ) : null}
        </ScrollView>
      </SafeAreaView>
      <DimensionBtn isDisable={isDisable} onPress={linkToOrder}>
        다음
      </DimensionBtn>
    </View>
  );
};

export default PhoneModelSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  conditionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchConditionBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downIconImg: {
    width: 24,
    height: 24,
  },
});
