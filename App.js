import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './views/HomeScreen';
import DetailScreen from './views/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='首页' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
