import * as appPlugin from './config/app.plugin.js';

module.exports = ({config}) => {
  const defaultAppConfig = {
    ...config,
    name: 'HelloWorld',
    version: '1.0',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
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
# https://github.com/expo/expo/blob/sdk-46/packages/expo/android/src/main/java/expo/modules/ExpoModulesPackage.kt#L23
-keep class expo.modules.ExpoModulesPackageList { *; }
`,
          },
        },
      ],
      appPlugin.withAndroidMoveDevSettingsActivityToDebugAndroidManifest,
      appPlugin.withIosAddPersonalAccountConfig,
    ],
  };
  return defaultAppConfig;
};
