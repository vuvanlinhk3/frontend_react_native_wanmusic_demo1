import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen'
// import { AuthStackParamList } from '@src/types/index';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SignUpStep1Screen from '../screens/auth/SignUpStep1Screen';
import SignUpStep2Screen from '../screens/auth/SignUpStep2Screen';
import SignUpStep3Screen from '../screens/auth/SignUpStep3Screen';
import SignUpStep4Screen from '../screens/auth/SignUpStep4Screen';

import { AuthStackParamList } from '../types/navigation';
const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
  // <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen name="Login" component={LoginScreen} />
  //     {/* <Stack.Screen name="WelcomeScreen" component={WellcomeScreen} /> */}
  //   </Stack.Navigator>
  // </NavigationContainer>



    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignUpStep1" component={SignUpStep1Screen} />
      <Stack.Screen name="SignUpStep2" component={SignUpStep2Screen} />
      <Stack.Screen name="SignUpStep3" component={SignUpStep3Screen} />
      <Stack.Screen name="SignUpStep4" component={SignUpStep4Screen} />
      {/* Nếu bạn có màn hình Login hoặc Welcome, hãy thêm vào đây */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ animation: 'slide_from_left' }}/>
    </Stack.Navigator>
);

export default AuthNavigator;