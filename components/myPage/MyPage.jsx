import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import P_12R from '../../style/paragraph/P_12R';
import P_14M from '../../style/paragraph/P_14M';
import HandlerBtn from './myPageCommon/HandlerBtn';
import MyPageTab from './myPageCommon/MyPageTab';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DoubleCheckModal from './myPageCommon/DoubleCheckModal';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loggedUserState } from '../../store/loggedUser';
import { useNavigation } from '@react-navigation/native';
const MyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const userInfo = useRecoilValue(loggedUserState);
  const version = Constants.manifest2.extra.expoClient.version;
  const navigation = useNavigation();
  const logoOut = async () => {
    const keys = ['refresh', 'access'];
    try {
      await AsyncStorage.multiRemove(keys);
      setIsVisible((prev) => !prev);
      navigation.navigate('Signin');
    } catch (error) {
      console.log(error);
    }
  };

  const modalHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <View>
      <View style={styles.userInfoContainer}>
        <Image source={require('../../assets/myPage/mainProfile.png')} />
        <P_14M style={styles.profileName}>
          안녕하세요, {userInfo.user_name}님.
        </P_14M>
        <View style={styles.userInfoBox}>
          <View style={styles.cellPhoneInfoBox}>
            <P_12R style={styles.telecom}>{userInfo.tcom}</P_12R>
            <P_12R style={styles.textColor}>
              {userInfo.phone_number.replace(
                /(\d{3})(\d{2})(\d{3})(\d{1})/,
                '$1-$2**-*$4'
              )}
            </P_12R>
          </View>
          <View>
            <P_12R style={styles.textColor}>{userInfo.user_email}</P_12R>
          </View>
        </View>
        <View style={styles.userInfoBtnBox}>
          <HandlerBtn
            borderStyle={styles.reAuthBtnBorder}
            textStyle={styles.userInfoBtnText}
          >
            재인증
          </HandlerBtn>
          <HandlerBtn
            borderStyle={styles.logoOutBtnBorder}
            textStyle={styles.userInfoBtnText}
            onPress={modalHandler}
          >
            로그아웃
          </HandlerBtn>
        </View>
      </View>
      <ScrollView>
        <KeyboardAvoidingView>
          <MyPageTab url={'MyPage/Certification'} image={true}>
            이용약관
          </MyPageTab>
          <MyPageTab url={'Signup/EmailAndPassword'} image={true}>
            알림설정
          </MyPageTab>
          <MyPageTab image={true}>비밀번호 변경</MyPageTab>
          <MyPageTab version={version}>앱정보</MyPageTab>
          <MyPageTab quit={true}>탈퇴하기</MyPageTab>
        </KeyboardAvoidingView>
      </ScrollView>
      <DoubleCheckModal
        isVisible={isVisible}
        firstInfoText={'정말 로그아웃 하시겠습니까?'}
        pressBtnCancel={modalHandler}
        pressBtnConfirm={logoOut}
      />
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  userInfoContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#F6F9FF',
    borderRadius: 16,
    marginBottom: 32,
  },

  profileName: {
    color: '#333333',
    marginBottom: 16,
    marginTop: 8,
  },
  userInfoBox: {
    alignItems: 'center',
    marginBottom: 16,
  },
  cellPhoneInfoBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  telecom: {
    marginRight: 10,
    color: '#666666',
  },
  textColor: {
    color: '#666666',
  },
  userInfoBtnBox: {
    flexDirection: 'row',
  },
  userInfoBtnText: {
    color: '#2D63E2',
  },
  reAuthBtnBorder: {
    borderColor: '#2D63E2',
    marginRight: 8,
  },
  logoOutBtnBorder: {
    borderColor: '#2D63E2',
  },
});
