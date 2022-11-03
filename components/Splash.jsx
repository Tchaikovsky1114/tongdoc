import { StyleSheet, Image, View,Modal } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Splash() {

  const navigation = useNavigation()


  useEffect(() => {
    const timer = setTimeout(() => navigation.navigate('OnBoarding')
    , 2000)
    return () => clearTimeout(timer)
  },[])

  return (
    <Modal>
    <View style={styles.greeting}>
          <Image source={require('../assets/logo.png')} style={styles.splashImage} />
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
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
  splashImage:{
    width:224,
    height:87
  },
  onboarding:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
  }  

})