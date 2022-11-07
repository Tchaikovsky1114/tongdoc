import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { useRecoilState } from 'recoil';
import { signupState } from '../../store/signup';


export default function CertificationResult({route,navigation}) {
  const {params} = route;
  const userInfo = JSON.parse(params.userInfo)
  const [signupForm,setSignupForm] = useRecoilState(signupState)

  console.log(userInfo);
  useEffect(() => {
    setSignupForm(userInfo)
  },[])
  return (
    <View>
    </View>
  )
}

const styles = StyleSheet.create({})