import 'react-native-gesture-handler';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './views/HomeScreen';
import SettingScreen from './views/SettingScreen';
import ProfileScreen from './views/ProfileScreen';
import DetailScreen from './views/DetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';

// 创建一个堆栈导航器
const HomeStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();
// 创建一个底部导航器
const Tab = createBottomTabNavigator();
// 创建一个抽屉导航器
const Drawer = createDrawerNavigator();
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
      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';
            if (route.name === 'First') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Second') {
              iconName = focused ? 'ios-mail' : 'ios-mail-unread';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name='First'
          options={{
            tabBarBadge: 0,
          }}
        >
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
      </Tab.Navigator> */}
      <Drawer.Navigator initialRouteName='主页'>
        <Drawer.Screen name='主页' component={HomeScreen} />
        <Drawer.Screen
          name='详情页'
          initialParams={{ id: 1, name: '吊毛', age: 18 }}
          component={DetailScreen}
        />
      </Drawer.Navigator>
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
