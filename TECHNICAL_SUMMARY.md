# HRAIN Dashboard - Technical Summary

## Technology Stack
*   **Core Framework**: [React 18](https://react.dev/) - Functional components with Hooks.
*   **Build Tool**: [Vite](https://vitejs.dev/) - Fast development server and optimized production builds.
*   **UI System**: [Ant Design (v5)](https://ant.design/) - Enterprise-grade UI component library.
*   **Icons**: [@ant-design/icons](https://ant.design/components/icon) - Comprehensive SVG icon set.
*   **Typography**: [Google Fonts](https://fonts.google.com/) (Open Sans).

## Technical Features

### 1. Dynamic Theme Engine
*   **Architecture**: Built on Ant Design's `ConfigProvider`.
*   **Implementation**: Real-time switching between Light and Dark algorithms (`theme.defaultAlgorithm` vs `theme.darkAlgorithm`) managed via React State.
*   **Persistence**: Uses `useEffect` hooks to dynamically inject background styles into the document body to prevent "white flashes" during theme toggles.
*   **Custom Tokens**: Overrides design tokens to support custom brand colors (`#696cff`) and border styles across themes.

### 2. Responsive Layout System
*   **Grid System**: Utilizes a 24-column grid layout (`Row`, `Col`) with specific responsive breakpoints (`xs`, `sm`, `lg`, `xl`).
*   **Optimized Breakpoints**: Specifically tuned to handle the 1024px to 1600px range, ensuring key widgets (Tasks, Interviews) stack correctly on smaller laptops while expanding on desktop monitors.
*   **Adaptive Navigation**: `Sider` component handles own collapsing functionality based on viewport width.

### 3. Component Architecture
*   **Atomic Design**: Small, reusable internal components (e.g., `StatCard`) isolate logic and styling.
*   **Data-Driven UI**: Dashboard widgets render lists (Tasks, Interviews) dynamically from structured data arrays, making API integration straightforward.
*   **CSS-in-JS Integration**: Combines global CSS imports for Typography with inline styles for dynamic properties (like theme colors) to balance performance and flexibility.

### 4. Custom Aesthetics
*   **Advanced Card Styling**: Replaces default shadows with distinct border logic (`borderColor: '#d9d9d9'` vs `'#303030'`) to ensure high contrast and visual clarity in both themes.
*   **Visual Data**: Light-weight, CSS-only implementation of bar charts avoids the heavy bundle size of charting libraries for simple metrics.

### 5. Production Optimization
*   **Bundling**: Rollup-based bundling via Vite.
*   **Tree Shaking**: Automatic removal of unused Ant Design modules.
*   **Asset Management**: Hashed filenames for long-term caching.
