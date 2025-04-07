import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

const Assessment = () => {
  const challenges = [
    {
      title: "AR/VR Code Tracing Challenge",
      subtitle: "Bubble Sort Algorithm",
      objective: "Understand how an algorithm executes step-by-step",
    },
    {
      title: "AR Debugging Challenge",
      subtitle: "Incorrect Loop Condition",
      objective: "Identify and fix errors in pseudocode",
    },
    {
      title: "VR Graph Traversal Adventure",
      subtitle: "A Maze",
      objective:
        "Learn Depth-First Search (DFS) and Breadth-First Search (BFS)",
    },
    {
      title: "AR Step-by-Step Algorithm Assembly",
      subtitle: "Drags and connects blocks",
      objective: "Construct an algorithm by placing steps in the correct order",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Interactive Assessment</Text>
      {challenges.map((challenge, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: "https://via.placeholder.com/40" }}
                style={styles.image}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{challenge.title}</Text>
              <Text style={styles.subtitle}>{challenge.subtitle}</Text>
              <Text style={styles.objective}>
                Objective: {challenge.objective}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Challenge ➡️</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Assessment;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    marginTop: 36,
    backgroundColor: "#F3F4F6",
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imageWrapper: {
    backgroundColor: "#E5E7EB",
    padding: 8,
    borderRadius: 12,
    marginRight: 12,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
  },
  objective: {
    fontStyle: "italic",
    fontSize: 13,
    color: "#374151",
    marginTop: 8,
    textAlign: "center",
  },
  button: {
    marginTop: 12,
    backgroundColor: "#9047FF",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
});
