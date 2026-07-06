# Contributing

## 1. The Pull Request Process
1. **Branch Naming:** `type/scope-description`
   - Examples: `feat/home-hero`, `fix/navbar-mobile`, `refactor/button-tokens`.
2. **Commit Conventions:** Follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
3. **Draft PRs:** Open a Draft PR early if you want architectural feedback.
4. **Reviews:** All PRs require at least one approving review before merging.

## 2. Code Review Expectations
Reviewers must act as gatekeepers for the system.
- Reject PRs that hardcode colors or spacing.
- Reject PRs that bypass the CMS Repository pattern.
- Reject PRs that violate the Dependency Flow (e.g., Core depending on Features).

## 3. Component Creation Rules
**Nobody creates a new component lightly.**
1. Check if an existing component can be composed or extended.
2. If it is purely generic UI, propose it for `@/core/components`.
3. If it is a business assembly, create it in `@/blocks`.
4. If it is domain-specific logic, create it in `@/features/[domain]`.
