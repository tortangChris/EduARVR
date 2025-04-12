import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const SortingAlgorithms = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainCard}>
        <Text style={styles.lessonTitle}>🔀 Sorting Algorithms</Text>
        <Text style={styles.lessonSubtitle}>
          Learn how to organize data for faster searching, filtering, and more.
        </Text>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>📌 What is Sorting?</Text>
          <Text style={styles.paragraph}>
            Sorting is the process of arranging data in a particular
            order—either ascending or descending. It helps improve efficiency in
            data retrieval, searching, and reporting.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            📊 Types of Sorting Algorithms
          </Text>
          <Text style={styles.paragraph}>
            🔸 **Bubble Sort** – Simple, but slow. Repeatedly swaps adjacent
            elements if they're in the wrong order.
            {"\n"}🔸 **Selection Sort** – Selects the smallest element and puts
            it in the correct position.
            {"\n"}🔸 **Insertion Sort** – Builds the sorted array one item at a
            time.
            {"\n"}🔸 **Merge Sort** – Uses the divide-and-conquer approach to
            split and merge sorted subarrays.
            {"\n"}🔸 **Quick Sort** – Picks a pivot and partitions the array
            around the pivot.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>💡 Example: Bubble Sort</Text>
          <Text style={styles.paragraph}>
            Input: [5, 3, 8, 4, 2]
            {"\n"}• Compare adjacent elements and swap if needed
            {"\n"}• Repeat until no swaps are needed
            {"\n"}• Output: [2, 3, 4, 5, 8]
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>📈 Time Complexities</Text>
          <Text style={styles.paragraph}>
            🔹 Bubble Sort: O(n²){"\n"}
            🔹 Selection Sort: O(n²){"\n"}
            🔹 Insertion Sort: O(n²){"\n"}
            🔹 Merge Sort: O(n log n){"\n"}
            🔹 Quick Sort: O(n log n) average, O(n²) worst case
          </Text>
        </View>

        <Text style={styles.footerNote}>
          🧠 Practice these with actual code to master them!
        </Text>
      </View>
    </ScrollView>
  );
};

export default SortingAlgorithms;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    backgroundColor: "#F3F4F6",
    paddingBottom: 60,
  },
  mainCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lessonTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 4,
  },
  lessonSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2563EB",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },
  footerNote: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 20,
  },
});
