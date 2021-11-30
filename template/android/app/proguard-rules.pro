# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# React Native ReanimatedからTurbomoduleを使うための設定
# https://docs.swmansion.com/react-native-reanimated/docs/2.2.0/installation
-keep class com.facebook.react.turbomodule.** { *; }
