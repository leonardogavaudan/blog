---
title: 'Learning about computers - 2'
metaTitle: ''
metaDesc: ''
socialImage:
date: '2024/11/20'
tags:
---

## Computer Systems

Was pretty busy today with some annex stuff, but read up on the difference between static and dynamic linking in the context of program loaders.

Key points were:

-   Static linking refers to any linking that happens before runtime
-   Dynamic liking refers to any linking that happens during runtime
-   One of the responsibilities of the program loader is to handle any required dynamic linking (for example to standard libraries)
-   The advantages of dynamic linking are:
    -   easier updates (no need to recompile all dependent programs)
    -   and more importantly (in my opinion) to reduce executable size, saving memory both on the drive and RAM

## Leetcode

### Revisited problems

[974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/description/)

_Concepts: Prefix Sum, HashTable_

Good introductory problem if new to prefix sums.

[322. Coin Change](https://leetcode.com/problems/coin-change/description/)

_Concepts: Dynamic Programming_

Was one of the problems I had to solve in my interviews for Modjo. Good dynamic programming problem to ask your non-CS friends!

[539. Minimum Time Difference](https://leetcode.com/problems/minimum-time-difference/description/)

_Concepts: Array, Sorting, String_

Pretty easy question, only challenging part is handling edge case to calculate time difference between 23:00 and 01:00.

[523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/description/)

_Concepts: Prefix Sum_

Similar to Subarray Sums Divisible by K.
