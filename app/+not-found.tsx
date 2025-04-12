import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle the login logic
  const handleLogin = () => {
    // Add your login logic here (e.g., check username and password)
    console.log("Logged in as:", username);
  };

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Log In</ThemedText>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        {/* Log In Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin} // Handle login action
        >
          <ThemedText type="link">Log In</ThemedText>
        </TouchableOpacity>

        {/* Link to Home Screen after login */}
        <Link href="/Home" style={styles.link}>
          <ThemedText type="link">Go to Home</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
