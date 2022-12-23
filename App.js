import { useEffect, useState, useCallback, useRef } from 'react';
import { View, Image, Alert, Share, ToastAndroid, Pressable } from 'react-native';

import { getStateFromPath, Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { RecoilRoot } from 'recoil';

import 'react-native-gesture-handler';
import 'expo-dev-client';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Notification from 'expo-notifications';
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WEB_API_KEY } from 'react-native-dotenv';

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

import P_14R from './style/paragraph/P_14R';
import { navigate, navigationRef } from './RootNavigation';
import MyPageChangePW from './components/myPage/page/MyPageChangePW';

import PhoneConditionSelect from './components/purchase/page/PhoneConditionSelect';
import PhoneModelSelect from './components/purchase/page/PhoneModelSelect';


import axios from 'axios';
import dynamicLinks from '@react-native-firebase/dynamic-links'

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

const shareAppWithFriendsHandler = async () => {
  try {
    const payload = {
      dynamicLinkInfo : {
        domainUriPrefix: 'https://tongdoc.page.link',
        link:'https://tongdoc-9a7a9.page.link/mypage',
        androidInfo: {
          androidPackageName: 'kr.co.tongdoc'
        },
        socialMetaTagInfo: {
          socialTitle: '통신닥터',
          socialDescription: '우리집 통신요금 전문의!',
          socialImageLink: 'https://velog.velcdn.com/images/tchaikovsky/post/ab8450da-ff9a-4531-b25b-2320c753f3f0/image.png'
        }
      }
    };
    //f
    const url = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${WEB_API_KEY}`  
    const { data } = await axios.post(
      url,
      payload,
      {
        headers:{
          'Content-Type': 'application/json'
        }
      }
    )
    const result = await Share.share({
      message: data.shortLink,
      url: JSON.shortLink,
      title: '통닥',
    },
    {
      dialogTitle:'통신요금 분석 전문가'
    })
    if(result.action === Share.sharedAction){
      if(result.activityType) {
        console.log(result.activityType)
      }else {
        console.log(result);
      }
    }else if (result.action === Share.dismissedAction){
      ToastAndroid.show('공유를 취소하였습니다',ToastAndroid.SHORT)
    }  
  } catch (error) {
    console.error(error.response.data);
    ToastAndroid.show('링크 공유에 오류가 발생했습니다. 잠시 후 다시 시도해주세요',ToastAndroid.SHORT)
  }
}

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

const Home = () => {
  return (
    <Tab.Navigator
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
              <Pressable onPress={shareAppWithFriendsHandler}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require('./assets/common/bell.png')}
              />
              </Pressable>
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
        options={{
          title: '휴대폰 구매',
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
          headerTitle: '휴대폰 주문 내역',
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
        // listeners={{
        //   tabPress: (e) => {
        //     e.preventDefault();
        //     Alert.alert('현재 서비스 준비 중인 페이지입니다.', '', [
        //       {
        //         text: '확인',
        //       },
        //     ]);
        //   },
        // }}
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

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('access');
    return token ? token : '';
  } catch (error) {

    console.error(`토큰을 가져오는데 실패했습니다.${error.response.message}`)
  }
};




export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  const [notification,setNotification] = useState(false);
  const notificationListener = useRef(null);
  const responseListener = useRef(null); 
  
  const handleOpenURL = (link) => {
    console.log('handleOpenURL',link.url);
    // 앱이 살아 있을때 정상적으로 작동 중 
    if(link.url === 'https://tongdoc-9a7a9.page.link/mypage'){
      navigate('Mypage');
    }
  }
  
  const linking = {
    prefixes: [
      'https://tongdoc-9a7a9.page.link',
      prefix,
      'https://tongdoc-9a7a9.web.app',
      "kr.co.tongdoc://",
      "tongdoc://",
      "https://tongdoc.page.link"],
    config: {
      screens: {
        initialRouteName:'Main',
        Home:{
          screens:{
            Main:'home',
            Diagnosis: 'diagnosis',
            PurchaseMobile: 'purchasemobile',
            CustomService: 'customservice',
            Mypage: 'mypage',
          },
        },
        Inquiry:'inquiry',
        Notice:'notice',
        NoticeDetail:{
          path:'noticedetail',
        },
        AboutUs:'aboutus',
        MyPageChangePW:'changepassword',
        FindInfo:'findinfo',
        MyPageCertification:'mypagecertification',
        OnBoarding:'onboarding',
        // dynamic segment를 사용한다면 아래와 같이 작성
        // NavigateName: {
        // path: 'foo/:slug', 
        // parse: {
        // slug: slug => Number(slug)
        // }
      },
    },
    // async getInitialURL() {
    //   let url = await Linking.getInitialURL();
    //   if(url != null) {
    //     return url;
    //   }
    //   const response = await Notification.getLastNotificationResponseAsync();
    //    url = response?.notification.request.content.data.url;
    //   return url;
    // },
    // subscribe(listener){
    //   const onReceiveURL = ({url}) => listener(url);
    //   Linking.addEventListener('url',onReceiveURL);
    //   const subscription = Notification.addNotificationResponseReceivedListener(response => {
    //     const url = response?.notification.request.content.data.url;
    //     listener(prefix + 'home');
    //     listener(url);
    //   })
      
    //   return () => {
    //     // 
    //     subscription.remove()
    //   }
    // }
  }

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, []);

  useEffect(() => {
    getToken().then((token) => {
      if (!token) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    });
    Linking.addEventListener('url', handleOpenURL);
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
    }
    prepare();
  }, []);

  useEffect(() => {
    // foreground 일 때 발생하는 dynamic Link 처리
    // 앱이 살아 있을때 정상적으로 작동 중 
   const unsubscribe = dynamicLinks().onLink(handleOpenURL);
   return () => unsubscribe();
  }, []);

  useEffect(() => {
    // background,Quit 상태일 때 발생하는 dynamic Link 처리
    dynamicLinks()
      .getInitialLink()
        .then(link => {
          // 백그라운드로 실행시 링크 받는중 https://tongdoc-9a7a9.page.link/mypage          
          // 링크 이동 
            console.log('getInitialLink excuted');
          // if(link && link.url === 'https://tongdoc-9a7a9.page.link/mypage'){  
          // }
        })
  },[])

  if (!appIsReady) return <View></View>;

  return (
    <RecoilRoot>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer
        linking={isLoggedIn && linking}
        // fallback={<H3_26M>잠시만 기다려주세요...</H3_26M>}
        ref={navigationRef}
        >
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              animation: 'slide_from_right',
              headerShadowVisible: false,
              headerBackImageSource: require('./assets/common/back_arrow.png'),
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: '', headerShown: false }}
            />

            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen
              name="AddFamily"
              component={AddFamily}
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
              name="AddInternet"
              component={AddInternet}
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
              name="internetRegistration"
              component={InternetRegistration}
              options={{ title: '', headerShown: true }}
            />

            <Stack.Screen
              name="detailInternet"
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
              name="Certification"
              component={CertificationScreen}
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
              name="ChoiceSignMethod"
              component={ChoiceSignMethod}
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
              name="CertificationInProgress"
              component={CertificationInProgress}
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
              name="CertificationResult"
              component={CertificationResult}
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
              name="EmailAndPassword"
              component={EmailAndPassword}
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
              name="Welcome"
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
              name="FindInfo"
              component={FindInfoPage}
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
              name="Notice"
              component={Notice}
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
              name="NoticeDetails"
              component={NoticeDetail}
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
              name="Inquiry"
              component={Inquiry}
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
              name="InquiryDetails"
              component={InquiryDetail}
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
              name="AboutUs"
              component={AboutUs}
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
              name="MyPageCertification"
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
              name="MyPageChangePW"
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
            <Stack.Screen
              name="PhoneConditionSelect"
              component={PhoneConditionSelect}
              options={{
                headerShown: true,
                title: '휴대폰 모델 선택',
                headerBackVisible: false,
                headerBackTitleVisible: false,
                headerLeft: () => <BackButton />,
                headerStyle: {
                  shadowColor: 'transparent',
                  elevation: 0,
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 16,
                  fontFamily: 'Noto500',
                  color: '#333',
                  includeFontPadding: false,
                },
              }}
            />
            <Stack.Screen
              name="PhoneModelSelect"
              component={PhoneModelSelect}
              options={{
                headerShown: true,
                title: '휴대폰 모델 선택',
                headerBackVisible: false,
                headerBackTitleVisible: false,
                headerLeft: () => <BackButton />,
                headerStyle: {
                  shadowColor: 'transparent',
                  elevation: 0,
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 16,
                  fontFamily: 'Noto500',
                  color: '#333',
                  includeFontPadding: false,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast config={toastConfig} />
      </View>
    </RecoilRoot>
  );
}
