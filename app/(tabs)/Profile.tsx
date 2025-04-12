import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Explore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header}>Personal Information</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.profileContainer}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.name}>Juan Dela Cruz</Text>
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
    flex: 1,
    padding: 16,
    marginTop: 36,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#d1d5db",
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  infoCard: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: "#777",
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  link: {
    color: "#007AFF",
    fontWeight: "500",
    marginTop: 6,
  },
  saveButton: {
    backgroundColor: "#2e7d32",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: "#d32f2f",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#D1D5DB",
    marginVertical: 8,
  },
});
