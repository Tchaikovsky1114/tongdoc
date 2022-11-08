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
        <Pressable onPress={onMoveSignupScreenHandler} style={({pressed}) => [styles.moveSignupButton,{backgroundColor: pressed ? 'rgba(200,255,255,0.2)' : 'rgb(45, 99, 226)'}]}>
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
    backgroundColor:'#2D63E2',
  },
  moveSignupButton:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:58
  },
  moveSignupButtonText:{
    fontFamily:'Noto500',
    color:'#fff',
    fontSize:17
  },
})
