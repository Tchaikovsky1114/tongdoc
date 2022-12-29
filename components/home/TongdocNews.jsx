import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import P_18M from '../../style/paragraph/P_18M'
import P_14M from '../../style/paragraph/P_14M'

const TongdocNews = ({mainConfiguringData}) => {

  const {doctor: { news }} = mainConfiguringData;

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.newsHeaderBox}>
      <P_18M style={{color:'#fff'}}>통닥 소식</P_18M>
      <Image style={{width:23,height:22}} source={require('../../assets/common/whitenextarrow.png')} />
        </View>
        <View style={styles.newsContentBox}>
          <Image style={{width:40,height:40}} source={require('../../assets/home/notice.png')} />
          <P_14M style={styles.newsContent}>{news[0]?.contents}</P_14M>
        </View>
      </View>
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