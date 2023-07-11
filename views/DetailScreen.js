import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default DetailScreen = ({ navigation }) => {
  const pressHandle = () => {
    navigation.navigate('首页');
  };
  return (
    <View style={styles.container}>
      <Text>这是详情</Text>
      <Button title='跳转到 home 页面' onPress={pressHandle} />
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
