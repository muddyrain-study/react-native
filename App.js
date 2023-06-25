import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  function onPressHandle() {
    console.log('onPressHandle');
  }

  function onPressOutHandle() {
    console.log('onPressOutHandle');
  }

  function onPressInHandle() {
    console.log('onPressInHandle');
  }

  function onLongPressHandle() {
    console.log('onLongPressHandle');
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => {
          if (pressed) {
            return styles.pressdStyle;
          } else {
            return styles.unPressdStyle;
          }
        }}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        onPress={onPressHandle}
        onPressIn={onPressInHandle}
        onPressOut={onPressOutHandle}
        onLongPress={onLongPressHandle}
      >
        {({ pressed }) => {
          // 根据是否点按返回不同的子组件
          if (pressed) {
            return (
              <Text
                style={{ textAlign: 'center', color: 'white', lineHeight: 100 }}
              >
                Pressd
              </Text>
            );
          } else {
            return (
              <Text style={{ textAlign: 'center', color: 'white' }}>
                Press Me
              </Text>
            );
          }
        }}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  pressdStyle: {
    backgroundColor: 'rgb(210, 230, 255)',
    height: 100,
    lineHeight: '100',
  },
  unPressdStyle: {
    backgroundColor: '#ccc',
  },
});
