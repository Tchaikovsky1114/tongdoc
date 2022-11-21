import { Text, View } from 'react-native';
import HomeModal from '../components/sendingBills/homeModal/HomeModal';

const TestPage = ({ route }) => {
  console.log(route);
  const tongkind = route.params.tongkind;
  const inBoundEmail = route.params.inBoundEmail;
  return (
    <View>
      <Text>테스트</Text>
      <HomeModal tongkind={tongkind} inBoundEmail={inBoundEmail} />
    </View>
  );
};

export default TestPage;
