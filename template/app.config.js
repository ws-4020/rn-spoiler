
module.exports = ({config}) => {
  const defaultAppConfig = {
    ...config,
    name: 'HelloWorld',
    version: '1.0',
    android: {
      package: 'com.helloworld',
      allowBackup: false,
    },
    ios: {
      bundleIdentifier: 'org.name.HelloWorld',
      supportsTablet: true,
    },
    plugins: [
      [
        'expo-build-properties',
        {
          android: {
            extraProguardRules: `
# ExpoModulesPakage.ktから、自動生成されたクラスを参照するためにクラス名を利用しているので、クラス名が変わるとアプリが起動しなくなる。
# https://github.com/expo/expo/blob/sdk-43/packages/expo/android/src/main/java/expo/modules/ExpoModulesPackage.kt#L22
-keep class expo.modules.ExpoModulesPackageList { *; }
`,
          },
        },
      ],
    ],
  };
  return defaultAppConfig;
};
