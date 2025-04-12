import { View, Text } from "react-native";
import React from "react";

const lesson = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Lesson: Insertion Sort Algorithm
      </Text>
      <Text style={{ marginTop: 20 }}>
        The Insertion Sort algorithm is a simple comparison-based sorting
        algorithm. It builds the final sorted array one item at a time. It is
        much like sorting playing cards in your hands. Insertion Sort is
        efficient for small data sets, but it becomes inefficient as the data
        set grows large.
      </Text>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>
        Steps of Insertion Sort:
      </Text>
      <Text style={{ marginTop: 10 }}>
        1. Start from the second element of the array.
      </Text>
      <Text>2. Compare the current element with the element before it.</Text>
      <Text>
        3. If the current element is smaller, shift the previous elements to the
        right.
      </Text>
      <Text>4. Insert the current element in its correct position.</Text>
      <Text style={{ marginTop: 10 }}>
        Insertion Sort has a time complexity of O(n^2) in the worst case, but it
        performs better with nearly sorted data.
      </Text>
    </View>
  );
};

export default lesson;
