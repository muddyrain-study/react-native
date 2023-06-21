import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touchableStyle}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.txtStyle}>点击加1</Text>
      </TouchableHighlight>

      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.txtStyle}>点击加1</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
        <View style={styles.touchableStyle}>
          <Text style={styles.txtStyle}>点击加1</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableNativeFeedback onPress={() => setCount(count + 1)}>
        <View style={styles.touchableStyle}>
          <Text style={styles.txtStyle}>点击加1</Text>
        </View>
      </TouchableNativeFeedback>

      <Text style={[styles.countText]}>{count !== 0 ? count : null}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  touchableStyle: {
    width: 300,
    height: 38,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#06C1AE',
    marginTop: 20,
    marginBottom: 20,
  },
  txtStyle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
  countText: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 38,
    color: '#06C1AE',
  },
});
