import React, { useCallback, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default HomeScreen = ({ navigation, route }) => {
  useFocusEffect(
    useCallback(() => {
      console.log('我进来了');
      return () => {
        console.log('我出去了');
      };
    }, [])
  );
  useEffect(() => {
    console.log('profile 挂载');
  }, []);
  return (
    <View style={styles.container}>
      <Text>这是 ProfileScreen 页面</Text>
      <Button
        title='跳转到 setting 页面'
        onPress={() => {
          navigation.navigate('Setting');
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
