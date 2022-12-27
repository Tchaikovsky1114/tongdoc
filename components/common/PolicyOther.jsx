import { ScrollView, View } from 'react-native';
import P_12R from '../../style/paragraph/P_12R';
import P_14M from '../../style/paragraph/P_14M';

const PolicyOther = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#ffffff',
        paddingHorizontal: 24,
      }}
    >
      <P_12R style={{ marginBottom: 16, color: '#666666' }}>
        (주)통신닥터(이하 “회사”) 및 회사 업무수탁자는 이용자께서 필수적인 수집
        이용에 동의하시어 제공하신 ∙ 개인 정보를 「개인정보보호법」 및
        「신용정보의 이용 및 보호에 관한 법률」에 따라 다음과 같이 활용하고자
        합니다. 이용자가 본 수신 동의를 철회하고자 할 경우 고객센터를 통하여
        수신 동의 철회 요청을 할 수 있습니다.
      </P_12R>
      <View style={{ marginBottom: 16 }}>
        <P_14M style={{ marginBottom: 8 }}>개인정보의 활용 목적</P_14M>
        <P_12R style={{ color: '#666666' }}>
          - 당사 및 제3자의 상품 홍보{'\n'}- 당사 및 제3자의 제반 마케팅 활동
          {'\n'}- 담당자 배정을 통한 가족 통신비 분석점검, 휴대폰 최적구매
          서비스 제공
        </P_12R>
      </View>
      <View style={{ marginBottom: 16 }}>
        <P_14M style={{ marginBottom: 8 }}>개인정보의 활용의 이용 항목</P_14M>
        <P_12R style={{ color: '#666666' }}>
          - 개인식별정보(성명, 생년월일, 주소, 휴대폰 전화번호, 전자우편주소 등)
          {'\n'}- 통신사의 통신비 요금청구 관련 정보
        </P_12R>
      </View>
      <View style={{ marginBottom: 16 }}>
        <P_14M style={{ marginBottom: 8 }}>개인(신용)정보의 활용 동의</P_14M>
        <P_12R style={{ color: '#666666' }}>
          - 당사는 수집된 정보를 활용하여 SMS, LMS, MMS, 이메일 및 유무선전화
          등을 통해 서비스와 관련된 신상품 소식, 이벤트 안내, 고객혜택 등 다양한
          마케팅 자료를 제공합니다.
        </P_12R>
      </View>
      <View style={{ marginBottom: 16 }}>
        <P_14M style={{ marginBottom: 8 }}>개인(신용)정보의 활용 기간</P_14M>
        <P_12R style={{ color: '#666666' }}>
          - 개인(신용)정보의 활용 동의 시부터 회원 탈퇴 또는 동의 철회 시까지
          활용
        </P_12R>
      </View>
    </ScrollView>
  );
};

export default PolicyOther;
