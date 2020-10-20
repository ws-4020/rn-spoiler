import {Theme as NavigatorTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProps, withTheme} from 'react-native-elements';

import {LightTheme, DarkTheme} from '.';
import {useIsDark} from './IsDarkProvider';

const SyncThemeWithDeviceSettingsInner: React.FC<ThemeProps<NavigatorTheme>> = (props) => {
  const {updateTheme, children} = props;
  const {setIsDark} = useIsDark();

  const colorScheme = useColorScheme();
  useEffect(() => {
    const nextIsDark = colorScheme?.toString() === 'dark';
    const nextTheme = nextIsDark ? DarkTheme : LightTheme;
    setIsDark(nextIsDark);
    updateTheme(nextTheme);
  }, [colorScheme]);

  return <>{children}</>;
};

export const SyncThemeWithDeviceSettings = withTheme(SyncThemeWithDeviceSettingsInner);
