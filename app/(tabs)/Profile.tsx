import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Information</Text>

      <View style={styles.profileContainer}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.name}>Juan</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.value}>Juan Dela Cruz</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>jmangjuan23@example.com</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Contact Number</Text>
        <Text style={styles.value}>+63 912 345 6789</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Change Password</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Update Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    marginTop: 36,
    backgroundColor: "#fff",
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "center",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#d1d5db", // Tailwind gray-300 equivalent
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  infoCard: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 12,
    color: "#777",
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 4,
  },
  link: {
    color: "#007AFF",
    fontWeight: "500",
    marginTop: 6,
  },
  saveButton: {
    backgroundColor: "#2e7d32",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#d32f2f",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
