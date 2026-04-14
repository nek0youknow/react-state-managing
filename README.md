# State Managers Playground (React)

[![Stars](https://img.shields.io/github/stars/nek0youknow/react-state-managing)](https://github.com/nek0youknow/react-state-managing/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/nek0youknow/react-state-managing)](https://github.com/nek0youknow/react-state-managing/commits/main)
[![License](https://img.shields.io/github/license/nek0youknow/react-state-managing)](https://github.com/nek0youknow/react-state-managing/blob/main/LICENSE)

This is my **React + TypeScript** playground to **learn and compare state managers** by building the *same mini-app* multiple times:

- React built-ins (local state, Context, `useReducer`)
- Redux Toolkit
- Zustand
- Jotai
- MobX
- and more

The point is not “which is best”, but **what feels best for different kinds of state** (local UI state, global client state, derived state, async/server-ish state).

## Setup & run

From the repo root:

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build
npm run preview
npm run lint
```

## How this repo will be organized

Keep each library isolated so it’s easy to compare and remove:

- `src/implementations/react-local/`
- `src/implementations/react-context/`
- `src/implementations/redux-toolkit/`
- `src/implementations/zustand/`
- `src/implementations/jotai/`
- `src/implementations/mobx/`

Shared UI that stays identical across implementations:

- `src/shared/` (components, types, fake API helpers, test data)

## “Same app” requirements (for fair comparison)

Every implementation should ship the same features:

- **Counter**
  - increment/decrement
  - async increment (simulate network delay)
- **Todos**
  - add / toggle done / delete
  - filter: all / active / done
- **Derived state**
  - `itemsLeft`, `completedCount`
- **Persistence (optional but recommended)**
  - save/load from `localStorage` (use the same key across implementations)

## What I’m measuring (comparison rubric)

When an implementation is done, I’ll score it on:

- **Boilerplate**: how many files + how much setup to get started
- **Ergonomics**: how “natural” updates + derived state feel
- **TypeScript**: inference quality, refactor safety, annoying generics
- **Performance**: rerenders, memo needs, selector patterns
- **Debugging**: devtools, time travel, traceability
- **Testing**: how easy it is to unit test store logic and components

## Results (where to write notes)

As I add libraries, I’ll keep a short write-up per implementation (pros/cons + score + gotchas).

Suggested places:

- `src/implementations/<name>/NOTES.md` (local notes next to code)
- or a top-level `COMPARISON.md` table (once there are 3+ implementations)

## Roadmap (planned libraries)

- **React**: local state → Context → `useReducer` patterns
- **Redux Toolkit**
- **Zustand**
- **Jotai**
- **MobX**
- **Recoil** (optional)
- **TanStack Query** (server state comparison; not a “state manager” but important)
