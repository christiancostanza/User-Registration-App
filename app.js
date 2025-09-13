import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { supabase } from './lib/supabase'

const Stack = createNativeStackNavigator()

// ---- AUTH SCREEN ----
function AuthScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)

  async function handleAuth() {
    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) Alert.alert('Error', error.message)
      else Alert.alert('Success', 'Check your email for confirmation')
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) Alert.alert('Error', error.message)
      else {
        Alert.alert('Success', 'Signed in successfully!')
        navigation.replace('Home') // 👈 go to Home after login
      }
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 6 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 6 }}
      />
      <Button title={isSignUp ? 'Sign Up' : 'Sign In'} onPress={handleAuth} />
      <Text
        style={{ marginTop: 20, textAlign: 'center', color: 'blue' }}
        onPress={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </Text>
    </View>
  )
}

// ---- HOME SCREEN ----
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome Home!</Text>
    </View>
  )
}

// ---- APP ----
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}