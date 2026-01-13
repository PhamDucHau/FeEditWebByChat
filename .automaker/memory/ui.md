---
tags: [ui]
summary: ui implementation decisions and patterns
relevantTo: [ui]
importance: 0.7
relatedFiles: []
usageStats:
  loaded: 0
  referenced: 0
  successfulFeatures: 0
---
# ui

### Preserved routing path '/' while changing display text from 'Trang chủ' to 'Bảng tổng quan' (2026-01-13)
- **Context:** Navigation menu text update in Header component required semantic change without breaking routing logic
- **Why:** Separating presentation (what user sees) from navigation behavior (where link goes) maintains backward compatibility and prevents users from getting lost due to broken routes
- **Rejected:** Changing the 'to' prop path would have required updating all route configurations and potentially breaking bookmarks/external links
- **Trade-offs:** Users see different text but route remains same - slightly increases cognitive load if user inspects URL but ensures no dead links
- **Breaking if changed:** If 'to' prop were changed without updating route handlers, navigation would break; text-only change is safer

### Maintained 'end' attribute on NavLink during text change (2026-01-13)
- **Context:** NavLink component uses 'end' prop to control active styling behavior on exact path matching
- **Why:** The 'end' attribute prevents parent routes from inheriting active state when child routes match. Keeping it ensures '/' only gets active class when exactly at home, not when nested routes like '/about' match
- **Rejected:** Removing 'end' would cause home link to stay active on all pages, confusing users about current location
- **Trade-offs:** More precise active state management vs simpler component definition
- **Breaking if changed:** If 'end' were removed, all pages would show home as active, breaking navigation visual feedback