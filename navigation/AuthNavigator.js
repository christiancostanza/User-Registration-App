import React from 'react' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SigninScreen'
import SignUpScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
