# CRUSH.md - Build Your Own Card

## Development Commands
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Code Style Guidelines

### Imports & Exports
- Use relative imports: `import Header from "./components/Header"`
- Group imports: React imports first, then local components
- Use default exports for all React components
- Keep imports at top of file, no inline imports

### Naming Conventions
- **Components**: PascalCase (Button.jsx, CardPreview.jsx)
- **Functions/Variables**: camelCase (onChange, setName, cardToImage)
- **Props**: camelCase (onClick, style, value)
- **CSS Variables**: kebab-case (--color-bg, --space-sm)

### Component Structure
- Define components as arrow functions or function declarations
- Use destructured props: `export default function Button({ children, onClick, style })`
- Define styles as objects at bottom of component file
- Use inline styles with spread operator: `...style`
- Include Chinese comments for UI sections when appropriate

### Styling Patterns
- Use CSS variables from `theme.css` for colors and spacing
- Combine Tailwind CSS with custom CSS variables
- Define style objects with consistent spacing: `padding: '24px'`
- Use `var(--color-border)` for border colors
- Apply transitions for interactive elements

### File Organization
- Components go in `src/components/`
- Utilities go in `src/utils/`
- Styles go in `src/styles/` (global.css for Tailwind, theme.css for variables)
- Keep component files focused and single-purpose

### Error Handling
- Use basic alert for placeholder functionality: `alert("功能待完善")`
- No complex error boundaries or try-catch needed for current scope

### Project Structure
- React + Vite with TypeScript (JSX files)
- Tailwind CSS + PostCSS for styling
- Brutalist design aesthetic with thick borders
- Business card builder application