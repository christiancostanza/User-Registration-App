import React, { useState } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { supabase } from '../lib/supabase'
import AuthInput from '../components/AuthInput'

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) Alert.alert('Error', error.message)
    else navigation.replace('Home')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
        Sign In
      </Text>
      <AuthInput placeholder="Email" value={email} onChangeText={setEmail} />
      <AuthInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Text
        style={{ marginTop: 20, textAlign: 'center', color: 'blue' }}
        onPress={() => navigation.navigate('SignUp')}
      >
        Don’t have an account? Sign Up
      </Text>
    </View>
  )
}
