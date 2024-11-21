---
title: 'Learning about computers - 3'
metaTitle: ''
metaDesc: ''
socialImage:
date: '2024/11/21'
tags:
---

## Computer Systems

For simplicity's sake, I'll break down the lifecycle of a program:

1. Writing the source code
2. Compilation
    - Preprocessing
    - Compilation
    - Assembly
    - Linking
3. Program loading
    - Loading into RAM
    - Setting up the Memory Layout
    - Dynamic Linking
    - Entry Point
4. Execution
    - Instruction Fetch-Decode-Execute
    - System Calls
    - Control Flow
    - Termination

-   I feel good enough about my level understanding about the whole right now, that I can start going slightly into more depth in one of these.
-   Looking at the process chronologically (skipping the source code)
    -   preprocessing doesn't particularly feel like the best ROI
    -   the compilation step seems very important, but hard to ease in progressively, seems like one hell of a rabbit hole. I'll content myself with knowing that it parses the source code, builds an AST, uses IR, and then outputs assembly code.
    -   the linking step seems like a good candidate, mainly my blockers are that I don't understand enough about assembly operations and registers. As mentionned in a previous post, trying to understand symbolic resolution made realize this.
-   Will therefore
    -   first learn more about the operations, registers, etc... for the x86_64 architecture (though I might change to a simpler architecture)
    -   then come back to the linking step, and feel a lot more comfortable reading the contents of object files, and everything else

## Leetcode

### New problems

[1405. Longest Happy String](https://leetcode.com/problems/longest-happy-string/description/)

_Concepts: String, Heap, Sorting_

Slightly more advanced version of "767. Reorganize String"

[670. Maximum Swap](https://leetcode.com/problems/maximum-swap/description/)

_Concepts: Math_

You can try first using linear space, but constant space and linear time is where the problem gets interesting. Solution isn't that hard.
You have to understand that for a given digit index, you maximize things by switching it with the largest digit coming from the left (if superior).
From there you can deduce that you want to start iterating from the left side and keep track of the max digit.

[348. Design Tic-Tac-Toe](https://leetcode.com/problems/design-tic-tac-toe/description/)

_Concepts: Array, Hash Table, Matrix_

Little mini game-dev-like problem, it's ok to skip this problem.

### Revisited problems

[1310. XOR Queries of a Subarray](https://leetcode.com/problems/xor-queries-of-a-subarray/description/)

_Concepts: Bit manipulation, XOR, Prefix Sum_

[146. LRU Cache](https://leetcode.com/problems/lru-cache/description/)

_Concepts: Cache, Hash Table, Linked List_

Tool that I used often in my last job, important to learn!

[50. Pow(x, n)](https://leetcode.com/problems/powx-n/description/)

_Concepts: Math_

Actually struggled to find an optimal solution the first time I tried to solve this problem.

[1570. Dot Product of Two Sparse Vectors](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/description/)

_Concepts: Vector, Hash Table_

Easy problem once you understand how to efficiently represent sparse vectors.

[339. Nested List Weight Sum](https://leetcode.com/problems/nested-list-weight-sum/description/)

_Concepts: Recursion_

Nice introductory recursion problem if you're new to it.

[131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/description/)

_Concepts: Dynamic Programming, Backtracking_

Really Pleased with how I solved the problem this time. Last time I used a top down approach of DP + bactracking. This time I managed to only use DP with a bottom approach:

```python
from typing import List


class Solution:
    def is_palindrome(self, s: List[str]):
        i, j = 0, len(s) - 1
        while i < j:
            if s[i] != s[j]:
                return False
            i += 1
            j -= 1
        return True

    def partition(self, s: str) -> List[List[str]]:
        dp = [[] for _ in range(len(s) + 1)]
        dp[-1] = [[]]
        for i in range(len(s) - 1, -1, -1):
            candidate = []
            for j in range(i, len(s)):
                candidate.append(s[j])
                if self.is_palindrome(candidate):
                    palindrome = "".join(candidate)
                    for previous_solution in dp[j + 1]:
                        dp[i].append([palindrome] + previous_solution)
        return dp[0]
```

[347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/description/)

_Concepts: Heap, Hash Table, Sorting_

Two different approaches to solve this problem, one optimizes compute, the other memory, check both out.

[394. Decode String](https://leetcode.com/problems/decode-string/description/)

_Concepts: Stack, String_

[786. K-th Smallest Prime Fraction](https://leetcode.com/problems/k-th-smallest-prime-fraction/description/)

_Concepts: Heap, Array_

I recommend this array problem. Try directly to solve for better than n^2 / brute force.

[138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/description/)

_Concepts: Linked List, Hash Table_

Learned a lot about hashability and default hashing behaviour in Python with this one
