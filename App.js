import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './views/HomeScreen';
import SettingScreen from './views/SettingScreen';
import ProfileScreen from './views/ProfileScreen';
import DetailScreen from './views/DetailScreen';
import { Image, Text, View } from 'react-native';

// 创建一个堆栈导航器
const HomeStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();
// 创建一个底部导航器
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='First'>
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name='Home' component={HomeScreen} />
              <HomeStack.Screen name='Detail' component={DetailScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name='Second'>
          {() => (
            <SettingStack.Navigator>
              <SettingStack.Screen name='Setting' component={SettingScreen} />
              <SettingStack.Screen name='Profile' component={ProfileScreen} />
            </SettingStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
      {/* <Stack.Navigator
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
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
