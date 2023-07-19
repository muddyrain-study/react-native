import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
export default DetailScreen = ({ navigation, route }) => {
  const [postContent, setPostContent] = useState('');
  const pressHandle = () => {
    navigation.navigate({
      name: 'Home',
      params: {
        post: postContent,
      },
      merge: true,
    });
  };
  const setParamsHandle = () => {
    navigation.setParams({
      name: '小吊毛',
    });
  };
  useEffect(() => {
    console.log(route);
  }, []);
  return (
    <View style={styles.container}>
      <Text>这是详情</Text>
      <TextInput
        value={postContent}
        onChangeText={setPostContent}
        multiline
        placeholder="What's on your mind?"
        style={{
          height: 200,
          width: 200,
          padding: 10,
          backgroundColor: 'white',
        }}
      />
      <Button title='跳转到 home 页面' onPress={pressHandle} />
      <Text>id: {route.params.id}</Text>
      <Text>name: {route.params.name}</Text>
      <Text>age: {route.params.age}</Text>
      <Button title='修改姓名' onPress={setParamsHandle} />
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
