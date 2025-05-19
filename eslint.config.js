import js from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    // Aplica a todos tus .js y .jsx
    files: ["**/*.{js,jsx}"],

    // Configuramos el parser nativo de ESLint para entender JSX
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
      },
    },

    plugins: {
      js,
      react: pluginReact,
    },

    rules: {
      // No hace falta importar React en scope
      "react/react-in-jsx-scope": "off",
      // Enlaces target="_blank" seguros
      "react/jsx-no-target-blank": ["error", { allowReferrer: false }],
      // Prohíbe “;”
      semi: ["error", "never"],
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Aplica las reglas recomendadas de react en flat config

])
