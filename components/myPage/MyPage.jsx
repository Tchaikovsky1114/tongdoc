import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';
import axios from 'axios';
import P_12R from '../../style/paragraph/P_12R';
import P_14M from '../../style/paragraph/P_14M';
import HandlerBtn from './myPageCommon/HandlerBtn';
import MyPageTab from './myPageCommon/MyPageTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DoubleCheckModal from './myPageCommon/DoubleCheckModal';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import LoadingIndicator from '../common/LoadingIndicator';

const MyPage = () => {
  const [logoutModalIsVisible, setLogoutModalIsVisible] = useState(false);
  const [quitModalIsVisible, setQuitModalIsVisible] = useState(false);
  const [userInfo, setUserInfo] = useState();
  // const userInfo = useRecoilValue(loggedUserState);
  // const version = Constants.manifest2.extra.expoClient.version;

  const { version } = Constants.expoConfig;

  const navigation = useNavigation();
  const logoOut = async () => {
    const keys = ['refresh', 'access'];
    try {
      await AsyncStorage.multiRemove(keys);
      setLogoutModalIsVisible((prev) => !prev);
      navigation.navigate('Signin');
    } catch (error) {
      console.log(error);
    }
  };
  const quitService = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      await axios.delete('https://api.tongdoc.co.kr/v1/user', {
        headers: {
          accept: '*/*',
          Authorization: `Bearer ${token}`,
        },
      });
      setQuitModalIsVisible((prev) => !prev);
      navigation.navigate('Signin');
    } catch (err) {
      console.log(err);
    }
  };

  const logoutModalHandler = () => {
    setLogoutModalIsVisible((prev) => !prev);
  };
  const quitModalHandler = () => {
    setQuitModalIsVisible((prev) => !prev);
  };
  
  const getUserInfo = async () => {
    const token = await AsyncStorage.getItem('access');
    try {
      const { data } = await axios.get('https://api.tongdoc.co.kr/v1/user', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <View>
      {userInfo ? (
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
              onPress={logoutModalHandler}
            >
              로그아웃
            </HandlerBtn>
          </View>
        </View>
      ) : (
        <LoadingIndicator />
      )}
      <ScrollView>
        <KeyboardAvoidingView>
          <MyPageTab url={'MyPageCertification'} image={true}>
            이용약관
          </MyPageTab>
          {/* 1차에서 제외 */}
          {/* <MyPageTab url={'Notification'} image={true}>
            알림설정
          </MyPageTab> */}
          <MyPageTab image={true} url={'MyPageChangePW'}>
            비밀번호 변경
          </MyPageTab>
          <MyPageTab version={version ? version : '1.7.1'}>앱정보</MyPageTab>
          <MyPageTab quit={true} modalHandler={quitModalHandler}>
            탈퇴하기
          </MyPageTab>
        </KeyboardAvoidingView>
      </ScrollView>
      <DoubleCheckModal
        isVisible={logoutModalIsVisible}
        firstInfoText={'정말 로그아웃 하시겠습니까?'}
        pressBtnCancel={logoutModalHandler}
        pressBtnConfirm={logoOut}
      />
      <DoubleCheckModal
        isVisible={quitModalIsVisible}
        firstInfoText={'정말 탈퇴하시겠습니까?'}
        pressBtnCancel={quitModalHandler}
        pressBtnConfirm={quitService}
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
