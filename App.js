import { useEffect, useState, useCallback } from 'react';
import {
  View,
  Pressable,
  Image,
  Text,
  Dimensions,
  BackHandler,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { RecoilRoot } from 'recoil';

import 'react-native-gesture-handler';

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
import TestPage from './screens/Test';

import PurchaseMobileScreen from './screens/PurchaseMobileScreen';
import CustomServiceScreen from './screens/CustomServiceScreen';
import MyPageScreen from './screens/MyPageScreen';
import PersonSvg from './components/common/svg/PersonSvg';
import FamilyRegistrationScreen from './components/diagnosis/familyRegistraion/FamilyRegistration';
import InternetRegistration from './components/diagnosis/internetRegistration/InternetRegistration';
enableScreens();
const Stack = createNativeStackNavigator();

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const { width } = Dimensions.get('window');

const handleBackButton = () => {
  BackHandler.exitApp();
  return true;
};

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
        // headerLeft:'',
        // headerRight:'',
        // headerTitle:'',
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Noto400',
          fontSize: 10,
        },
        tabBarStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 72,
        },
        tabBarIconStyle: {
          marginBottom: -20,
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{ title: '홈' }}
      />
      <Tab.Screen
        name="Diagnosis"
        component={DiagnosisScreen}
        listeners={{
          focus: () =>
            BackHandler.addEventListener('hardwareBackPress', handleBackButton),
          blur: () =>
            BackHandler.removeEventListener(
              'hardwareBackPress',
              handleBackButton
            ),
        }}
        options={{
          title: '통신비 진단',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="PurchaseMobile"
        component={PurchaseMobileScreen}
        options={{ title: '휴대폰 구매' }}
      />
      <Tab.Screen
        name="CustomService"
        component={CustomServiceScreen}
        options={{ title: '고객센터' }}
      />
      <Tab.Screen
        name="Mypage"
        component={MyPageScreen}
        options={{ title: '마이페이지' }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
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
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: 'slide_from_right',
              headerShadowVisible: false,
              headerBackImageSource: require('./assets/common/back_arrow.png'),
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
            <Stack.Screen
              name="Diagnosis"
              component={DiagnosisScreen}
              options={{
                title: '통신비 진단',
              }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupPage}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="Signup/Certification"
              component={CertificationScreen}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="Signup/ChoiceSignMethod"
              component={ChoiceSignMethod}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="Signup/CertificationInProgress"
              component={CertificationInProgress}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="Signup/CertificationResult"
              component={CertificationResult}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="Signup/EmailAndPassword"
              component={EmailAndPassword}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="Signup/Welcome"
              component={Welcome}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="Signin"
              component={SigninPage}
              options={{ title: '', headerBackVisible: false }}
            />

            <Stack.Screen
              name="TestPage"
              component={TestPage}
              options={{ title: '', headerBackVisible: false }}
            />
            <Stack.Screen
              name="Diagnosis/familyRegistration"
              component={FamilyRegistrationScreen}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="Diagnosis/internetRegistration"
              component={InternetRegistration}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="Signin/FindInfo"
              component={FindInfoPage}
              options={{ title: '' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </RecoilRoot>
  );
}
