# tailwind css

- https://v3.tailwindcss.com/docs/guides/nextjs

## install

```shell
npx create-next-app@latest my-project --typescript --eslint
cd my-project
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.js

```shell
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```shell
npm run dev
```

```tsx
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

