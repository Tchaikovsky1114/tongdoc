import { Text, View } from 'react-native';
import SendingBillsKT from '../components/sendingBills/KT/SendingBillsKT';
import SendingBillsLG from '../components/sendingBills/LG/SendingBillsLG';
import SendingBillsSKT from '../components/sendingBills/SKT/SendingBillsSKT';

const TestPage = ({ route }) => {
  const tongkind = route.params.tongkind;
  return (
    <View>
      <Text>테스트</Text>
      {tongkind === '1' && <SendingBillsSKT />}
      {tongkind === '2' && <SendingBillsKT />}
      {tongkind === '3' && <SendingBillsLG />}
    </View>
  );
};

export default TestPage;
