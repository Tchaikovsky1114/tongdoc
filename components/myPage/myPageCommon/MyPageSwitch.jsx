import { StyleSheet, Switch, View } from 'react-native';
import P_14R from '../../../style/paragraph/P_14R';

const MyPageSwitch = ({ value, onValueChange, children }) => {
  return (
    <View style={styles.container}>
      <P_14R>{children}</P_14R>
      <Switch
        trackColor={{ false: '#DDDDDD', true: '#2D63E2' }}
        thumbColor={value ? '#ffffff' : '#ffffff'}
        ios_backgroundColor="#DDDDDD"
        value={value}
        onValueChange={onValueChange}
        style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
      />
    </View>
  );
};

export default MyPageSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    marginBottom: 24,
  },
});
