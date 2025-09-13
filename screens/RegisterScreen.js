import React, { useState } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { supabase } from '../lib/supabase'
import AuthInput from '../components/AuthInput'

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) Alert.alert('Error', error.message)
    else Alert.alert('Success', 'Check your email to confirm your account')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
        Sign Up
      </Text>
      <AuthInput placeholder="Email" value={email} onChangeText={setEmail} />
      <AuthInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text
        style={{ marginTop: 20, textAlign: 'center', color: 'blue' }}
        onPress={() => navigation.navigate('SignIn')}
      >
        Already have an account? Sign In
      </Text>
    </View>
  )
}
