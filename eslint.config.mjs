import antfu from "@antfu/eslint-config";

export default antfu(
  {
    formatters: false,
    stylistic: false,
    react: true,
    typescript: true,
    jsx: true,
    lessOpinionated: true,
  },
  {
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
);
