# Engineering Guidelines

This document outlines the strict engineering rules that govern the Gourmetica Platform.

## 1. File Size Limits
- Try to keep components under ~250 lines where practical.
- If a component grows larger, extract sub-components or hooks.

## 2. Server vs Client Components (React / Next.js)
- **Prefer Server Components.** Default to `async` components that fetch their own data or render statically.
- **Client Components** (`"use client"`) must only be used when interactivity is required (e.g., hooks like `useState`, `useRef`, Framer Motion animations).
- Keep Client Components as leaf nodes in the tree whenever possible.

## 3. Async Patterns
- Utilize React Suspense boundaries (`loading.tsx` or `<Suspense fallback={...}>`) for async operations.
- Avoid cascading waterfalls; fetch data in parallel using `Promise.all` where applicable.

## 4. Error Boundaries
- Implement localized `error.tsx` files for route segments.
- Use explicit error handling in repository layers to prevent uncaught exceptions bubbling up to the UI ungracefully.

## 5. Import Order & Conventions
All imports should be grouped logically and alphabetized. Use absolute imports (`@/`) exclusively.
1. React / Next.js core modules.
2. Third-party packages (e.g., `framer-motion`, `lucide-react`).
3. Platform/Core (`@/core/...`).
4. Blocks (`@/blocks/...`).
5. Features (`@/features/...`).
6. Local relative imports (only allowed within the same folder module).

## 6. Naming Conventions
- **Folders:** `kebab-case` (e.g., `feature-grid`).
- **Components:** `PascalCase` (e.g., `FeatureGrid.tsx`).
- **Hooks:** `camelCase` starting with `use` (e.g., `useScroll.ts`).
- **Utilities/Services:** `camelCase` (e.g., `formatDate.ts`).

## 7. TypeScript Strictness
- `any` is strictly prohibited.
- All components must define and export their Props interface.
- Follow the standardized `ComponentContract` for generic UI elements.
