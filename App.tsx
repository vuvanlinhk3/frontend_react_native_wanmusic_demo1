import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from './src/navigation/AppNavigator';
import { SignUpProvider } from './src/context/SignUpContext';

const App = () => (
    <SignUpProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SignUpProvider>
  );
export default App;