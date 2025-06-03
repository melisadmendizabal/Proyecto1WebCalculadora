import js from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import parserBabel from "@babel/eslint-parser"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      parser: parserBabel,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaVersion: "latest",
        sourceType: "module",
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
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": ["error", { allowReferrer: false }],
      semi: ["error", "never"],
      "max-len": ["error", { "code": 120 }],
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  }
])
