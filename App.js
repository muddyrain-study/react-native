import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './views/HomeScreen';
import DetailScreen from './views/DetailScreen';
import { Image, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View style={{ backgroundColor: 'blue', width: 375 }}>
      <Image
        style={{ width: 30, height: 30 }}
        source={require('./assets/logo.jpg')}
      />
      <Text>首页</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name='home'
          key={'/home'}
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
          component={HomeScreen}
        />
        <Stack.Screen
          name='Detail'
          options={({ route }) => ({ title: route.params?.name + '详情' })}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
