import { useRef, useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';

export default function App() {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      return true;
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease(e, gs) {
      pan.flattenOffset();
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateX: pan.x,
              },
              {
                translateY: pan.y,
              },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
