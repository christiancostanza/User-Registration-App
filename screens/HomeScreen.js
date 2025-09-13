import React from 'react'
import { View, Text, Button } from 'react-native'
import { supabase } from '../lib/supabase'

export default function HomeScreen({ navigation }) {
  async function handleSignOut() {
    await supabase.auth.signOut()
    navigation.replace('SignIn')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome 🎉</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  )
}
