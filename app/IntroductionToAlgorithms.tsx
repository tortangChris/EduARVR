import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const IntroductionToAlgorithms = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainCard}>
        <Text style={styles.lessonTitle}>📘 Introduction to Algorithms</Text>
        <Text style={styles.lessonSubtitle}>
          Your first step to mastering problem-solving with code!
        </Text>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>📌 What is an Algorithm?</Text>
          <Text style={styles.paragraph}>
            An algorithm is a clear, step-by-step procedure designed to solve a
            problem or complete a task. Algorithms are the heart of computer
            science and software development.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            ✨ Characteristics of a Good Algorithm
          </Text>
          <Text style={styles.paragraph}>
            ✅ Input — Accepts zero or more inputs{"\n"}✅ Output — Produces at
            least one output{"\n"}✅ Definiteness — Each step is clearly defined
            {"\n"}✅ Finiteness — Terminates after a limited number of steps
            {"\n"}✅ Effectiveness — Uses basic, executable instructions
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>💡 Why Learn Algorithms?</Text>
          <Text style={styles.paragraph}>
            Learning algorithms helps you:
            {"\n"}• Solve problems efficiently
            {"\n"}• Write clean, optimized code
            {"\n"}• Understand how systems and data structures work
            {"\n"}• Excel in technical interviews and coding challenges
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>🧪 Sample Algorithm</Text>
          <Text style={styles.paragraph}>
            **Goal:** Find the largest number among three values
            {"\n\n"}1. Start{"\n"}2. Input A, B, C{"\n"}3. If A ≥ B and A ≥ C,
            then A is largest{"\n"}4. Else if B ≥ A and B ≥ C, then B is largest
            {"\n"}5. Else, C is largest{"\n"}6. End
          </Text>
        </View>

        <Text style={styles.footerNote}>
          🚀 Swipe down for more lessons. Ready to continue?
        </Text>
      </View>
    </ScrollView>
  );
};

export default IntroductionToAlgorithms;

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
