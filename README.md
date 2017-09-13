# Computer Science Review - Common Data Structure Operations

## Sorting Algorithm 8/31/2017
Quick Sort: time complexity is O(n^2), worst case happens when the array is already sorted or reverse. Space Complexity is Olog(n);

**Merge Sort** : time complexity is O(n log(n)). It does matter for worst case since it always split into two part during each iteration and for n operations. The space complexity is O(n);

**Bubble Sort**: time complexity is O(n^2). The space complexity is O(1);

**Selection Sort**: time complexity is O(n^2). The splace complexity is O(1);

**Insertion Sort**: time complexity is O(n^2). The space complexity is O(1);


## 9/13/2017

The trie is a tree where each node (vertex) represents a single word or a prefix.

The complexity to make a trie structure is O(n*m). This is how:
Every time you traverse a string and add it to the existing structure, you perform a few operations like initializing. This is however, a constant time operation.
It takes O(1) to create a new node. It is not necessarily O(1) but O(C) where C is a constant.
This is repeated in the worst case for all the strings with length m.
Here m would be the length of the longest string (worst case complexity) which would be repeated for all the strings and hence )(n*m).
You have already considered the length in variable m and your C is a constant.
