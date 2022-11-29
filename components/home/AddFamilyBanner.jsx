import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import P_12R from '../../style/paragraph/P_12R';

export default function AddFamilyBanner({ onPress }) {
  return (
    <View style={styles.container}>
      <P_12R style={{ color: '#333333' }}>
        아직 등록된 가족이 없으시네요. {'\n'} 가족 통신비도 진단 받고 할인
        혜택을 확인해 보세요!
      </P_12R>
      <Pressable style={styles.closeBox} onPress={onPress}>
        <Image
          style={styles.closeImage}
          source={require('../../assets/common/grayclose.png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    borderRadius: 16,
    borderColor: '',
    backgroundColor: '#F6F9FF',
    paddingHorizontal: 16,
    height: 66,
    justifyContent: 'center',
    marginBottom: 16,
    // marginTop: -31,
  },
  closeBox: {
    position: 'absolute',
    right: 16,
  },
  closeImage: {
    width: 16,
    height: 16,
  },
});
