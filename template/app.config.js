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
      blockedPermissions: [
        'android.permission.READ_EXTERNAL_STORAGE',
        'android.permission.SYSTEM_ALERT_WINDOW',
        'android.permission.VIBRATE',
        'android.permission.WRITE_EXTERNAL_STORAGE',
      ],
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
      appPlugin.withAndroidMoveDevSettingsActivityToDebugAndroidManifest,
      appPlugin.withAndroidRemoveUsesClearTextTrafficForRelease,
      appPlugin.withIosAddPersonalAccountConfig,
    ],
    updates: {
      enabled: false,
    },
  };
  return defaultAppConfig;
};
