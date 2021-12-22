/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LogInPage from "./src/views/login/login";
import HomeScreen from "./src/views/home/home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ccc',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={LogInPage} options={{ title: 'Log In Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
