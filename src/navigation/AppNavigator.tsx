import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import { RootStackParamList } from '@src/types/index'; // Import kiểu

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Thêm các màn hình khác nếu cần */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;