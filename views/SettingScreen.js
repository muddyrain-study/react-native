import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>这是 Setting 页面</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
