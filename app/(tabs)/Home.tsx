import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.title}>EduAR</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings" as never)}
        >
          <Text style={styles.settingsText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Section */}
      <View style={styles.progressSection}>
        <Text style={styles.progressTitle}>Overall Progress</Text>
        <View style={styles.progressContent}>
          {/* Static Progress Circle */}
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>0%</Text>
            </View>
          </View>

          {/* Goals Info */}
          <View style={styles.goalInfo}>
            <Text style={styles.goalText}>Goals Completed</Text>
            <Text style={styles.goalText}>Modules 0/12</Text>
            <Text style={styles.goalText}>Lessons 0/36</Text>
            <Text style={styles.goalText}>Interactive Assessment 0/24</Text>
          </View>
        </View>
      </View>

      {/* Quick Start */}
      <Text style={styles.quickStartTitle}>Quick Start</Text>
      <View style={styles.quickStartGrid}>
        {[1, 2, 3, 4].map((_, index) => (
          <View key={index} style={styles.quickItem}>
            <Text>Not Available.</Text>
          </View>
        ))}
      </View>

      {/* Recent Activity */}
      <View style={styles.activityContainer}>
        <Text style={styles.activityTitle}>Recent Activity</Text>
        <View style={styles.activityItem}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }}
            style={styles.activityImage}
          />
          <View style={styles.activityText}>
            <Text style={styles.activityHeading}>
              Introduction to Algorithms
            </Text>
            <Text style={styles.activitySub}>Completed</Text>
          </View>
          <Text style={styles.arrow}>➡️</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    marginTop: 36,
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  settingsText: {
    fontSize: 20,
    color: "#4B5563",
  },
  progressSection: {
    backgroundColor: "#2563EB",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  progressTitle: {
    color: "white",
    fontWeight: "600",
    marginBottom: 12,
  },
  progressContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3B82F6",
  },
  circleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  goalInfo: {
    alignItems: "flex-end",
  },
  goalText: {
    color: "white",
    fontSize: 12,
  },
  quickStartTitle: {
    color: "#4B5563",
    fontWeight: "600",
    marginBottom: 8,
  },
  quickStartGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  quickItem: {
    width: "48%",
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    padding: 25,
    marginBottom: 12,
    alignItems: "center",
  },
  activityContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  activityTitle: {
    fontWeight: "600",
    marginBottom: 12,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  activityImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
  },
  activityText: {
    flex: 1,
  },
  activityHeading: {
    fontWeight: "500",
  },
  activitySub: {
    fontSize: 12,
    color: "#6B7280",
  },
  arrow: {
    fontSize: 20,
    color: "#22C55E",
  },
});
