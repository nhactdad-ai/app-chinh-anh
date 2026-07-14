---
name: Lumina Pro
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1c'
  surface-container: '#202020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#303030'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#c8c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b6b5b4'
  tertiary: '#ffb595'
  on-tertiary: '#571e00'
  tertiary-container: '#ef6719'
  on-tertiary-container: '#4c1a00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb595'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7c2e00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 12px
  margin-panel: 16px
  padding-control: 8px
  sidebar-width: 300px
  toolbar-height: 48px
---

## Brand & Style

The design system is engineered for a high-performance photo editing environment where the interface recedes to prioritize the user's imagery. The brand personality is **Precise, Technical, and Unobtrusive**. It targets creative professionals who require a dense, data-rich environment that remains legible during long editing sessions.

The aesthetic follows a **Modern Corporate** style with **Minimalist** leanings. It utilizes a disciplined dark-mode architecture to reduce eye strain and maximize perceived color accuracy of the canvas. Visual interest is generated through high-precision functional elements—such as active state accents and refined micro-interactions—rather than decorative flourishes. The interface evokes a sense of "expensive hardware," utilizing subtle depth and meticulous alignment.

## Colors

This system utilizes a strictly tiered grayscale palette to establish visual hierarchy without competing with the photo content. 

- **Canvas Background (#121212):** The deepest value, used exclusively for the image workspace to provide maximum contrast.
- **Primary Surface (#1E1E1E):** The base color for the application shell and main toolbar.
- **Panel Surface (#252525):** Used for sidebars and utility panels to create a subtle lift from the base.
- **Accent Blue (#007AFF):** Reserved for active states, selected tools, slider handles, and primary action buttons.
- **Borders (#333333):** Defines structural boundaries without creating high-contrast visual noise.

## Typography

The typography is optimized for density and legibility. **Inter** is the primary typeface, chosen for its neutral character and exceptional performance at small sizes. 

- **Tight Tracking:** Letter spacing is slightly reduced for headlines and body text to maintain a "technical" feel and fit more information into narrow sidebars.
- **Label Hierarchy:** Use `label-sm` for tool descriptions and property names. Use `mono-label` (using JetBrains Mono) for numerical values and metadata (ISO, Shutter Speed) to ensure character alignment when values change.
- **Scale:** Font sizes are intentionally kept small (11px–13px for most UI elements) to maximize the workspace available for the image canvas.

## Layout & Spacing

The design system employs a **Fixed Panel Layout** with a fluid central canvas. The rhythm is based on a 4px grid system, ensuring all components align perfectly within their respective containers.

- **Sidebars:** Standardized at 300px width. Left sidebar typically houses presets/library, right sidebar houses editing controls.
- **Filmstrip:** A horizontal scrolling area at the bottom of the canvas, fixed at 120px height.
- **Gaps:** Use a consistent 1px gap (border-based) between docked panels and a 12px gutter between floating elements.
- **Responsive Behavior:** On smaller screens (Tablet), sidebars become collapsible drawers. On Desktop, sidebars are persistent and can be toggled via hotkeys.

## Elevation & Depth

Visual hierarchy is established primarily through **Tonal Layering** and **Low-Contrast Outlines** rather than aggressive shadows.

- **Stacking:** Surface levels move from #121212 (bottom/canvas) to #2D2D2D (top/popovers).
- **Outlines:** Every panel and interactive container features a 1px solid border (#333333). This provides structural clarity in a dark environment where shadows might be invisible.
- **Soft Shadows:** Reserved for floating elements like context menus and tooltips. Use a deep, large-radius shadow: `0 8px 24px rgba(0,0,0,0.5)`.
- **Active State Elevation:** Selected thumbnails or active tool states use the Accent Blue for the border or a subtle outer glow to indicate focus.

## Shapes

The shape language is controlled and sophisticated. 

- **Containers:** Panels, cards, and preset thumbnails use a **12px (rounded-lg)** radius to soften the technical layout.
- **Small Controls:** Buttons, input fields, and checkboxes use a **4px (soft)** radius to maintain a professional, sharp appearance.
- **Sliders:** Slider tracks are 4px thick with 12px circular handles for high precision and touch-readiness.

## Components

- **Sliders:** The core editing component. Use a #333333 track and #007AFF for the "filled" portion (originating from center or zero). Handles should be high-contrast white or light gray.
- **Disclosure Groups:** Used for grouping tools (e.g., "Basic," "Tone Curve"). Use a #252525 header background with a chevron icon and `headline-md` typography.
- **Icon Buttons:** 32x32px hit area, no background by default. On hover, use #404040 background; on active, use #007AFF tint.
- **Preset Thumbnails:** 12px corner radius. Selected thumbnails must feature a 2px #007AFF border. 
- **Input Fields:** Monospaced text for numerical values. Background: #121212, Border: #333333.
- **Filmstrip Items:** Compact versions of thumbnails with metadata (star ratings, flags) overlaid using `label-sm`.
- **Status Chips:** Small, pill-shaped indicators for "Syncing" or "Edited" status, using semi-transparent versions of semantic colors.