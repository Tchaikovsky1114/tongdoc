import React from 'react';
import { StyleSheet, View, Pressable,Dimensions } from 'react-native';



const CircleIndicator = ({ pressScrollXHandler,currentPageNumber }) => {
  return (
    <View style={styles.circleIndicator}>
      <Pressable onPress={() => pressScrollXHandler(0)}>
        <View
          style={[
            styles.circle,
            currentPageNumber === 1 && styles.activeCircle,
          ]}
        ></View>
      </Pressable>
      <Pressable onPress={() => pressScrollXHandler(1)}>
        <View
          style={[
            styles.circle,
            currentPageNumber === 2 && styles.activeCircle,
          ]}
        ></View>
      </Pressable>
      <Pressable onPress={() => pressScrollXHandler(2)}>
        <View
          style={[
            styles.circle,
            currentPageNumber === 3 && styles.activeCircle,
          ]}
        ></View>
      </Pressable>
      <Pressable onPress={() => pressScrollXHandler(3)}>
        <View
          style={[
            styles.circle,
            currentPageNumber === 4 && styles.activeCircle,
          ]}
        ></View>
      </Pressable>
    </View>
  );
};

export default CircleIndicator;

const styles = StyleSheet.create({
  circleIndicator: {
    position:'absolute',
    bottom:160,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 14
  },
  activeCircle: {
    backgroundColor: '#2D63E2',
  },
  nextCircle: {
    backgroundColor: '#666666',
  },
});
