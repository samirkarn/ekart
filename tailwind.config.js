import { Config } from "tailwindcss/defaultConfig"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js, jsx}',
    './components/**/*.{js, jsx}',
    './app/**/*.{js, jsx}',
    './src/**/*.{js, jsx}',
  ],
}

export default config
