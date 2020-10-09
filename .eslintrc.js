module.exports = {
  // https://github.com/expo/expo/tree/master/packages/eslint-config-universe
  // React Native向けのチェックと、TypeScriptの型情報を利用したチェックを設定しています。
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
