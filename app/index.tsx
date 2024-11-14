import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { useHandleLogin } from "../hooks/useHandleLogin";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, handleLogin, loading } = useHandleLogin();

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
      <Button
        title="Login"
        onPress={() =>
          handleLogin({
            email,
            password,
          })
        }
        disabled={loading}
      />
      {error && (
        <Text style={styles.error}>Login failed. Please try again.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  error: { color: "red", marginTop: 10 },
});

export default LoginScreen;
