import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IconSymbol } from "@/components/ui/IconSymbol";

const Lessons = () => {
  const navigation = useNavigation();

  const lessonData = [
    {
      title: "Introduction to Algorithms",
      status: "Completed",
      route: "IntroductionToAlgorithms",
    },
    {
      title: "Sorting Algorithms",
      status: "Completed",
      route: "SortingAlgorithms",
    },
    {
      title: "Searching Algorithms",
      status: "Completed",
      route: "SearchingAlgorithms",
    },
    {
      title: "Graph Algorithms",
      status: "Completed",
      route: "GraphAlgorithms",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Interactive Algorithm Learning</Text>

      <View style={styles.divider} />

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

            <TouchableOpacity onPress={() => navigation.navigate(lesson.route)}>
              <IconSymbol name="arrow.right" color="#22C55E" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
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
    marginBottom: 12,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 4,
    marginTop: 12,
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
  divider: {
    height: 1,
    backgroundColor: "#D1D5DB",
    marginVertical: 8,
  },
});
