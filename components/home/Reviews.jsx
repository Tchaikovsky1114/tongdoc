import { StyleSheet, Image, View, Dimensions } from 'react-native';
import React from 'react';
import P_18M from '../../style/paragraph/P_18M';
import ReviewCarousel from './ReviewCarousel';

/**
 * 메인페이지의 통신비 진단 및 구매 후기 페이지입니다.
 * Carousel을 갖고 있습니다.
 */
 const Reviews = () => {

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.title}>
          <P_18M style={{ color: '#333333' }}>통신비 진단 및 구매 후기</P_18M>
          <Image
            style={{ width: 23, height: 22.5 }}
            source={require('../../assets/common/graynextarrow.png')}
          />
        </View>
        <ReviewCarousel />
      </View>
    </View>
  );
}

export default React.memo(Reviews);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    marginBottom: 73,
  },
  inner: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
});
