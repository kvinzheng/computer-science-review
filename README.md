# Computer Science Review - Common Data Structure Operations

## Sorting Algorithm 8/31/2017
Quick Sort: time complexity is O(n^2), worst case happens when the array is already sorted or reverse. Space Complexity is Olog(n);

**Merge Sort** : time complexity is O(n log(n)). It does matter for worst case since it always split into two part during each iteration and for n operations. The space complexity is O(n);

**Bubble Sort**: time complexity is O(n^2). The space complexity is O(1);

**Selection Sort**: time complexity is O(n^2). The splace complexity is O(1);

**Insertion Sort**: time complexity is O(n^2). The space complexity is O(1);


## Trie 9/13/2017

In some Trees, nodes are given meaning by the path to them from the root node. In such trees any single node only encodes one part of the meaning; the data from all the nodes in the path must be combined to extract the complete message.

A Trie is such a tree. In a Trie each node encodes a single letter and each each path represents a word. Because it's true that there is a single path to any one node, it's fair to say that an individual node represents a word, although it only encodes a single letter. Consider this example:

```javascript
function Trie (isWord, character) {
  this.characters = {};
  this.isWord = isWord || null;
  this.character = character || '';
}
```

A trie is a special tree used for alphabetizing strings. The root represents an empty string, and as you traverse down the tree, each node adds a letter to the word. Each internal (non-leaf) node is said to represent a prefix. Each node's prefix tells us what kind of words will follow as children.


**What is the maximum depth of trie?**
the nodes of the trie have a maximum fan-out of 26.

**What is the maximum number of children for a node?**
The maximum number of children that a particular node in the trie can have is equal to the number of characters in the alphabet set used for the trie.

**What is the running time of finding a word in a trie?**
Looking up data in a trie is faster in the worst case, O(m) time (where m is the length of a search string), compared to an imperfect hash table.

**how about insertion or deletion?**
Insert and search costs O(key_length)
**What's the Big O of memory storage in a trie?**
0(N*C) N is the number of words and C is the number of alphabets.
