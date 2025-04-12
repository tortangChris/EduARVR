import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const SearchingAlgorithms = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainCard}>
        <Text style={styles.lessonTitle}>🔎 Searching Algorithms</Text>
        <Text style={styles.lessonSubtitle}>
          Discover how to efficiently find data within arrays, lists, and more.
        </Text>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>📌 What is Searching?</Text>
          <Text style={styles.paragraph}>
            Searching is the process of locating a specific element within a
            collection of data, such as an array or list. Efficient searching is
            crucial for fast data access in software applications.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            📊 Types of Searching Algorithms
          </Text>
          <Text style={styles.paragraph}>
            🔸 **Linear Search** – Checks each element one by one until the
            desired item is found.{"\n"}
            🔸 **Binary Search** – Works on sorted data by repeatedly dividing
            the search range in half.{"\n"}
            🔸 **Jump Search** – Jumps ahead by a fixed number of steps and then
            performs linear search.{"\n"}
            🔸 **Exponential Search** – Increases the range exponentially until
            the target is within range, then does binary search.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>💡 Example: Binary Search</Text>
          <Text style={styles.paragraph}>
            Input (sorted): [1, 3, 5, 7, 9, 11]{"\n"}
            Target: 7{"\n"}• Start in the middle → 5 (too low){"\n"}• Check the
            right half → middle is 9 (too high){"\n"}• Next middle is 7 ✅
            Found!
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>📈 Time Complexities</Text>
          <Text style={styles.paragraph}>
            🔹 Linear Search: O(n){"\n"}
            🔹 Binary Search: O(log n){"\n"}
            🔹 Jump Search: O(√n){"\n"}
            🔹 Exponential Search: O(log n)
          </Text>
        </View>

        <Text style={styles.footerNote}>
          🧠 Tip: Binary search only works with sorted data!
        </Text>
      </View>
    </ScrollView>
  );
};

export default SearchingAlgorithms;

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
