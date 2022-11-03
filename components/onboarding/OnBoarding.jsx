import React,{useEffect} from 'react';
import OnboardingCarousel from './OnBoardingCarousel';
import {Text,View,StyleSheet,Dimensions,Pressable} from 'react-native';


const {width} = Dimensions.get('window')

const OnBoarding = ({navigation}) => {

  const onMoveSignupScreenHandler = () => {
    navigation.navigate('Signup');
  }

  // onboarding에서 유저가 어플리케이션 실행 이력이 있는 경우(asyncStorage에 접속 이력) main page로 redirecting..
  return (
    
    <View style={styles.container}>
      <OnboardingCarousel />
      <View style={styles.moveSignupButtonBox}>
        <Pressable onPress={onMoveSignupScreenHandler}>
          <View style={styles.moveSignupButton}>
            <Text style={styles.moveSignupButtonText}>시작하기</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  moveSignupButtonBox: {
    flex:1,
    width,
    position:'absolute',
    bottom:0,
    left:0,
    
  },
  moveSignupButton:{
    flex:1,
    backgroundColor:'#2D63E2',
    justifyContent:'center',
    alignItems:'center',
    height:50
  },
  moveSignupButtonText:{
    fontFamily:'Noto400',
    color:'#fff',
  },
})
