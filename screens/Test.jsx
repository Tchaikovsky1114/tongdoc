import { Text, View } from 'react-native';
import HomeModal from '../components/sendingBills/homeModal/HomeModal';

const TestPage = ({ route }) => {
  const tongkind = route.params.tongkind;
  const tempId = route.params.tempID;
  return (
    <View>
      <Text>테스트</Text>
      <HomeModal tongkind={tongkind} tempId={tempId} />
    </View>
  );
};

export default TestPage;
