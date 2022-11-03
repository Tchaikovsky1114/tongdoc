import { useState,useEffect } from 'react';
import { StyleSheet, View, Text, Modal,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import OnBoarding from './components/onboarding/OnBoarding';
import useLoadFonts from './hooks/useLoadFonts';
import SignupPage from './screens/SignupPage';
import HomeScreen from './screens/HomeScreen';
import Screens from './screens/Screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens'
import Splash from './components/Splash';
enableScreens();
const Stack = createNativeStackNavigator();


export default function App() {

  const {onLayoutRootView,appIsReady} = useLoadFonts()
  const [isSplashShow,setIsSplashShow] = useState(true)
  
  useEffect(() => {
    onLayoutRootView()
  },[])


  if(!appIsReady) return (<View><Text>Loading....</Text></View>)

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} /> 
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Signup" component={SignupPage} />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
  );
  }
