module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Désactiver les règles qui posent problème
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-named-imports': 'off',
    'react/no-context-provider': 'off',
    'react/no-forward-ref': 'off',
    'react-dom/no-dangerously-set-innerhtml': 'off'
  }
};
