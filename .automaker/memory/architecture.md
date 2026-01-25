---
tags: [architecture]
summary: architecture implementation decisions and patterns
relevantTo: [architecture]
importance: 0.7
relatedFiles: []
usageStats:
  loaded: 0
  referenced: 0
  successfulFeatures: 0
---
# architecture

#### [Gotcha] Implicit product selection mechanism - 2 new products chosen from products.js by developer without explicit feature flag or selection criteria (2026-01-13)
- **Situation:** Selected Nike React Infinity Run (id:5) and Nike Blazer Mid (id:6) arbitrarily from available products
- **Root cause:** No formal mechanism for marking which products should be 'featured' - selection was manual/implicit
- **How to avoid:** No flexibility for non-technical users to change featured products without code edit; business logic buried in component