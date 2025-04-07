import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Lessons = () => {
  const lessonData = [
    {
      title: "Introduction to Algorithms",
      status: "Completed",
    },
    {
      title: "Searching Algorithms",
      status: "Completed",
    },
    {
      title: "Sorting Algorithms",
      status: "Completed",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Interactive Algorithm Learning</Text>

      {lessonData.map((lesson, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardContent}>
            <Image
              source={{ uri: "https://via.placeholder.com/40" }}
              style={styles.lessonImage}
            />
            <View style={styles.lessonText}>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
              <Text style={styles.lessonStatus}>{lesson.status}</Text>
            </View>
            <Text style={styles.arrow}>➡️</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Lessons;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    marginTop: 36,
    backgroundColor: "#F9FAFB",
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
    elevation: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  lessonImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#E5E7EB",
  },
  lessonText: {
    flex: 1,
  },
  lessonTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
  lessonStatus: {
    fontSize: 12,
    color: "#6B7280",
  },
  arrow: {
    fontSize: 20,
    color: "#22C55E",
    marginLeft: 8,
  },
});
