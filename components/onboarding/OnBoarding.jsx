import React, { useCallback, useEffect } from 'react';
import OnboardingCarousel from './OnBoardingCarousel';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  StatusBar,
  SafeAreaView,
} from 'react-native';


const { width } = Dimensions.get('window');


const OnBoarding = ({ navigation }) => {
  
  const onMoveSignupScreenHandler = useCallback(() => {
    navigation.navigate('Signup');
  },[]);



  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <OnboardingCarousel />
        <View style={styles.moveSignupButtonBox}>
          <Pressable
            onPress={onMoveSignupScreenHandler}
            style={({ pressed }) => [
              styles.moveSignupButton,
              {
                backgroundColor: pressed
                  ? 'rgba(200,255,255,0.2)'
                  : 'rgb(45, 99, 226)',
              },
            ]}
          >
            <View style={styles.moveSignupButton}>
              <Text style={styles.moveSignupButtonText}>시작하기</Text>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  moveSignupButtonBox: {
    flex: 1,
    width,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#2D63E2',
  },
  moveSignupButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
  },
  moveSignupButtonText: {
    fontFamily: 'Noto500',
    color: '#fff',
    fontSize: 17,
  },
});
