import { useEffect, useState, useCallback } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import OnBoarding from "./components/onboarding/OnBoarding";
import SignupPage from "./screens/SignupPage";
import SigninPage from "./screens/SigninPage";
import HomeScreen from "./screens/HomeScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import Splash from "./components/Splash";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as Notification from "expo-notifications";
import "react-native-gesture-handler";
import CertificationScreen from "./screens/CertificationScreen";
import CertificationResult from "./components/certification/CertificationResult";
import CertificationInProgress from "./components/certification/CertificationInProgress";
import { RecoilRoot } from "recoil";
import ChoiceSignMethod from "./components/signup/ChoiceSignMethod";
import FindMailPage from "./screens/FindMail";
import FindPwPage from "./screens/FindPw";

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
            }}
          >
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "" }}
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
              name="Signin"
              component={SigninPage}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Signin/FindMail"
              component={FindMailPage}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Signin/FindPw"
              component={FindPwPage}
              options={{ title: "" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </RecoilRoot>
  );
}
