module.exports = {
  // universe/native: https://github.com/expo/expo/tree/master/packages/eslint-config-universe
  // react-hooks: https://ja.reactjs.org/docs/hooks-rules.html
  extends: ['universe/native', 'plugin:react-hooks/recommended'],
  overrides: [
    {
      // universe/shared/typescript-analysis: https://github.com/expo/expo/tree/master/packages/eslint-config-universe
      // recommended-requiring-type-checking: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
      extends: ['universe/shared/typescript-analysis', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        // It is too strict to prohibit passing async functions to `onPress`, so disable the rule in JSX.
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
      },
    },
    {
      files: ['metro.config.js'],
      env: {
        node: true,
      },
    },
  ],
};
