import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default HomeScreen = ({ navigation, route }) => {
  const pressHandle = () => {
    navigation.navigate('Detail', {
      id: 1,
      name: '吊毛',
      age: 18,
    });
  };
  return (
    <View style={styles.container}>
      <Text>这是首页</Text>
      <Text>{route.params?.post}</Text>
      <Button title='跳转到 detail 页面' onPress={pressHandle} />
      <Button
        title='跳转到Second页面'
        color={'#f194ff'}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      <Button
        title='打开抽屉'
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Button
        title='关闭抽屉'
        onPress={() => {
          navigation.closeDrawer();
        }}
      />
      <Button
        title='切换抽屉'
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
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
