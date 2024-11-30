---
title: 'Learning about computers - 9'
metaTitle: ''
metaDesc: ''
socialImage:
date: '2024/11/29'
tags:
---

## Computer Systems

It'll have a been a while since I picked up my study on architecture and systems.

In the [last post discussing computer systems](https://www.leonardogavaudan.com/post/learning-computers-3), I mentioned the following:

> Will therefore:
>
> -   first learn more about the operations, registers, etc... for the x86_64 architecture (though I might change to a simpler architecture)
> -   then come back to the linking step, and feel a lot more comfortable reading the contents of object files, and everything else

I have therefore started reading more on the x64 architecture.

I had a hard time understanding the flat and segmented memory models, and so as I always do, started reading about x64's predecessors.

This gave me a high level overview of the architecture's genealogy, starting at the Intel 8080 (16 bit), then Intel 8086 (16 bit + segmented memory model), to the Intel 80386 / i386 (32 bit), and finally the x64 based chips

From there, I decided it was a good idea to start understanding learn about computer architecture concepts through the Intel 8086 rather than x64 chips / architecture in order to reduce complexity and gain a historical understanding.

The Intel 8086 was a really good sandbox for me to learn the concepts I had a hard time grapling with, namely I got a pretty solid feeling for:

-   Segmented vs flat memory model
-   The address and data buses
-   Address decoders
-   The basic layout of circuitry that connected peripherals to the CPU
    -   this includes the CPU placing a particular value on its buses
    -   the fact that on the 8086, the buses are shared for part of the circuitry
    -   each address decoder then activate (Chip Select) or not their corresponding device (memory mapped IO and isolated IO)
    -   when activated, each device has then a second line to read the required data from the buses

The next things I have to understand are:

-   How is memory (or/and other peripherals) responding to the activation by the decoder.
-   Eventually, how did the CPU get its instruction in the first place

## Leetcode

### Revisited problems

[198. House Robber](https://leetcode.com/problems/house-robber/description/)

[189. Rotate Array](https://leetcode.com/problems/rotate-array/)

[2058. Find the Minimum and Maximum Number of Nodes Between Critical Points](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/description/)
