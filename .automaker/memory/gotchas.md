---
tags: [gotcha, mistake, edge-case, bug, warning]
summary: Mistakes and edge cases to avoid
relevantTo: [error, bug, fix, issue, problem]
importance: 0.9
relatedFiles: []
usageStats:
  loaded: 15
  referenced: 1
  successfulFeatures: 1
---
# Gotchas

Mistakes and edge cases to avoid. These are lessons learned from past issues.

---



#### [Gotcha] NavLink 'end' prop is critical for home route - without it, active state would apply to all routes beginning with '/' (2026-01-13)
- **Situation:** Home route is '/' which is a prefix of all other routes, creating potential false-positive active state
- **Root cause:** React Router's active state matching uses startsWith logic by default. Home route requires 'end' prop to use exact matching instead
- **How to avoid:** Correct: Using 'end' ensures accurate active indicators. Cost: Must remember this special case for home route (other non-home routes don't need it)