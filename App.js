import { useEffect, useState, useCallback, useRef } from 'react';
import { View, Image, Dimensions, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { RecoilRoot } from 'recoil';

import 'react-native-gesture-handler';

import 'expo-dev-client';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Notification from 'expo-notifications';

import Splash from './components/Splash';
import OnBoarding from './components/onboarding/OnBoarding';
import HomeScreen from './screens/HomeScreen';
import SignupPage from './screens/SignupPage';
import SigninPage from './screens/SigninPage';
import EmailAndPassword from './components/signup/EmailAndPassword';
import CertificationScreen from './screens/CertificationScreen';
import CertificationResult from './components/certification/CertificationResult';
import CertificationInProgress from './components/certification/CertificationInProgress';
import ChoiceSignMethod from './components/signup/ChoiceSignMethod';
import FindInfoPage from './screens/FindInfo';
import Welcome from './components/signup/Welcome';
import DiagnosisScreen from './screens/DiagnosisScreen';
import PurchaseMobileScreen from './screens/PurchaseMobileScreen';
import CustomServiceScreen from './screens/CustomServiceScreen';
import MyPageScreen from './screens/MyPageScreen';
import PersonSvg from './components/common/svg/PersonSvg';

import InternetRegistration from './components/diagnosis/internetRegistration/InternetRegistration';
import DetailInternet from './components/diagnosis/detail/DetailInternet';
import BackButton from './components/common/BackButton';
import Notice from './components/customservice/notice/Notice';
import Inquiry from './components/customservice/Inquiry';
import AddInternet from './components/diagnosis/AddInternet';
import AboutUs from './components/customservice/AboutUs';
import NoticeDetail from './components/customservice/notice/NoticeDetail';
import InquiryDetail from './components/customservice/inquiry/InquiryDetail';
import MyPageCertification from './components/myPage/page/MyPageCertification';
import AddFamily from './components/diagnosis/AddFamily';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import P_14R from './style/paragraph/P_14R';
import { navigate, navigationRef } from './RootNavigation';
import MyPageChangePW from './components/myPage/page/MyPageChangePW';
import MyPage from './components/myPage/MyPage';
import * as Linking from 'expo-linking';
import H3_26M from './style/H3_26M';

// 프로덕션 모드 kr.co.tongdoc://...
// 디밸롭 모드 exp://101.111.134.45:19000 ...
const prefix = Linking.createURL('/');

const toastConfig = {
  /* 기본토스트 */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink', backgroundColor: 'rgba(0,0,0,0.6)' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontFamily: 'Noto400',
      }}
    />
  ),
  /* 에러토스트 */
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
        fontFamily: 'Noto400',
      }}
      text2Style={{
        fontSize: 15,
        fontFamily: 'Noto400',
      }}
    />
  ),

  /* 커스텀 토스트 */
  refreshToast: ({ text1 }) => (
    <View
      style={{
        height: 60,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <P_14R style={{ color: '#fff', textAlign: 'center' }}>{text1}</P_14R>
    </View>
  ),
};

enableScreens();
const Stack = createNativeStackNavigator();

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let imageSource;

          if (route.name === 'Main') {
            imageSource = focused
              ? require('./assets/bottom-tabs/activehome.png')
              : require('./assets/bottom-tabs/home.png');
          }
          if (route.name === 'Diagnosis') {
            imageSource = focused
              ? require('./assets/bottom-tabs/activediagnosis.png')
              : require('./assets/bottom-tabs/diagnosis.png');
          }
          if (route.name === 'CustomService') {
            imageSource = focused
              ? require('./assets/bottom-tabs/activecs.png')
              : require('./assets/bottom-tabs/cs.png');
          }
          if (route.name === 'PurchaseMobile') {
            imageSource = focused
              ? require('./assets/bottom-tabs/activepurchasemobile.png')
              : require('./assets/bottom-tabs/purchasemobile.png');
          }
          if (route.name === 'MyPage') {
            focused ? <PersonSvg focused /> : <PersonSvg />;
          }
          return route.name !== 'Mypage' ? (
            <Image
              source={imageSource}
              resizeMode="contain"
              style={{ width: 24, height: 22 }}
            />
          ) : (
            <PersonSvg focused={focused} />
          );
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Noto400',
          fontSize: 10,
          padding: 0,
          includeFontPadding: false,
          textAlignVertical: 'top',
        },
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
        },

        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 5,
          paddingBottom: 15,
          height: 70,
        },
        tabBarIconStyle: {
          alignContent: 'center',
          justifyContent: 'center',
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          title: '홈',

          header: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 40,
                paddingHorizontal: 16,
                backgroundColor: '#fff',
              }}
            >
              <Image
                style={{ width: 94, height: 24 }}
                source={require('./assets/common/logo.png')}
              />
              <Image
                style={{ width: 24, height: 24 }}
                source={require('./assets/common/bell.png')}
              />
            </View>
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Diagnosis"
        component={DiagnosisScreen}
        options={{
          title: '통신비 진단',
          headerTitleAlign: 'center',
          headerShown: true,

          headerLeft: () => (
            <View>
              <BackButton />
            </View>
          ),
          headerRight: () => (
            <View>
              <Image
                style={{ width: 24, height: 24 }}
                source={require('./assets/common/bell.png')}
              />
            </View>
          ),
          headerTitle: '통신비 진단 결과',
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'Noto500',
            color: '#333',
            includeFontPadding: false,
          },
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },

          headerRightContainerStyle: {
            paddingRight: 16,
          },
        }}
      />

      <Tab.Screen
        name="PurchaseMobile"
        component={PurchaseMobileScreen}
        options={{ title: '휴대폰 구매' }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert('현재 서비스 준비 중인 페이지입니다.', '', [
              {
                text: '확인',
              },
            ]);
          },
        }}
      />
      <Tab.Screen
        name="CustomService"
        component={CustomServiceScreen}
        options={{
          title: '고객센터',
          headerTitle: '고객센터',
          headerTitleAlign: 'center',
          headerShown: true,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'Noto500',
            color: '#333',
            includeFontPadding: false,
          },
          headerLeft: () => <BackButton />,

          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
          headerRightContainerStyle: {
            paddingRight: 16,
          },
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MyPageScreen}
        options={{
          title: '마이페이지',
          headerTitleAlign: 'center',
          headerShown: true,

          headerLeft: () => (
            <View>
              <BackButton />
            </View>
          ),
          headerRight: () => (
            <View>
              <Image
                style={{ width: 24, height: 24 }}
                source={require('./assets/common/bell.png')}
              />
            </View>
          ),
          headerTitle: '마이페이지',
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'Noto500',
            color: '#333',
            includeFontPadding: false,
          },
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },

          headerRightContainerStyle: {
            paddingRight: 16,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, []);

  useEffect(() => {
    notificationListener.current = Notification.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    responseListener.current =
      Notification.addNotificationResponseReceivedListener((response) => {
        // const notificationType = response.notification.request.content.data.messageType;
        // if(notificationType === 'inboundEmail'){
        //   navigate('Mypage');
        // }
        // if(notificationType === 'sendInquiry'){
        //   navigate('CustomService/Inquiry');
        // }
      });

    return () => {
      Notification.removeNotificationSubscription(notificationListener.current);
      Notification.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Noto900: require('./assets/fonts/NotoSansKR-Black.otf'),
          Noto700: require('./assets/fonts/NotoSansKR-Bold.otf'),
          Noto500: require('./assets/fonts/NotoSansKR-Medium.otf'),
          Noto400: require('./assets/fonts/NotoSansKR-Regular.otf'),
          Noto300: require('./assets/fonts/NotoSansKR-Thin.otf'),
        });
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
      console.log('fonts loaded');
    }
    prepare();
  }, []);

  if (!appIsReady) return <View></View>;

  return (
    <RecoilRoot>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        {/* NavigationContainer의 linking props에는 prefixes와 config를 포함해야 한다. */}
        <NavigationContainer
          linking={{
            prefixes: [prefix],
            config: {
              initialRouteName: 'Main',
              screens: {
                HomeScreen: {
                  screens: {
                    MyPageScreen: 'mypage',
                    Inquiry: 'myinquiry',
                  },
                },
              },
            },

            async getInitialURL() {
              let url = await Linking.getInitialURL();
              if (url != null) {
                return url;
              }
              const response =
                await Notification.getLastNotificationResponseAsync();
              url = response?.notification.request.content.data.url;
              return null;
            },

            subscribe(listener) {
              const onReceiveURL = ({ url }) => listener(url);
              Linking.addEventListener('url', onReceiveURL);

              const subscription =
                Notification.addNotificationResponseReceivedListener(
                  (response) => {
                    const url = response?.notification.request.content.data.url;

                    // const notificationType = response.notification.request.content.data.messageType;
                    // if(notificationType === 'inboundEmail'){
                    //   listener(prefix + 'home');
                    //   listener(url);
                    // }
                    // if(notificationType === 'sendInquiry'){
                    //   listener(prefix + 'home');
                    //   listener(url);
                    // }

                    listener(url);
                  }
                );
              return () => {
                //
                subscription.remove();
              };
            },
          }}
          // fallback={<H3_26M>잠시만 기다려주세요...</H3_26M>}
          ref={navigationRef}
        >
          <Stack.Navigator
            screenOptions={{
              animation: 'slide_from_right',
              headerShadowVisible: false,
              headerBackImageSource: require('./assets/common/back_arrow.png'),
              headerShown: false,
            }}
          >
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="OnBoarding" component={OnBoarding} />
            </Stack.Group>

            <Stack.Screen
              name="Home"
              component={BottomTabs}
              options={{ title: '', headerShown: false }}
            />

            {/* <Stack.Screen name="Diagnosis" component={DiagnosisScreen} /> */}

            <Stack.Screen
              name="Diagnosis/AddFamily"
              component={AddFamily}
              options={{ title: '', headerShown: true }}
            />
            <Stack.Screen
              name="Diagnosis/AddInternet"
              component={AddInternet}
              options={{ title: '', headerShown: true }}
            />
            <Stack.Screen
              name="Diagnosis/internetRegistration"
              component={InternetRegistration}
              options={{ title: '', headerShown: true }}
            />

            <Stack.Screen
              name="Diagnosis/detailInternet"
              component={DetailInternet}
              options={{ title: '', headerShown: true }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupPage}
              options={{
                title: '',
                headerShown: true,
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="Signup/Certification"
              component={CertificationScreen}
              options={{ title: '', headerShown: true }}
            />
            <Stack.Screen
              name="Signup/ChoiceSignMethod"
              component={ChoiceSignMethod}
              options={{ title: '', headerShown: true }}
            />
            <Stack.Screen
              name="Signup/CertificationInProgress"
              component={CertificationInProgress}
              options={{ title: '', headerShown: true }}
            />
            <Stack.Screen
              name="Signup/CertificationResult"
              component={CertificationResult}
              options={{ title: '', headerShown: true }}
            />
            <Stack.Screen
              name="Signup/EmailAndPassword"
              component={EmailAndPassword}
              options={{ title: '', headerShown: true }}
            />
            <Stack.Screen
              name="Signup/Welcome"
              component={Welcome}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="Signin"
              component={SigninPage}
              options={{
                title: '',
                headerBackVisible: false,
                headerShown: true,
              }}
            />

            <Stack.Screen
              name="Signin/FindInfo"
              component={FindInfoPage}
              options={{ title: '', headerShown: true }}
            />
            <Stack.Screen
              name="CustomService/Notice"
              component={Notice}
              options={{
                headerShown: true,
                title: '',
              }}
            />
            <Stack.Screen
              name="Notice/Details"
              component={NoticeDetail}
              options={{
                headerShown: true,
                title: '',
              }}
            />

            <Stack.Screen
              name="CustomService/Inquiry"
              component={Inquiry}
              options={{
                headerShown: true,
                title: '',
              }}
            />
            <Stack.Screen
              name="Inquiry/Details"
              component={InquiryDetail}
              options={{
                headerShown: true,
                title: '',
              }}
            />

            <Stack.Screen
              name="CustomService/AboutUs"
              component={AboutUs}
              options={{
                headerShown: true,
                title: '',
              }}
            />
            {/* 임시 테스트 마이페이지 */}
            {/* <Stack.Screen
              name="MyPage"
              component={MyPage}
              options={{
                headerShown: true,
                title: '',
                headerBackVisible: false,
                headerBackTitleVisible: false,
                headerLeft: () => <BackButton />,
                headerStyle: {
                  shadowColor: 'transparent',
                  elevation: 0,
                },
              }}
            /> */}
            <Stack.Screen
              name="MyPage/Certification"
              component={MyPageCertification}
              options={{
                headerShown: true,
                title: '',
                headerBackVisible: false,
                headerBackTitleVisible: false,
                headerLeft: () => <BackButton />,
                headerStyle: {
                  shadowColor: 'transparent',
                  elevation: 0,
                },
              }}
            />
            <Stack.Screen
              name="MyPage/MyPageChangePW"
              component={MyPageChangePW}
              options={{
                headerShown: true,
                title: '',
                headerBackVisible: false,
                headerBackTitleVisible: false,
                headerLeft: () => <BackButton />,
                headerStyle: {
                  shadowColor: 'transparent',
                  elevation: 0,
                },
              }}
            />
            {/* 1차에서 제외 
             <Stack.Screen
              name="MyPage/Notification"
              component={MyPageNotification}
              options={{
                headerShown: true,
                title: '',
                headerBackVisible: false,
                headerBackTitleVisible: false,
                headerLeft: () => <BackButton />,
                headerStyle: {
                  shadowColor: 'transparent',
                  elevation: 0,
                },
              }}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
        <Toast config={toastConfig} />
      </View>
    </RecoilRoot>
  );
}
