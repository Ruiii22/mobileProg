import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'; // Import the Login screen
import RegisterScreen from './RegisterScreen'; // Import the Registration screen

// Create a Stack Navigator instance
const Stack = createStackNavigator();

export default function App() {
  return (
    // Wrap the Stack Navigator in the Navigation Container
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Define your screens here */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Optional: Hide the header for the Login screen
        />
        <Stack.Screen
          name="RegisterationSection"
          component={RegisterScreen}
          options={{ headerShown: false }} // Optional: Hide the header for the Registration screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
