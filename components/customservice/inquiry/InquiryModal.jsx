import { Dimensions,StyleSheet, View,TextInput,Modal, Pressable, Alert, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import ImageButton from '../../common/ImageButton'
import P_16R from '../../../style/paragraph/P_16R'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import P_14R from '../../../style/paragraph/P_14R';
import ConfirmInquiryModal from './ConfirmInquiryModal'

const { width } = Dimensions.get('window');

export default function InquiryModal({isInquiryModalVisible,showInquiryModalHandler}) {
  const navigation = useNavigation()
  const [isTitleBorderHighlight,setIsTitleBorderHighlight] = useState(false)
  const [isAlertModalVisible,setIsAlertModalVisible] = useState(false)
  const [inquiryValues,setInquiryValues] = useState({
    subject:'',
    contents:''
  })

  const onChangeTextHandler = (name,text) => {
    if(inquiryValues.contents.length > 299){
      const limitword = inquiryValues.contents.split('')
      limitword.pop()
      setInquiryValues(prev => ({
        ...prev,
        contents:limitword.join('')
      }))
      return;
    }
      setInquiryValues((prev) => ({
        ...prev,
        [name]:text
      }))
  }

  const postInquiryHandler = async () => {
      const token = await AsyncStorage.getItem('access');
      const {subject,contents} = inquiryValues;
      if(subject.length < 10 || contents.length < 10){
        Alert.alert(
          '제목과 내용은 10자 이상이어야 해요',
          '',
          [
            {
              text:'확인',
              onPress: () => null
            }
          ])
          return;
      }
        try {
          await axios.post('https://api.tongdoc.co.kr/v1/info/question',{
            subject,
            contents
          },{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
          showInquiryModalHandler()
          navigation.navigate('CustomService')
        } catch (error) {
          console.error(error);
        }
      }
  
  return (
<>
    { isAlertModalVisible && <ConfirmInquiryModal onRequestClose={() => setIsAlertModalVisible(prev => !prev)} postInquiryHandler={postInquiryHandler} />}
    
  <Modal
    animationType='slide'
    transparent={true}
    visible={isInquiryModalVisible}
    onRequestClose={showInquiryModalHandler}
  >
    <ScrollView contentContainerStyle={styles.scrollViewBox}>  
      <View style={styles.container}>
        <View style={styles.closeBox}>
          <ImageButton
          onPress={showInquiryModalHandler}
          buttonStyle={styles.closeButton}
          imageStyle={{width:24,height:24}}
          imageURL={require('../../../assets/common/close.png')}
          />
        </View>

        <View style={[styles.titleBox,{borderBottomColor:isTitleBorderHighlight ? '#2D63E2':'#ddd'}]}>
          <TextInput
            style={styles.input}
            cursorColor="#2D63E2"
            placeholder='제목을 입력해 주세요.'
            value={inquiryValues.subject}
            onChangeText={(text) => onChangeTextHandler('subject',text)}
            onFocus={() => setIsTitleBorderHighlight(true)}
            onBlur={() => setIsTitleBorderHighlight(false)}
          />
        </View>

        <View style={styles.contentBox}>
          <TextInput
            style={[styles.input,styles.contentInput]}
            cursorColor="#2D63E2"
            value={inquiryValues.contents}
            onChangeText={(text) => onChangeTextHandler('contents',text)}
            multiline
            numberOfLines={20}
            textAlignVertical="top"
            scrollEnabled
            placeholder='문의 내용을 입력해 주세요.' />
        </View>
        <View style={styles.footer}>
          <P_14R style={{
            color: inquiryValues.contents.length < 295 ? '#2D63E2' : 'red',
            marginBottom:24,
            textAlign:'right',
            paddingRight:24
            }}>
            {inquiryValues.contents.length} / 300
          </P_14R>
          <Pressable 
            onPress={() => setIsAlertModalVisible(prev => !prev)} 
            style={({pressed}) => [styles.submitButton,{backgroundColor: pressed ? 'rgba(49,99,226,0.78)' :'#2D63E2'}]}
          >
            <P_16R style={{color:'#fff',textAlign:'center'}}>문의하기</P_16R>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  </Modal>
</>
  )
}

const styles = StyleSheet.create({
  scrollViewBox:{
    position:'relative',
    flex:1,
  },
  container:{
    
    backgroundColor:'#fff',
    flex:1,
    paddingHorizontal:24,
    
  },
  closeBox:{
    alignItems:'flex-end',
    paddingTop:40
  },
  closeButton:{
    width:24,
    height:24,
    justifyContent:'center'
  },
  titleBox:{
    marginTop:40,
    justifyContent:'flex-end',
    borderBottomWidth:1,
    paddingBottom:8,
  },
  contentBox:{
    marginTop:24,
  },
  input:{
    fontFamily:'Noto400',
    paddingLeft:4,
  },
  contentInput:{
    paddingBottom:200
  },
  submitButton:{
    
    width,
    height:58,
    alignItems:'center',
    justifyContent:'center', 
  },
  footer:{
    position:'absolute',
    bottom:0,
  }
})