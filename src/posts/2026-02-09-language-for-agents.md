---
title: 'What Would a Programming Language for AI Agents Look Like?'
description: 'Armin Ronacher says agent-heavy software needs different language design. I compared the closest contenders.'
date: '2026-02-09'
tags:
    - Programming Languages
    - AI
    - Software Engineering
---

Armin Ronacher (creator of Flask and Jinja2) published ["A Language for Agents"](https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/) on February 9, 2026. I read it, went back to it, and then started testing his claims against real languages.

His core argument is hard to ignore: if agents are going to write and edit a big share of production code, language design should optimize for that workflow instead of treating it like a side effect.

So I took his criteria and stress-tested them against languages that look plausible in the near term.

## Ronacher's Criteria

The essay is refreshingly concrete. This is not vague "dev experience" talk. It is a shortlist of language properties that change how well agents can write, repair, and review code.

**Explicit syntax over implicit structure.** Whitespace-sensitive blocks (Python style) are brittle for token-based editing. Agents often break indentation in deep nesting, then hope the formatter saves them. Braces give hard scope markers. Same with `))))`: it is a counting problem, and models are bad at counting. Diff-stable constructs (for example clear multiline string syntax) also reduce accidental churn during targeted edits.

**Local reasoning and greppability.** You should be able to understand code from plain text, without an index and without an LSP. Go's `context.Context`, `http.Request`, and `json.Marshal` style of explicit qualification helps a lot. Barrel files and import alias chains hurt this badly.

**No "two languages" problem.** In many ecosystems, "language with IDE" and "language as plain text" are basically different experiences. Agents are often in the second mode. If meaning disappears without tooling, agent quality drops.

**Effect clarity.** Function signatures should tell you whether code touches time, randomness, I/O, DB calls, and so on. This is the algebraic-effects idea in practice: better testability, faster review, fewer hidden side effects.

**Result types over exceptions.** Agents overuse `try/catch`, especially broad catches. Result types force error handling into the main path. You cannot access the success value before handling failure.

**Dependency-aware verification in one place.** The happy path should be one command that walks the dependency graph and runs format/lint/type-check/tests/build with a single pass/fail outcome.

**Stability and determinism.** A language should not have a huge gap between what tooling says and what runtime allows. Ideally one command gives one clear pass/fail answer.

## The Evaluation

I focused on languages that could plausibly fill this role soon.

### Go

Go is still the closest overall match, and that is not accidental. The exact features people called "boring" for years turn out to be strengths for agents: verbosity, explicit imports, explicit errors, predictable project structure.

Package-qualified naming is easy to grep. No barrel-file culture, little magic, no style bikeshedding because `gofmt` settles it. The [Go 1 compatibility promise](https://go.dev/doc/go1compat) also matters more than people think, because agents suffer from ecosystem churn.

What Go is missing is also clear: no effect system, and `if err != nil` is predictable but not composable. You do not get a concise propagation operator like Rust's `?`.

### Gleam

[Gleam](https://gleam.run/) surprised me the most. It is young (v1.0 in 2024), but it hits almost every criterion on the list. No exceptions, `Result(value, error)` by default, explicit imports, qualified calls, canonical formatting.

It feels like Go's philosophy with an ML-style type system. If you started from Ronacher's essay and designed a new language, you would land somewhere close to this.

The two obvious gaps are ecosystem depth and effect tracking.

### Rust

Rust probably has the strongest type system that agents can still use productively day to day. `Result<T, E>` plus `?` is exactly the kind of error model Ronacher argues for. `cargo` is still the best single-command workflow in mainstream languages.

The borrow checker is hard, but mostly in a *mechanical* way. The compiler usually tells you what failed and often suggests a fix. Agents can iterate on that loop effectively.

Rust also has partial effect markers today: `async` and `unsafe`. But there is no general effect row saying "this function needs time/rng/io".

#### Rust's Effect Future

Short version: Rust has some effect markers, and the language team is trying to make them compose instead of fragment APIs.

Rust is the only mainstream language seriously pushing on this right now. The team treats `async`, `const`, `unsafe`, `try` (`?`), and generators as effects. The issue is that they arrived one by one and do not compose cleanly.

That creates the ["colored function" problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/). `async` and non-`async` worlds split. `const` and non-`const` split. Multiplying those splits gives an API explosion. Yoshu Wuyts shows how this becomes [96 `Fn` traits](https://blog.yoshuawuyts.com/extending-rusts-effect-system/) if you brute-force all combinations.

The old [Keyword Generics Initiative charter](https://github.com/rust-lang/keyword-generics-initiative/blob/master/CHARTER.md) (now the Effects Initiative) is the current answer. The idea is to make functions and traits generic over effects:

```rust
#[maybe(async)]
fn copy<R, W>(reader: R, writer: W) -> io::Result<()>
where
    R: #[maybe(async)] Read,
    W: #[maybe(async)] Write
```

This function would work in both sync and async contexts — one implementation, no duplication. The same mechanism could extend to `const`, `unsafe`, and future effects.

This is not a full algebraic effect system like Koka. You still cannot define arbitrary new effects. But it would solve real effect mismatch pain in production Rust. It is still design-stage work, with RFC steps not fully landed yet.

### OxCaml

[OxCaml](https://blog.janestreet.com/introducing-oxcaml/) is Jane Street's open-source OCaml fork (released in 2025), and one of the few serious production attempts at compiler-enforced effect typing.

The tradeoff is that it inherits OCaml's hardest parts. Heavy inference hurts plain-text readability. The module system (`include`, functors, first-class modules) can create deep indirection. `open Module` weakens greppability. And the type-level surface area is large (GADTs, polymorphic variants, row polymorphism, and now extra arrow forms in OxCaml).

So OxCaml nails the hardest item on the list, but loses ground on several of the "daily use" items.

### The Comparison

| | Go | Gleam | Rust | OxCaml |
|---|---|---|---|---|
| Greppability | very strong | strong | good | `open` hurts |
| Error handling | verbose but explicit | `Result` only, no exceptions | `Result<T,E>` + `?` | exceptions still idiomatic |
| Effect tracking | none | none | `async`/`unsafe` only (more coming) | full, in the type system |
| Readable without LSP | yes | yes | yes | no, heavy inference |
| Tooling | `go` unified CLI | `gleam` unified CLI | `cargo` very strong | `dune` solid |
| Stability | Go 1 promise | conservative | editions | extensions explicitly unstable |

## A Major Missing Piece: Effect Systems

Mainstream languages still mostly do not have a real effect system. That is the biggest gap between current practice and Ronacher's vision.
This part is an extension of his argument: he emphasizes explicit behavior boundaries, and I am pushing that idea toward fully typed effects.

Looking at the languages that tried helps clarify why.

### Koka

[Koka](https://koka-lang.github.io/koka/doc/book.html) is the cleanest modern algebraic-effects language I know. It was built around effect rows from day one:

```
fun greet(): <console> ()
fun roll(): <ndet> int
fun greet-and-roll(): <console, ndet> int
```

`<console>` and `<ndet>` are type-checked effects. No effects means purity. Effects compose as a flat row, so you avoid monad-transformer towers.

One neat example: `async/await` in Koka is [not a special compiler feature](https://gfxmonk.net/2025/04/13/im-excited-about-koka.html). It can be implemented in user space. Same mechanism, many features.

The downside is practical: tiny ecosystem, maturing tooling, and rough edges. It has strong research momentum (including two distinguished paper awards at PLDI 2025), but production adoption is still limited.

### OCaml 5

OCaml took the opposite path and retrofitted effects into an existing language. OCaml 5.0 (2022) added effect handlers as the primitive for multicore concurrency.

The key limitation is that mainline OCaml does **not** track effects in types. You get runtime handlers, not compile-time guarantees. That is exactly why Jane Street forked it.

### Haskell

Haskell also matters here because it was the mainstream proof that effectful and pure code can be separated by types. If a function is `Int -> Int`, it really cannot do I/O.

The cost is the monad stack style. `StateT AppState (ExceptT AppError IO) a` works, but readability and refactoring suffer.

Haskell also struggles on greppability (type-class resolution is implicit) and stability (extension-heavy codebases can feel like different dialects). It proves a key point: good semantics are not enough if the surface is hard to read.

## Complexity Isn't Binary

This changed how I think about "simplicity." The useful question is not "is this language simple?" It is "when code breaks, does the language give fast, actionable feedback?"

Rust has real complexity, but it is mostly guided by diagnostics. Agents can loop on that. OxCaml has real complexity too, but failures can surface as hard-to-untangle type interactions, where repair requires design intent, not just mechanics.

The distinction I care about now is **mechanical complexity** vs **conceptual complexity**. Agents can grind through the first. They stall on the second.

So the best agent language is not necessarily the smallest one. It is the one with the tightest compiler feedback loop.

## Systems vs. Application Languages

Another tension is target domain: systems code vs application code.

Rust's ownership and memory model are great when those guarantees are the point. But for a lot of web backends, CLI tools, and business logic, Gleam's BEAM runtime gives concurrency and fault isolation without borrow-checker overhead.

Most code today is application code. In that world, a smaller and more explicit language can beat a more powerful one if the iteration loop is faster.

So we may not end up with one "agent language." We may end up with a pair, like we already do with C/Python style tiering.

## What Doesn't Exist Yet

If you were designing from scratch today, you'd take:

- **Go's** explicitness, greppability, package system, and unified tooling
- **Rust's** `Result<T, E>` error handling and `?` operator
- **Zig's** multiline string syntax and explicit allocators
- **Koka's** algebraic effect system
- **Gleam's** "less is more" philosophy

No language combines all of that today. Go and Gleam are closest in day-to-day practicality, but both miss effect tracking. Rust has the strongest mainstream trajectory toward effect generics, but with higher complexity. OxCaml has the effect story but poor ergonomics for agent workflows. Koka has the clean semantics but not the ecosystem.

Ronacher's bigger point is that this gap might finally be worth closing. Agents lower some ecosystem bootstrapping costs, and agent benchmarks give language design something it usually lacks: measurable feedback.

The irony is that the "boring" language traits many humans disliked, like explicitness, repetition, and mechanical predictability, may be exactly what agents need. The pieces already exist. Someone just has to combine them.
