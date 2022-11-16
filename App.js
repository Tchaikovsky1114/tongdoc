import { useEffect, useState, useCallback } from "react";
import { View,Pressable,Image,Text,Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { RecoilRoot } from "recoil";

import "react-native-gesture-handler";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as Notification from "expo-notifications";

import Splash from "./components/Splash";
import OnBoarding from "./components/onboarding/OnBoarding";
import HomeScreen from "./screens/HomeScreen";
import SignupPage from "./screens/SignupPage";
import SigninPage from "./screens/SigninPage";
import EmailAndPassword from "./components/signup/EmailAndPassword";
import CertificationScreen from "./screens/CertificationScreen";
import CertificationResult from "./components/certification/CertificationResult";
import CertificationInProgress from "./components/certification/CertificationInProgress";
import ChoiceSignMethod from "./components/signup/ChoiceSignMethod";
import FindInfoPage from "./screens/FindInfo";
import Welcome from "./components/signup/Welcome";
import DiagnosisScreen from './screens/DiagnosisScreen'


const {width} = Dimensions.get('window')


enableScreens();
const Stack = createNativeStackNavigator();

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

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
          Noto900: require("./assets/fonts/NotoSansKR-Black.otf"),
          Noto700: require("./assets/fonts/NotoSansKR-Bold.otf"),
          Noto500: require("./assets/fonts/NotoSansKR-Medium.otf"),
          Noto400: require("./assets/fonts/NotoSansKR-Regular.otf"),
          Noto300: require("./assets/fonts/NotoSansKR-Thin.otf"),
        });
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
      console.log("fonts loaded");
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
              animation: "slide_from_right",
              headerShadowVisible: false,
              headerBackImageSource: require("./assets/common/back_arrow.png"),
            }}
          >
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="OnBoarding" component={OnBoarding} />
            </Stack.Group>

            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "" }}
              
            />
            <Stack.Screen
            name="Diagnosis"
            component={DiagnosisScreen}
            options={{
              headerTitle: () => <View style={{textAlign:'center',width: width - 145,justifyContent:'center',marginHorizontal:'auto'}}>
                <Text style={{fontSize:16,fontFamily:'Noto400',textAlign:'center'}}>통신비 진단 결과</Text></View>,
              headerRight: () => (
              <Pressable onPress={() => {}}>
                <Image style={{width:24,height:24}} source={require('./assets/diagnosis/bell.png')}/>
              </Pressable>
              ),
              headerTitleStyle: {
                
                
              },
              headerStyle:{
                textAlign:'center',
              }
            }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupPage}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Signup/Certification"
              component={CertificationScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Signup/ChoiceSignMethod"
              component={ChoiceSignMethod}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Signup/CertificationInProgress"
              component={CertificationInProgress}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Signup/CertificationResult"
              component={CertificationResult}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Signup/EmailAndPassword"
              component={EmailAndPassword}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Signup/Welcome"
              component={Welcome}
              options={{title:''}}/>
            <Stack.Screen
              name="Signin"
              component={SigninPage}
              options={{ title: "", headerBackVisible: false }}
            />
            <Stack.Screen
              name="Signin/FindInfo"
              component={FindInfoPage}
              options={{ title: "" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </RecoilRoot>
  );
}
