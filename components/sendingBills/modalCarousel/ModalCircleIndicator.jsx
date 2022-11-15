import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

const ModalCircleIndicator = ({
  pressScrollXHandler,
  currentPageNumber,
  PAGES,
}) => {
  return (
    <View style={styles.circleIndicator}>
      {PAGES.map((item, idx) => (
        <View key={item.num}>
          <Pressable onPress={() => pressScrollXHandler(idx)}>
            <View
              style={[
                styles.circle,
                currentPageNumber === idx + 1 && styles.activeCircle,
              ]}
            ></View>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default ModalCircleIndicator;

const styles = StyleSheet.create({
  circleIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 12,
  },
  activeCircle: {
    backgroundColor: '#2D63E2',
  },
  nextCircle: {
    backgroundColor: '#666666',
  },
});
