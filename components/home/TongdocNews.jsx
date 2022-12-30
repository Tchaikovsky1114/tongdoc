import { StyleSheet, Image, View, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import P_18M from '../../style/paragraph/P_18M'
import P_14M from '../../style/paragraph/P_14M'
import { useNavigation } from '@react-navigation/native'

/**
 * 메인페이지의 통닥 소식 베너입니다.
 * 클릭시 고객센터 - 공지사항 페이지로 이동합니다.
 */
const TongdocNews = ({mainConfiguringData}) => {
  const {doctor: { news }} = mainConfiguringData;
  const navigation = useNavigation();

  const moveToNoticePageHandler = useCallback(() => {
    navigation.navigate('Notice');
  },[])

  return (
    <View style={styles.container}>
      <Pressable onPress={moveToNoticePageHandler} style={({pressed}) => pressed ? styles.pressedButton : styles.inner}>
        <View style={styles.newsHeaderBox}>
      <P_18M style={{color:'#fff'}}>통닥 소식</P_18M>
      <Image style={{width:23,height:22}} source={require('../../assets/common/whitenextarrow.png')} />
        </View>
        <View style={styles.newsContentBox}>
          <Image style={{width:40,height:40}} source={require('../../assets/home/notice.png')} />
          <P_14M style={styles.newsContent}>{news[0]?.contents}</P_14M>
        </View>
      </Pressable>
    </View>
  )
}
export default React.memo(TongdocNews);

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderRadius:16,
    marginTop:16
  },
  pressedButton:{
    flex:1,
    backgroundColor:'#4469c7',
    borderRadius:16,
    paddingHorizontal:16,
    paddingVertical:24
  },
  inner:{
    flex:1,
    backgroundColor:'#3A58A6',
    borderRadius:16,
    paddingHorizontal:16,
    paddingVertical:24
  },
  newsHeaderBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  newsContentBox:{
    alignItems:'center',
    marginTop:18
  },
  newsContent:{
    color:'#fff',
    marginTop:8
  }
})