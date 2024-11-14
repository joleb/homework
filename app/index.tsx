import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useMutation } from '@apollo/client';
import { useRouter } from 'expo-router';
import gql from 'graphql-tag';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { useHandleLogin } from '../hooks/useHandleLogin';

const LOGIN_MUTATION = gql`
  mutation LoginJwt($input: LoginJwtInput!) {
    Auth {
      loginJwt(input: $input) {
        loginResult {
          jwtTokens {
            accessToken
            refreshToken
          }
          firstLogin
        }
      }
    }
  }
`;
if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error,handleLogin,loading} = useHandleLogin();   

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={()=>handleLogin({
        email,
        password,
      })} disabled={loading} />
      {error && <Text style={styles.error}>Login failed. Please try again.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  error: { color: 'red', marginTop: 10 },
});

export default LoginScreen;