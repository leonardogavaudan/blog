---
title: 'LLM de-abstraction'
metaTitle: ''
metaDesc: ''
socialImage:
date: '2023-12-15'
tags:
    - Software engineering
    - LLM
---

I love software engineering. I love the sense of liberty it installs in me.
I love how easy it is for me to take an idea, express it in code, and see it unfold.

But, with this increased sense of liberty, we've loosened the regulation and rigor around the language we use in order to communicate.
We've ended up with terms like "Service" which depending on who you ask, will mean a thousand different things (great article written by Martin Folwer ["ServiceOrientedAmbiguity"](https://martinfowler.com/bliki/ServiceOrientedAmbiguity.html) about this).
Abstractions, it seems, allow us to allow us to elegantly express complex ideas, but at a cost.

One of the ways I've experienced this cost is when reading technical content.
Authors will use very abstract language in order to paint the full picture of what they're trying to convey.
While I appreciate definitions that get to the essence of a concept, and not flirt with superficial details, the lack of concrete examples has made it such that I'll understand the general gist of the concept but not without gaping holes of ambiguity in my understanding.

One of the best use-cases I've found for LLMs is to ask them to expand on these more abstract passages.

I was reading the ["Designing schemas for non-relational and NoSQL databases"](https://www.prisma.io/dataguide/intro/intro-to-schemas#designing-schemas-for-non-relational-and-nosql-databases)
section of Prisma's guide on databases, and even though the guide does a fantastic job at explaining everything, I've found that going through an example and diving into the details really helps anchor the ideas discussed.

And so with a simple prompt:

> Can you give me an example to illustrate the 'Combine and deduplicate data entities where possible' section
> [ inserted relevant text here ...]

ChatGPT breathed new life into the otherwise static text, and allowed me to interact with the text, to ask clarifying and pointed questions, and most importantly generated an an example for me to study.
