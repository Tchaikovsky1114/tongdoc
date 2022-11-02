import { useState,useEffect } from 'react';
import { StyleSheet, View,Image, Pressable, Modal, Button,Dimensions,Text } from 'react-native';
import OnBoarding from './components/onboarding/OnBoarding';
import useLoadFonts from './hooks/useLoadFonts';

const PAGES = [
  {
    num:1,
    title:'통신비 무료 진단',
    description:'연간 최대 수십만 원까지 \n 절약할 수 있습니다.',
    imageURL:require('./assets/onboarding_img1.png')
  },
  {
    num:2,
    title:'최적의 요금제 추천',
    description:'내 데이터에 딱 맞는 요금제를 \n 추천받습니다.',
    imageURL:require('./assets/onboarding_img2.png')
  },
  {
    num:3,
    title:'더 큰 혜택을 가족과 함께',
    description:'인원이 늘어날수록 \n 할인 혜택도 커집니다.',
    imageURL:require('./assets/onboarding_img3.png')
  },
  {
    num:4,
    title:'매장별 휴대폰 판매 조건 비교',
    description:'주변 매장들의 휴대폰 판매가를 \n 비교 후 구매합니다.',
    imageURL:require('./assets/onboarding_img4.png')
  }
]

const {width} = Dimensions.get('window')

export default function App() {
  const {onLayoutRootView,appIsReady} = useLoadFonts()
  const [isGreetingShow,setGreetingShow] = useState(true)
  


  useEffect(() => {
    const timer = setTimeout(() =>setGreetingShow(false),2000)
    return () => clearTimeout(timer)
  },[])
  
  return (
    
    <View style={[styles.container]} onLayout={onLayoutRootView}>
      {isGreetingShow && 
      <Modal visible={isGreetingShow}>
        <View style={styles.greeting}>
        <Image source={require('./assets/logo.png')} style={styles.splashImage} />
        </View>
      </Modal>
      }
       {!isGreetingShow && <>
       <OnBoarding  pages={PAGES} />

       <View style={styles.moveSignupButtonBox}>
        <Pressable onPress={() => {}}>
          <View style={styles.moveSignupButton}>
          <Text style={styles.moveSignupButtonText}>시작하기</Text>
          </View>
        </Pressable>
       </View>
       </>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    position:'absolute',
    flex: 1,
    backgroundColor: '#2D63E2',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  },
  onboarding:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
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
  splashImage:{
    width:224,
    height:87
  }
});
