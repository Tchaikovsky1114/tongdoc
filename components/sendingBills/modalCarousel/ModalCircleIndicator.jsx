import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

const ModalCircleIndicator = ({
  pressScrollXHandler,
  currentPageNumber,
  PAGES_ONCE,
}) => {
  return (
    <View style={styles.circleIndicator}>
      {PAGES_ONCE.map((_, idx) => (
        <>
          <Pressable onPress={() => pressScrollXHandler(idx)}>
            <View
              style={[
                styles.circle,
                currentPageNumber === idx + 1 && styles.activeCircle,
              ]}
            ></View>
          </Pressable>
        </>
      ))}
    </View>
  );
};

export default ModalCircleIndicator;

const styles = StyleSheet.create({
  circleIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 14,
  },
  activeCircle: {
    backgroundColor: '#2D63E2',
  },
  nextCircle: {
    backgroundColor: '#666666',
  },
});
