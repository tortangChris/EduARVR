import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const GraphAlgorithms = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainCard}>
        <Text style={styles.lessonTitle}>🕸️ Graph Algorithms</Text>
        <Text style={styles.lessonSubtitle}>
          Explore how nodes and edges work together to solve real-world
          problems.
        </Text>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>📌 What is a Graph?</Text>
          <Text style={styles.paragraph}>
            A graph is a set of nodes (also called vertices) connected by edges.
            It can be used to model relationships like social networks, maps,
            and computer networks.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>🔗 Types of Graphs</Text>
          <Text style={styles.paragraph}>
            🔸 **Directed vs Undirected** – Directional edges or bidirectional
            links.{"\n"}
            🔸 **Weighted vs Unweighted** – Edges with values (costs/distances)
            or not.{"\n"}
            🔸 **Cyclic vs Acyclic** – Contains loops or not.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>🛠 Common Graph Algorithms</Text>
          <Text style={styles.paragraph}>
            🔹 **Breadth-First Search (BFS)** – Explores neighbors first. Useful
            for shortest paths.{"\n"}
            🔹 **Depth-First Search (DFS)** – Goes deep into branches before
            backtracking.{"\n"}
            🔹 **Dijkstra’s Algorithm** – Finds the shortest path in weighted
            graphs.{"\n"}
            🔹 **Prim’s & Kruskal’s Algorithms** – Used for building Minimum
            Spanning Trees (MST).{"\n"}
            🔹 **Topological Sort** – Orders nodes in a Directed Acyclic Graph
            (DAG).
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>💡 Example: BFS</Text>
          <Text style={styles.paragraph}>
            Start at Node A.{"\n"}
            1. Visit A → Queue: [B, C]{"\n"}
            2. Visit B → Queue: [C, D, E]{"\n"}
            3. Visit C → Queue: [D, E]{"\n"}
            ...and so on.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>📈 Time Complexities</Text>
          <Text style={styles.paragraph}>
            🔸 BFS / DFS: O(V + E){"\n"}
            🔸 Dijkstra’s: O((V + E) log V) using priority queue{"\n"}
            🔸 Prim’s / Kruskal’s: O(E log V)
          </Text>
        </View>

        <Text style={styles.footerNote}>
          🧠 Tip: Choose the right algorithm based on whether the graph is
          weighted, directed, or cyclic.
        </Text>
      </View>
    </ScrollView>
  );
};

export default GraphAlgorithms;

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
    color: "#10B981",
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
