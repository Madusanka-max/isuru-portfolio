import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/quotes": "off",
      "quotes": ["off"],
      "no-useless-escape": "off",
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
  },
];

export default eslintConfig;