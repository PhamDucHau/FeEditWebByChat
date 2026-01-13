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

### Separated text content from route path in navigation component - changed display text from 'Trang chủ' to 'Bảng tổng quan' while preserving route path '/' (2026-01-13)
- **Context:** Menu header required localized/renamed label but underlying navigation structure remained the same
- **Why:** Decouples UI labels from routing logic. Labels can be updated for UX/localization without affecting navigation architecture. Maintains backward compatibility with existing links pointing to '/'
- **Rejected:** Alternative of changing route path would break existing bookmarks and deep links to home page
- **Trade-offs:** Easier: UI updates without route refactoring. Harder: Must maintain mapping between display text and actual routes when multiple text variants exist
- **Breaking if changed:** If NavLink component were replaced with plain anchor tags, the 'end' prop would be lost, breaking active state styling on exact path matches

#### [Pattern] Product data duplication across multiple sources (products.js and FeaturedProducts.js inline array) (2026-01-13)
- **Problem solved:** Featured products were hardcoded in component while a master products list existed separately
- **Why this works:** Quick implementation approach for static featured section, but creates maintenance burden
- **Trade-offs:** Simpler initial implementation vs. harder to maintain consistency; changes in products.js don't auto-reflect in featured section

### Fixed grid layout assumption (3 columns x 2 rows for 6 cards) based on component implementation (2026-01-13)
- **Context:** Implementation notes assume grid will auto-format 6 cards as 3x2 layout
- **Why:** Likely CSS grid with 3-column layout already defined, natural scaling from 4 to 6 items
- **Rejected:** Could validate actual CSS grid rules in component before assuming layout behavior
- **Trade-offs:** Simpler to add items if grid already supports it, but untested assumption that 6 items won't break responsive design
- **Breaking if changed:** If responsive breakpoints are not properly tested, layout could break on tablet/mobile (might show unexpected wrap or overflow)