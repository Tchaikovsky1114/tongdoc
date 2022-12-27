import { StyleSheet, Text, View } from 'react-native';
import P_12M from '../../../style/paragraph/P_12M';
import P_12R from '../../../style/paragraph/P_12R';
import P_14M from '../../../style/paragraph/P_14M';
import P_16M from '../../../style/paragraph/P_16M';

const PurchaseSuggestBox = ({
  titleNumber,
  suggestTitle,
  userStatusTitle,
  userStatusContents,
  recommendTip,
  style,
}) => {
  return (
    <View style={style}>
      <View style={styles.titleBox}>
        <View style={styles.titleNumberBox}>
          <Text style={styles.titleNumberText}>추천{titleNumber}</Text>
        </View>
        <P_16M>{suggestTitle}</P_16M>
      </View>
      <View style={styles.userStatusBox}>
        <View style={styles.userStatus}>
          <P_12M style={{ color: '#666666' }}>{userStatusTitle}</P_12M>
          <P_14M style={{ color: '#333333' }}>{userStatusContents}</P_14M>
        </View>
        <View style={styles.userStatusRecommend}>
          <P_14M style={{ marginRight: 8, color: '#2D63E2' }}>TIP.</P_14M>
          <P_12R style={{ flexShrink: 1, color: '#666666' }}>
            {recommendTip}
          </P_12R>
        </View>
      </View>
    </View>
  );
};

export default PurchaseSuggestBox;

const styles = StyleSheet.create({
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleNumberBox: {
    borderRadius: 8,
    backgroundColor: '#2D63E2',
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  titleNumberText: {
    fontFamily: 'Noto500',
    includeFontPadding: false,
    padding: 0,
    color: '#FFFFFF',
    fontSize: 12,
  },
  userStatusBox: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 16,
    padding: 16,
  },
  userStatus: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  userStatusRecommend: {
    flexDirection: 'row',
  },
});
