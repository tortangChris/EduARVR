# Insertion Sort 📘

Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.

## Steps:

1. Iterate from the second element to the last.
2. Compare the current element to its predecessors.
3. Shift all larger elements one position to the right.
4. Insert the current element into its correct position.

## Code Example:

```js
for (let i = 1; i < arr.length; i++) {
  let key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
```
