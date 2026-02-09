---
title: 'What Would a Programming Language for AI Agents Look Like?'
description: 'Armin Ronacher argues we need new languages designed for agents. I evaluated every serious contender.'
date: '2026-02-09'
tags:
    - Programming Languages
    - AI
    - Software Engineering
---

Armin Ronacher (creator of Flask and Jinja2) published an essay today called ["A Language for Agents"](https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/), and I haven't really stopped thinking about it. His thesis is straightforward but provocative: if agents are going to write and read a huge share of code, we should design languages for that workflow instead of treating it as a side effect.

I went through his argument and stress-tested it against languages I know reasonably well. This post is the result.

## Ronacher's Criteria

The essay lays out concrete design requirements. It's not broad "developer experience" talk; it's a list of properties that materially change how well agents produce and understand code.

**Explicit syntax over implicit.** Whitespace-based indentation (Python-style) is a problem for LLM tokenizers. Agents routinely botch surgical edits in deeply nested Python, often dropping marker comments and relying on formatters to clean up. Braces give explicit, token-level scope boundaries. Similarly, closing parenthesis sequences like `))))` create a counting problem; Ronacher compares it to the "how many R's in strawberry" failure mode.

**Local reasoning and greppability.** Code should be understandable by reading the file, without an index or an LSP. Go's `context.Context`, `http.Request`, `json.Marshal` — always package-qualified — means an agent can grep for where something comes from. Barrel files (TypeScript's `index.ts` re-exporting from 20 files) and import aliases break this.

**No "two languages" problem.** Many languages effectively split into two experiences: one with an LSP running (inferred types, go-to-definition) and one without (raw text, missing type information). Agents frequently work in the "without" mode. The language should be fully readable from source text alone.

**Effect clarity.** Functions should explicitly declare their side effects — time, randomness, I/O, database access — in their signatures. This is closely related to algebraic effects from programming language theory. It makes testing easier (the agent knows what to mock) and code review faster (scan the signature, know if it touches the network).

**Result types over exceptions.** Agents fear exceptions. They default to catching everything, logging, and returning `None`. With result types, the error is in the return type — you can't access the success value without handling the failure case. The easy path and the correct path become the same.

**Stability and determinism.** TypeScript allowing code to run despite type-check failures creates a confusing split between what tooling says and what runtime permits. The ideal is one command that lints, compiles, and tests, with a single pass/fail result.

## The Evaluation

I focused on languages that feel plausible as a "language for agents" in the near term. Here's where I landed.

### Go

Go is the closest overall match, and I don't think that's a coincidence. The features people criticized for years — verbosity, explicit error handling, no generics (for a long time), "boring" simplicity — turn out to be surprisingly good for agents.

Package-prefixed identifiers mean perfect greppability. No barrel files, no re-exports, no implicit imports. `gofmt` enforces a single canonical style. The [Go 1 compatibility promise](https://go.dev/doc/go1compat) means agents don't hit version churn. `if err != nil` is verbose but mechanically predictable.

Where Go falls short: no effect system at all, and `if err != nil` is verbose without being compositional — you can't chain error-producing operations elegantly the way Rust's `?` operator allows.

### Gleam

[Gleam](https://gleam.run/) is the dark horse here. It's a young language (v1.0 in 2024) on the Erlang BEAM that happens to hit almost every criterion. No exceptions exist — `Result(value, error)` is the only error handling mechanism. No implicit imports, all qualified `module.function`. `gleam format` is canonical and opinionated. The language is deliberately tiny: no macros, no operator overloading, no type classes.

It's Go's philosophy with ML's type system. If you read Ronacher's essay and started building from scratch, you'd end up somewhere very close to Gleam — minus the effect system.

The obvious gap is ecosystem depth, and it still has no effect tracking.

### Rust

Rust probably has the strongest type system that agents can still work with day to day. `Result<T, E>` with the `?` operator is exactly what Ronacher described for error handling. Function signatures require explicit type annotations, so you can often reason from source without leaning on an LSP. `cargo` is excellent as unified tooling.

The borrow checker is complex, but it's mostly *mechanical* complexity. The compiler usually tells you what's wrong and often suggests a fix. An agent can iterate: write code, get error, apply suggestion, repeat. That's very different from complexity where you must infer design intent before you can even start repairing code.

Rust also has partial effect tracking: `async` and `unsafe` are effect-like markers in function signatures. But there are only two of them — you can't define your own effects, and there's no general "this function needs time/rng/io" mechanism.

#### Rust's Effect Future

Short version: Rust has early effect markers today, and the language team is working to make them compose cleanly.

It's worth expanding on, because Rust is the only mainstream language actively trying to close this gap. The Rust team has recognized that `async`, `const`, `unsafe`, `try` (the `?` operator), and generators are all **effects** — keywords that alter what code can do. The problem is they were added incrementally, and they don't compose well.

This manifests as the ["colored function" problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/). An `async` function can't be called from a non-async context without a runtime. A `const` function can't call a non-const function. Each effect splits the API surface in two, and the combinations explode — if you tried to make the `Fn` trait family generic over all five effects, you'd need [96 different traits](https://blog.yoshuawuyts.com/extending-rusts-effect-system/).

The [Keyword Generics Initiative charter](https://github.com/rust-lang/keyword-generics-initiative/blob/master/CHARTER.md) (now called the Effects Initiative) is Rust's answer. The idea is to let functions and traits be **generic over effects**:

```rust
#[maybe(async)]
fn copy<R, W>(reader: R, writer: W) -> io::Result<()>
where
    R: #[maybe(async)] Read,
    W: #[maybe(async)] Write
```

This function would work in both sync and async contexts — one implementation, no duplication. The same mechanism could extend to `const`, `unsafe`, and future effects.

It's not a full algebraic effect system like Koka's — you still can't define arbitrary new effects. But it would address the practical effect-mismatch problems Rust teams hit today. The initiative is still in design/formalization, with an RFC expected but not yet landed.

### OxCaml

[OxCaml](https://blog.janestreet.com/introducing-oxcaml/) is Jane Street's open-source fork of the OCaml compiler, released in 2025. It's one of the few production efforts building the full effect story Ronacher describes: effects tracked in the type system with compile-time enforcement. Jane Street runs one of the world's largest OCaml codebases for high-frequency trading, where data races are catastrophic, so this comes from production pressure, not just research curiosity.

But it's wrapped in OCaml, which hurts on almost every other criterion. Heavy type inference means you can't read the code without an LSP. The module system (functors, `include`, first-class modules) enables deep indirection that's worse than barrel files. `open Module` dumps an entire module's contents into scope, killing greppability. And OCaml's type system — GADTs, polymorphic variants, row polymorphism, now four arrow types in OxCaml — creates conceptual complexity that agents struggle with.

OxCaml nails the single hardest item on Ronacher's list and struggles on several he considers foundational.

### The Comparison

| | Go | Gleam | Rust | OxCaml |
|---|---|---|---|---|
| Greppability | best-in-class | equally good | good | `open` hurts |
| Error handling | verbose but explicit | `Result` only, no exceptions | `Result<T,E>` + `?` | exceptions still idiomatic |
| Effect tracking | none | none | `async`/`unsafe` only (more coming) | full, in the type system |
| Readable without LSP | yes | yes | yes | no, heavy inference |
| Tooling | `go` does everything | `gleam` does everything | `cargo` best-in-class | `dune` solid |
| Stability | Go 1 promise | conservative | editions | extensions explicitly unstable |

## The Missing Piece: Effect Systems

Mainstream languages still mostly lack a real effect system. That's the biggest gap between what exists and what Ronacher envisions. To see why, it helps to look at the languages that have tried.

### Koka

[Koka](https://koka-lang.github.io/koka/doc/book.html) is a research language from Microsoft Research, built from the ground up around algebraic effects. Every function signature carries an effect row:

```
fun greet(): <console> ()
fun roll(): <ndet> int
fun greet-and-roll(): <console, ndet> int
```

The `<console>` and `<ndet>` annotations are tracked by the type system. A function with no effects is guaranteed pure. Effects compose as a flat row — no nesting, no monad transformers. If `foo()` calls `bar()` which needs `<time>`, then `foo` also needs `<time>`, and the compiler enforces this.

A good demonstration is that `async/await` in Koka is [not a compiler feature](https://gfxmonk.net/2025/04/13/im-excited-about-koka.html). It's a user-space library in a few hundred lines of code. Concurrency, generators, exceptions, coroutines — all become instances of the same mechanism.

But Koka is still early for production use in most teams: ecosystem is minimal, tooling is maturing, and compiler rough edges remain. It won two distinguished paper awards at PLDI'25, which signals academic momentum, but the gap between research language and production language remains wide.

### OCaml 5

OCaml took the opposite approach — retrofitting effect handlers into an existing language. OCaml 5.0 (released 2022) added algebraic effect handlers as the low-level primitive for multicore concurrency. Rather than baking in goroutines or async/await, they provided the general mechanism and let libraries build on top.

The crucial limitation: effects are **not tracked in the type system** in mainline OCaml. You get the runtime handlers but not the compile-time guarantees. That's why Jane Street forked the compiler — they needed the type-level tracking for data race prevention in their trading systems.

### Haskell

Haskell deserves a mention because it was the original "effects in the type system" language. `IO` in the return type means a function does I/O. A function typed `Int -> Int` genuinely cannot do I/O. That purity guarantee is the strongest of any mainstream language.

But Haskell wraps this in monads, which don't compose easily. `StateT AppState (ExceptT AppError IO) a` is a nested tower that's hard to read, hard to refactor, and order-dependent. Algebraic effects (Koka, OxCaml) are essentially monads done right — same theoretical power, much better surface syntax.

Haskell also has major tradeoffs on greppability (type classes resolve invisibly, implicit Prelude, point-free style) and stability (many GHC extensions can change the language per-file). It proves that having the right semantics isn't enough — the surface syntax and simplicity matter just as much.

## Complexity Isn't Binary

Working through this changed my view of "simplicity" as a criterion. The real question isn't whether a language is simple; it's whether its complexity yields actionable feedback.

Rust's borrow checker is complex, but the compiler usually tells you what's wrong and suggests fixes. An agent can treat that as a feedback loop. OxCaml's type system is also complex, and when something breaks you can get a wall of inferred types that don't unify, with no obvious repair path. Then the agent has to infer design intent to recover.

The distinction is between **mechanical complexity** (agents iterate against the compiler) and **conceptual complexity** (agents get stuck). Rust is high on the first, low on the second. OxCaml is high on both.

This reframes the language design question for me. The best agent language isn't necessarily the simplest one; it's the one with the tightest feedback loop. A complex type system that emits clear, actionable errors can be better than a simple one that lets bugs slip by.

## Systems vs. Application Languages

One tension in Ronacher's essay is whether the "language for agents" should be a systems language or an application language.

Rust's advantages — ownership tracking, lifetime correctness, data race prevention — matter when agents write systems code. But if the agent is building a web API or a CLI tool, Gleam's BEAM-based model handles concurrency and memory automatically, and the agent never has to fight the borrow checker for guarantees it doesn't need.

Most software is application-level code. If the target is web services, data pipelines, and business logic — which seems to be where agents are used most today — Gleam's simpler model might outperform Rust's more powerful but higher-friction one.

It may turn out the answer isn't one language but two, the way we already split C and Python across tiers.

## What Doesn't Exist Yet

If you were designing from scratch today, you'd take:

- **Go's** explicitness, greppability, package system, and unified tooling
- **Rust's** `Result<T, E>` error handling and `?` operator
- **Zig's** multiline string syntax and explicit allocators
- **Koka's** algebraic effect system
- **Gleam's** "less is more" philosophy

No language combines all of these. Go and Gleam are closest on the practical side but missing effect tracking. Rust has the type system and is [actively working toward effect generics](https://blog.yoshuawuyts.com/extending-rusts-effect-system/), but the complexity ceiling is high. OxCaml has effects but wrapped in a language that's hard for agents in every other way. Koka has the right semantics but no ecosystem.

Ronacher's deeper argument is that this gap is now worth closing. The cost of building ecosystems may be dropping because agents can help port libraries. Agent benchmarks also give us something language design rarely had: a measurable feedback signal.

The supposedly "boring" features many developers resisted — verbosity, explicitness, mechanical predictability — may be exactly what agents need. The language we're waiting for probably already exists in pieces; someone just has to assemble it.
