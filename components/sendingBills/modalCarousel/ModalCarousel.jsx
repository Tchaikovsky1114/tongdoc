import { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import P_14M from '../../../style/paragraph/P_14M';
import P_16M from '../../../style/paragraph/P_16M';
import ModalCircleIndicator from './ModalCircleIndicator';

const { width } = Dimensions.get('window');

const ModalCarousel = ({ PAGES, selectBill }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const carouselRef = useRef(null);

  const pressScrollXHandler = (times) => {
    carouselRef.current.scrollTo({ x: (width - 80) * times });
    setCurrentPageNumber(times + 1);
  };

  const scrollHandler = (e) => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = e;
    setCurrentPageNumber(Math.round(x / (width - 80)) + 1);
  };

  useEffect(() => {
    carouselRef.current.scrollTo({ x: 0 });
    setCurrentPageNumber(1);
  }, [selectBill]);

  return (
    <>
      <ScrollView
        style={styles.modalCarousel}
        ref={carouselRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={300}
      >
        {PAGES.map((item, idx) => (
          <View key={item.num}>
            {PAGES.length === idx + 1 ? (
              <View style={styles.modalCarouselLastItem}>
                <View style={styles.modalCarouselLastItemTop}>
                  <P_16M>{item.lastInfoTop.first}</P_16M>
                  <P_16M>{item.lastInfoTop.second}</P_16M>
                </View>
                <View style={styles.modalCarouselLastItemBottom}>
                  <P_14M>{item.lastInfoBottom.first}</P_14M>
                  <P_14M>{item.lastInfoBottom.second}</P_14M>
                </View>
              </View>
            ) : (
              <View style={styles.modalCarouselItem}>
                <>
                  <View style={styles.titleBox}>
                    {item.titleBottom ? (
                      <>
                        <P_16M>{item.titleTop}</P_16M>
                        <P_16M>{item.titleBottom}</P_16M>
                      </>
                    ) : (
                      <P_16M>{item.titleTop}</P_16M>
                    )}
                  </View>
                  <View style={styles.ImgBox}>
                    <Image
                      resizeMode="center"
                      style={styles.img}
                      source={item.imageUrl}
                    />
                  </View>
                </>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorBox}>
        <ModalCircleIndicator
          currentPageNumber={currentPageNumber}
          pressScrollXHandler={pressScrollXHandler}
          PAGES={PAGES}
        />
      </View>
    </>
  );
};

export default ModalCarousel;

const styles = StyleSheet.create({
  modalCarousel: {
    marginBottom: 32,
  },

  modalCarouselLastItem: {
    width: width - 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalCarouselLastItemTop: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  modalCarouselLastItemBottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalCarouselItem: {
    width: width - 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 16,
  },

  ImgBox: {
    width: width - 80,
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '90%',
    flex: 1,
    top: 0,
  },
  indicatorBox: {
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
