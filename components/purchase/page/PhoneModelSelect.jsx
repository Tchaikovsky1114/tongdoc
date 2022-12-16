import { Text, View, StyleSheet } from 'react-native';
import P_14R from '../../../style/paragraph/P_14R';
import P_16M from '../../../style/paragraph/P_16M';
import PhoneModelSelectBox from '../purchaseCommon/PhoneModelSelectBox';

const COMPANY = [
  {
    num: 1,
    title: '전체',
  },
  {
    num: 2,
    title: '삼성',
  },
  {
    num: 3,
    title: '애플',
  },
];

const PRICE = [
  {
    num: 1,
    title: '최신 고급형',
    smallTitle: '80만원 이상',
  },
  {
    num: 2,
    title: '중급형',
    smallTitle: '50만원 이상',
  },
  {
    num: 3,
    title: '보급형',
    smallTitle: '50만원 이하',
  },
];

const PhoneModelSelect = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemBox}>
        <View style={styles.modelSelectTitle}>
          <P_16M>제조사</P_16M>
          <P_14R style={{ color: '#666666' }}>(중복선택가능)</P_14R>
        </View>
        <View style={styles.modelSelectItemBox}>
          {COMPANY.map((item) => (
            <PhoneModelSelectBox item={item} />
          ))}
        </View>
      </View>
      <View style={styles.itemBox}>
        <View style={styles.modelSelectTitle}>
          <P_16M>사양 및 가격</P_16M>
        </View>
        <View style={styles.modelSelectItemBox}>
          {PRICE.map((item) => (
            <PhoneModelSelectBox item={item} />
          ))}
        </View>
      </View>
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
});
