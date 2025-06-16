module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'eslint:recommended'],
  plugins: ['react', 'react-hooks', 'perfectionist'],
  rules: {
    // Désactiver les règles qui posent problème
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-named-imports': 'off',
    'react/no-context-provider': 'off',
    'react/no-forward-ref': 'off',
    'react-dom/no-dangerously-set-innerhtml': 'off'
  },
  ignorePatterns: ['.next/', 'node_modules/', 'public/']
};
