
import {useEffect,useState,useCallback} from 'react'
import { StyleSheet, View, Text, Modal,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import OnBoarding from './components/onboarding/OnBoarding';
import SignupPage from './screens/SignupPage';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens'
import Splash from './components/Splash';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

import 'react-native-gesture-handler'

enableScreens();
const Stack = createNativeStackNavigator();


export default function App() {
  const [appIsReady,setAppIsReady] = useState(false)

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
          'Noto900':require('./assets/fonts/NotoSansKR-Black.otf'),
          'Noto700':require('./assets/fonts/NotoSansKR-Bold.otf'),
          'Noto500':require('./assets/fonts/NotoSansKR-Medium.otf'),
          'Noto400':require('./assets/fonts/NotoSansKR-Regular.otf'),
          'Noto300':require('./assets/fonts/NotoSansKR-Thin.otf'),
        });
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
      console.log('fonts loaded');
    }
    prepare();
},[])
  
  if(!appIsReady) return <View></View>

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView} >
      <NavigationContainer >
        <Stack.Navigator screenOptions={{animation:"slide_from_right"}} >
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false,gestureDirection:'horizontal',gestureEnabled:false}}  />
          <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown:false,gestureDirection:'horizontal'}} /> 
          <Stack.Screen name="Home" component={HomeScreen}  />
          <Stack.Screen name="Signup" component={SignupPage} />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
  );
  }
