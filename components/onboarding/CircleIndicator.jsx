import React from 'react';
import { StyleSheet, View, Pressable,Dimensions } from 'react-native';



const CircleIndicator = ({ item, pressScrollXHandler }) => {
  return (
    <View style={styles.circleIndicator}>
      <Pressable onPress={() => pressScrollXHandler(0)}>
        <View
          style={[
            styles.circle,
            item.num < 1 ? styles.nextCircle : styles.circle,
            item.num === 1 && styles.activeCircle,
          ]}
        ></View>
      </Pressable>
      <Pressable onPress={() => pressScrollXHandler(1)}>
        <View
          style={[
            styles.circle,
            item.num < 2 ? styles.nextCircle : styles.circle,
            item.num === 2 && styles.activeCircle,
          ]}
        ></View>
      </Pressable>
      <Pressable onPress={() => pressScrollXHandler(2)}>
        <View
          style={[
            styles.circle,
            item.num < 3 ? styles.nextCircle : styles.circle,
            item.num === 3 && styles.activeCircle,
          ]}
        ></View>
      </Pressable>
      <Pressable onPress={() => pressScrollXHandler(3)}>
        <View
          style={[
            styles.circle,
            item.num < 4 ? styles.nextCircle : styles.circle,
            item.num === 4 && styles.activeCircle,
          ]}
        ></View>
      </Pressable>
    </View>
  );
};

export default CircleIndicator;

const styles = StyleSheet.create({
  circleIndicator: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop: -144,
    marginRight: 28
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#DDDDDD',
    marginLeft: 24,
  },
  activeCircle: {
    backgroundColor: '#2D63E2',
  },
  nextCircle: {
    backgroundColor: '#666666',
  },
});
