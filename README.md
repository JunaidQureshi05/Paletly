# 🎨 Palately

_A sleek web application to explore color palettes and create your own custom color collections._

---

## 🚀 Technologies Used

- **React + TypeScript**
- **Material UI** (with HOC for JSS styling)
- **Chroma.js** – for color manipulation, shade generation, and format conversions
- **Basic UI Libraries** – for layout and interactivity

---

## 🌟 Features

- ⚡ **Fast and seamless UI** with zero page reloads
- 🎨 **Pre-made color palettes** for quick access
- 🛠️ **Custom palette creation** with drag-and-drop support
- 🌈 **Adjustable color levels** – view lighter or darker shades easily
- 🔍 **Single-color view** – explore a full range of shades (100–900 levels)
- 📋 **One-click copy** – click any color box to copy its code
- 🔄 **Switch color formats** – HEX, RGB, and RGBA
- 🎭 **Smooth page transitions** with fade-in animations
- 🧩 **Drag colors** to arrange side-by-side comparisons
- 🗑️ **Delete palettes** you no longer need

---

<pre lang="markdown"><code>```text src/ ├── components/ # Reusable UI components (ColorBox, Navbar, MiniPalette, etc.) ├── utils/ # Utility functions (e.g., color generation, helpers) ├── pages/ # Page-level components (Palette view, Create new palette, etc.) ├── context/ # React Context providers for global state ├── seedColor.ts # Predefined seed colors ├── App.tsx # Main application wrapper ├── main.tsx # Entry point └── index.css # Global styles ```</code></pre>
