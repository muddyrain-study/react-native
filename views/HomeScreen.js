import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default HomeScreen = ({ navigation }) => {
  const pressHandle = () => {
    navigation.navigate('Detail');
  };
  return (
    <View style={styles.container}>
      <Text>这是首页</Text>
      <Button title='跳转到 detail 页面' onPress={pressHandle} />
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
