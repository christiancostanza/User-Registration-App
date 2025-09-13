import React from 'react'
import { TextInput } from 'react-native'

export default function AuthInput({ placeholder, value, onChangeText, secureTextEntry }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      style={{
        borderWidth: 1,
        marginBottom: 12,
        padding: 10,
        borderRadius: 6,
      }}
    />
  )
}
