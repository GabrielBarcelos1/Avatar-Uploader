module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-debugger': 'off',
    'no-unused-expressions': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'global-require': 'off',
    'no-unused-vars': 'off',
    semi: ['warn', 'never'],
    camelcase: 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',

    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/sort-comp': 'off',
    'react/forbid-prop-types': 'off',
    'react/default-props-match-prop-types': 'off',

    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',

    'react/no-array-index-key': 'off',
    'react/destructuring-assignment': 'off',
    'no-param-reassign': 'off',
    'import/no-cycle': 0,
    'no-restricted-globals': 'off',
    'react/no-will-update-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    eqeqeq: 'off',
    'no-nested-ternary': 'off',
    'react/no-danger': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'no-bitwise': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'prefer-const': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    radix: 'off',
    'no-prototype-builtins': 'off',
    'import/no-named-as-default': 'off',
    'no-continue': 'off',
  },
}
