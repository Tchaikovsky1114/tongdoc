import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Pressable,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import H6_18M from '../../style/H6_18M';
import {
  POLICY_OTHER_URL,
  POLICY_PRIVACY_URL,
  POLICY_SERVICE_URL,
} from '../signup/constants/Constants';
import PolicyOther from './PolicyOther';
import PolicyPrivacy from './PolicyPrivacy';
import PolicyService from './PolicyService';
const TermsModal = ({ modalVisible, setModalVisible, termsDetail }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView style={{ backgroundColor: '#ffffff', marginBottom: 16 }}>
        <View>
          <View
            style={{
              paddingTop: 8,
              paddingHorizontal: 24,
            }}
          >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              {termsDetail === POLICY_SERVICE_URL && (
                <H6_18M style={{ PaddingTop: 24 }}>서비스 이용약관</H6_18M>
              )}
              {termsDetail === POLICY_PRIVACY_URL && (
                <H6_18M style={{ PaddingTop: 24 }}>제3자 정보제공동의</H6_18M>
              )}
              {termsDetail === POLICY_OTHER_URL && (
                <H6_18M style={{ PaddingTop: 24 }}>
                  마케팅정보 활용 및 수신동의
                </H6_18M>
              )}
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/common/close.png')}
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      {termsDetail === POLICY_SERVICE_URL && <PolicyService />}
      {termsDetail === POLICY_PRIVACY_URL && <PolicyPrivacy />}
      {termsDetail === POLICY_OTHER_URL && <PolicyOther />}
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonClose: {
    backgroundColor: '#fff',
  },
});

export default TermsModal;
