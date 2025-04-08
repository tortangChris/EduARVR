import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconSymbol } from "@/components/ui/IconSymbol";

const HomePage = () => {
  const navigation = useNavigation();
  const progressPercentage = 100;

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

      <View style={styles.divider} />

      {/* Progress Section */}
      <View style={styles.progressSection}>
        <Text style={styles.progressTitle}>Overall Progress</Text>
        <View style={styles.progressContent}>
          {/* Dashed Progress Circle */}
          <View style={styles.circleContainer}>
            <View
              style={[
                styles.circle,
                { borderTopColor: getDashColor(progressPercentage) },
              ]}
            >
              <Text style={styles.circleText}>{progressPercentage}%</Text>
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

      <View style={styles.divider} />

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
        <View style={styles.divider} />

        {/* Sample completed activity */}
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
          <IconSymbol name="arrow.right" color="#22C55E" size={20} />
        </View>

        {/* Empty activity placeholders */}
        {[1, 2, 3, 4].map((_, index) => (
          <View
            key={index}
            style={[styles.activityItem, { opacity: 0.5, marginTop: 12 }]}
          >
            <Image
              source={{ uri: "https://via.placeholder.com/40" }}
              style={styles.activityImage}
            />
            <View style={styles.activityText}>
              <Text style={styles.activityHeading}>---</Text>
              <Text style={styles.activitySub}>--</Text>
            </View>
            {/* <IconSymbol name="arrow.right" color="#D1D5DB" size={20} /> */}
          </View>
        ))}
      </View>
    </View>
  );
};

// Function to dynamically set dashed border color based on progress
const getDashColor = (percentage: number) => {
  if (percentage < 50) {
    return "#F87171"; // Red if less than 50%
  } else if (percentage < 80) {
    return "#FBBF24"; // Yellow if between 50% and 80%
  }
  return "#34D399"; // Green if 80% or more
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
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
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
    marginTop: 6,
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
    borderWidth: 4,
    borderStyle: "dashed",
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
    marginBottom: 10,
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
    padding: 20,
    marginBottom: 12,
    alignItems: "center",
  },
  activityContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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
  divider: {
    height: 1,
    backgroundColor: "#D1D5DB",
    marginVertical: 8,
  },
});
