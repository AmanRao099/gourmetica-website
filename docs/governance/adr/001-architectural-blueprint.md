# ADR 001: Platform Architecture Blueprint

## Status
Accepted

## Context
The Gourmetica website is transitioning from a standard marketing site to a highly scalable, enterprise-grade digital platform. We need an architecture that prevents "spaghetti code", enforces strict boundaries, and allows for rapid, bug-free iterations by future teams. 

## Decision
We have adopted a 4-tier layer boundary architecture:
1. **Core** (`@/core`): The generic reusable platform (primitives, tokens, platform infrastructure).
2. **Blocks** (`@/blocks`): Reusable business assemblies (e.g., HeroBlock).
3. **Features** (`@/features`): Domain-specific logic, CMS repositories, and content orchestration.
4. **App** (`app/`): Next.js routing and final composition.

Additionally, we enforce the **CMS Repository Pattern**. Next.js pages or components are forbidden from fetching directly from the CMS. All queries flow through `features/cms/repositories/` to ensure we can swap, mock, or test data layers without touching UI code.

## Consequences
- **Positive:** UI components remain pure and highly testable. Feature domains remain encapsulated. Future-proofing against CMS changes.
- **Negative:** Increased initial boilerplate. Developers must adhere strictly to the Dependency Flow Rules, which requires discipline.
