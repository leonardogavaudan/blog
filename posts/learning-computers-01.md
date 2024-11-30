---
title: 'Learning about computers - 1'
metaTitle: ''
metaDesc: ''
socialImage:
date: '2024/11/19'
tags:
---

## Intro

I have two main goals right now:

-   Learn the fundamentals of DSA
-   Learn more about how computer systems

Most people believe that one has to chose between the two, but I don't believe this is the case.

These series will document my learning of both.

---

## Computer Systems

I've recently been learning about memory management, virtual addressing, and the MMU, but I'm going to take a few steps back on learning about memory management. I feel like I need to first have a really good grasp on:

-   the steps that come right after compilation (ELF file structure, program loader, ...)
-   the different registers and operations in a CPU (will use the x86_64 architecture as an entrypoint)

The goal is:

-   have a high level understanding of compilation, operating systems, and computer architecture
-   and as a first project be able to write my own malloc, and understand in-depth how every component works

### File formats and ELF

I read on the difference between executable files, object files, shared files, core dumps.

And when reading about the symbolic resolution with executable and object files, I realized that my lack of foundations in both the operations and registers was holding me back.

Will therefore learn more about available operations and registers on the x86_64 first, and then come back to ELF.

### Registers and operations on the x86_64

---

## Leetcode

The goal here is to master the fundamental data structures and algorithms in computer science.

Most people believe that these leetcode type questions are far removed from the day to day of a software engineer, and lament the fact that they're used in interviews.

To the contrary, I believe that these tools are going to come up again and again throughout my career, and if I'm never running into scenarios where I need to use them then maybe what I'm doing isn't challenging enough.

I've solved 100 easy questions, and 93 medium questions so far. I've started using spaced repetition for the medium questions in order to reinforce long term recall.

Each day, I'll split the following section in two: new problems that I haven't seen before, and problems that are due from the SRS (Space Repetition System).

### New problems

[131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/description/)

_Concepts: Dynamic Programming, Backtracking_

Interesting but hard problem, took me a while to solve. Had an intuition for the solution, but implementation details was hard. I solved it using a mix of backtracking and dynamic programming.

### Revisited problems

[1497. Check If Array Pairs Are Divisible by k](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/description/)

_Concepts: HashTable, Counting_

Pretty easy problem that you can solve by keeping count of the modulo's of each element, and decrementing the count each time we have a "match" (the sum of the two modulo's are equal to 0 modulo k).

[1140. Stone Game II](https://leetcode.com/problems/stone-game-ii/)

_Concepts: Minmax, Recursion_

Love this kind of min max problem, reminds me of learning about min max in the first AI class I took in college

[962. Maximum Width Ramp](https://leetcode.com/problems/maximum-width-ramp/description/)

_Concepts: Monotonic stack, Array_

Conceptually, problem isn't that hard, but solution can be slightly non-obvious. In these types of problems, I usually try to spot properties that allow me to reduce the problem space. In this case you need see that there's no need to visit the candidate with indices (3, 7) if (3, 8) is a valid candidate.

[1404. Number of Steps to Reduce a Number in Binary Representation to One](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/description/)

_Concepts: Bit Manipulation_

This problem is pretty easy if you simply parse the string and build the decimal number. Slightly more tricky if you do a single pass through the array.

[1371. Find the Longest Substring Containing Vowels in Even Counts](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/)

_Concepts: HashTable, Bit Manipulation, Prefix Sum_

Neat little problem, I never really really knew about using the prefix sum pattern, have come to love them.

[3043. Find the Length of the Longest Common Prefix](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/description/)

_Concepts: HashTable, Array_

Improved on the readibility of my previous solution by using a stack. Saw that one of the topics on that question was a Trie, haven't studied that DS yet, but will soon.

[1110. Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/description/)

_Concepts: Tree, Binary Tree, Recursion_
