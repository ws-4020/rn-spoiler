// テーマ切替用
import {Theme as NavigatorTheme} from '@react-navigation/native';
import React, {PropsWithChildren, useEffect} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeProps, withTheme} from 'react-native-elements';

import {LightTheme, DarkTheme} from '.';
import {useIsDark} from './IsDarkProvider';

function isDark(scheme: ColorSchemeName) {
  return scheme === 'dark';
}

function getTheme(scheme: ColorSchemeName) {
  return isDark(scheme) ? DarkTheme : LightTheme;
}

function SyncThemeWithDeviceSettingsInner(props: PropsWithChildren<ThemeProps<NavigatorTheme>>) {
  const {updateTheme, children} = props;
  const {setIsDark} = useIsDark();

  const colorScheme = useColorScheme();
  useEffect(() => {
    setIsDark(isDark(colorScheme));
    updateTheme(getTheme(colorScheme));
  }, [colorScheme]);

  return <>{children}</>;
}

export const SyncThemeWithDeviceSettings = withTheme(SyncThemeWithDeviceSettingsInner);
