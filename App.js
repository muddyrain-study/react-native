import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';

const { width: windowWidth } = Dimensions.get('screen');
const images = new Array(6).fill(
  'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
);
export default function App() {
  const [scrollX] = useState(new Animated.Value(0));
  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        {/* 上面部分 */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
          pagingEnabled
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 250 }}
                key={imageIndex}
              >
                <ImageBackground
                  source={{
                    uri: image,
                  }}
                  style={styles.card}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {'Image - ' + (imageIndex + 1)}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            return (
              <Animated.View
                style={[
                  styles.normalDot,
                  {
                    width: scrollX.interpolate({
                      inputRange: [
                        windowWidth * (imageIndex - 1),
                        windowWidth * imageIndex,
                        windowWidth * (imageIndex + 1),
                      ],
                      outputRange: [8, 16, 8],
                      extrapolate: 'clamp', // 不进行增量计算
                    }),
                  },
                ]}
                key={imageIndex}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
