import { StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';
import ImageButton from '../common/ImageButton';
import { useNavigation } from '@react-navigation/native';

 const CustomService = () => {
  const navigation = useNavigation();

  const moveToPageHandler = (destination) => {
    navigation.navigate(destination);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.tabsList}>
            <ImageButton
              onPress={() => moveToPageHandler('Notice')}
              buttonText="공지사항"
              pressedColor="#F6F9FF"
              imageURL={require('../../assets/common/nextarrow.png')}
              imageStyle={{ height: 24, width: 24 }}
              textStyle={{ color: '#333' }}
              buttonStyle={{
                paddingBottom: 8,
                paddingTop: 24,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}
            />
            <ImageButton
              onPress={() => moveToPageHandler('Inquiry')}
              buttonText="1:1 문의"
              pressedColor="#F6F9FF"
              imageURL={require('../../assets/common/nextarrow.png')}
              imageStyle={{ height: 24, width: 24 }}
              textStyle={{ color: '#333' }}
              buttonStyle={{
                paddingBottom: 8,
                paddingTop: 24,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}
            />
            <ImageButton
              onPress={() => moveToPageHandler('AboutUs')}
              buttonText="회사소개"
              pressedColor="#F6F9FF"
              imageURL={require('../../assets/common/nextarrow.png')}
              imageStyle={{ height: 24, width: 24 }}
              textStyle={{ color: '#333' }}
              buttonStyle={{
                paddingBottom: 8,
                paddingTop: 24,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(CustomService);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  talkImage: {
    width: 120,
    height: 90,
  },
  infoTextBox: {
    marginTop: 24,
  },
  detailInfoText: {
    color: '#666',
    marginTop: 8,
  },
  tabsList: {},
});
