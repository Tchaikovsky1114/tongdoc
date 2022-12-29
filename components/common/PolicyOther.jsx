import { Image, ScrollView, View } from 'react-native';
import P_12R from '../../style/paragraph/P_12R';

const PolicyOther = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#ffffff',
        paddingHorizontal: 24,
      }}
    >
      <P_12R style={{ marginBottom: 16, color: '#666666' }}>
        본 서비스와 관련하여, 본인은 동의 내용을 숙지하였으며, 이에 따라 회사가
        수집한 본인의 개인정보를 아래와 같이 제3자에게 제공하는 것에 대해
        동의합니다.
      </P_12R>
      <View
        style={{
          height: 188,
          marginBottom: 16,
        }}
      >
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          source={require('../../assets/common/otherPolicy.png')}
        />
      </View>
      <P_12R style={{ marginBottom: 16, color: '#666666' }}>
        ※ 단 법령에서 따로 정하는 경우에는 해당 기간까지 보유합니다.{'\n'}※
        고객은 개인정보 제공에 동의하지 않으실 수 있으시며, 동의하지 않으신 경우
        본 서비스 이용이 불가능 할 수 있습니다.
      </P_12R>
      <P_12R style={{ color: '#666666' }}>
        * 회사는 상기 정보와 목적 외에는 이용자의 정보를 제공하지 않으며, 서비스
        이용을 위한 목적 외에는 고객정보를 활용하지 않습니다.
      </P_12R>
    </ScrollView>
  );
};

export default PolicyOther;
