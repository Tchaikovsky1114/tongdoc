import { StyleSheet, View } from 'react-native';
import P_12R from '../../../style/paragraph/P_12R';

const DetailBottomInfo = () => {
  return (
    <View style={styles.bottomInfoBox}>
      <View style={styles.infoTextBox}>
        <P_12R style={styles.infoTextBullet}>{'\u2022'}</P_12R>
        <P_12R style={styles.infoText}>
          절감 가능액은 실제 요금과 다를 수 있습니다.
        </P_12R>
      </View>
      <View style={styles.infoTextBox}>
        <P_12R style={styles.infoTextBullet}>{'\u2022'}</P_12R>
        <P_12R style={styles.infoText}>
          기타에는 부가세, 소액결제, USIM 비용 등의 요금이 포함되어 있습니다.
        </P_12R>
      </View>
      <View style={styles.infoTextBox}>
        <P_12R style={styles.infoTextBullet}>{'\u2022'}</P_12R>
        <P_12R style={styles.infoText}>
          통신사의 청구 상세내역을 확인 후 불필요한 항목이 있는 경우, 반드시
          고객센터로 연락하여 삭제하시기 바랍니다.
        </P_12R>
      </View>
    </View>
  );
};

export default DetailBottomInfo;

const styles = StyleSheet.create({
  bottomInfoBox: {
    paddingHorizontal: 8,
    paddingBottom: 90,
  },
  infoTextBox: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  infoTextBullet: {
    color: '#666666',
    marginRight: 5,
  },
  infoText: {
    color: '#666666',
  },
});
