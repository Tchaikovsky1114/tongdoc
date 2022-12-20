import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Purchase = () => {
  const navigation = useNavigation();

  const moveToSelectPhone = () => {
    navigation.navigate('PhoneConditionSelect');
  };
  return (
    <View>
      <Pressable style={styles.PressStyle} onPress={moveToSelectPhone}>
        <Text>휴대폰 구매하기</Text>
      </Pressable>
    </View>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  PressStyle: {
    padding: 8,
  },
});
