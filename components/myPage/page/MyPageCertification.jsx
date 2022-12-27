import { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import H4_24R from '../../../style/H4_24R';
import TermsModal from '../../common/TermsModal';
import {
  POLICY_MARKETING_URL,
  POLICY_OTHER_URL,
  POLICY_PRIVACY_URL,
  POLICY_SERVICE_URL,
} from '../../signup/constants/Constants';
import MyPageCertTab from '../myPageCommon/MyPageCertTab';

const MyPageCertification = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [termsDetail, setTermsDetail] = useState('');
  const showDetailTermsModalHandler = useCallback(async (termsURL) => {
    setTermsDetail(termsURL);
    setModalVisible((prev) => !prev);
  }, []);
  return (
    <>
      <TermsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        termsDetail={termsDetail}
      />
      <View style={styles.container}>
        <H4_24R style={styles.title}>이용약관</H4_24R>
        <View>
          <Pressable
            onPress={() => showDetailTermsModalHandler(POLICY_SERVICE_URL)}
          >
            <MyPageCertTab image={true}>서비스 이용약관</MyPageCertTab>
          </Pressable>
          <Pressable
            onPress={() => showDetailTermsModalHandler(POLICY_PRIVACY_URL)}
          >
            <MyPageCertTab image={true}>제3자 정보제공동의</MyPageCertTab>
          </Pressable>
          <Pressable
            onPress={() => showDetailTermsModalHandler(POLICY_OTHER_URL)}
          >
            <MyPageCertTab image={true}>
              마케팅정보 활용 및 수신동의
            </MyPageCertTab>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default MyPageCertification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    marginBottom: 40,
  },
});
