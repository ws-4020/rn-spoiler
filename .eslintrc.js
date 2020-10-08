module.exports = {
  // https://github.com/expo/expo/tree/master/packages/eslint-config-universe
  // React Native向けの設定と、TypeScriptの型チェックを設定しています。
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};
