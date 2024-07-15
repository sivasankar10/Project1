import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/LoginPage';
import SignupPage from '../screens/SignupPage';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupPage} options={{ headerTitle: 'Signup' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
