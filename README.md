# SOC Analytics | Command Center SPA

## Project Overview
"SOC Analytics" is a front-end simulation of an Enterprise Security Operations Center dashboard. This project serves as the final deliverable for Week 5, demonstrating how to build a Single Page Application (SPA) using Vanilla HTML, CSS, and JavaScript. It features client-side routing, DOM manipulation, and dynamic state management wrapped in a highly technical "Dark Mode" security aesthetic.

## Key Technical Features
*Client-Side Routing (History API): Utilizes `history.pushState()` and `window.addEventListener('popstate')` to allow users to navigate between views without full page reloads. The URL updates dynamically (e.g., `/?page=network`), and browser Back/Forward buttons function natively.
*Dynamic DOM Manipulation:Custom JavaScript intercepts anchor clicks, handles route validation, and dynamically renders content sections using native Web Animations API for smooth transitions.
*Interactive Threat Calculator: A custom widget that calculates theoretical network exposure based on user input, complete with strict form validation and dynamic UI color-shifting based on risk severity.
*Security Aesthetic (Dark Mode): Designed with a professional SOC palette (#0f111a backgrounds, #3b82f6 accents) ensuring high WCAG contrast ratios.

## Tech Stack
* HTML5: Semantic architecture with built-in ARIA roles for accessibility.
* CSS3: Custom CSS variables, CSS Grid layouts, and responsive design techniques.
* Vanilla JavaScript: Event-driven architecture, History API integration, and mathematical calculations. No external frameworks (React, Vue) or libraries were used.

## How to Run Locally
This SPA utilizes native browser features and requires no build steps.
1. Clone or download the repository.
2. Ensure `index.html`, `style.css`, and `script.js` are in the same directory.
3. Open `index.html` in any modern web browser.
