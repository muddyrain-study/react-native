import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default HomeScreen = ({ navigation, route }) => {
  useEffect(() => {
    console.log('setting 挂载');
  }, []);
  return (
    <View style={styles.container}>
      <Text>这是 Setting 页面</Text>
      <Button
        title='跳转到 profile 页面'
        onPress={() => {
          navigation.navigate('Profile');
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
