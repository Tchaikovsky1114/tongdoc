import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function CustomServiceScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    Alert.alert(
      "현재 서비스 준비 중인 페이지입니다.",
      '',
      [
        {
          text:'홈으로 이동하기',
          onPress: () => navigation.navigate('Main'),
        }
      ]
    );
    
  },[])
  return (
    <View style={styles.container}>
      
    </View>
  )
}

const styles = StyleSheet.create({
  marginTop:50,
  flex:1,
  backgroundColor:'#fff'
})