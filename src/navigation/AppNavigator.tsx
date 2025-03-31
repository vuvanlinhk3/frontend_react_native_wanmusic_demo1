import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import WellcomeScreen from '../screens/auth/WelcomeScreen'
import { RootStackParamList } from '@src/types/index'; // Import kiểu

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="WelcomeScreen" component={WellcomeScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;