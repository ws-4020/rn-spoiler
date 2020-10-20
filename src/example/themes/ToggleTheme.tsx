// テーマ切替用
import {Theme as NavigatorTheme} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {withTheme, Button, ThemeProps, Theme} from 'react-native-elements';

import {LightTheme, DarkTheme} from './';
import {useIsDark} from './IsDarkProvider';

function nextIsDark(theme: Theme<NavigatorTheme>) {
  return !theme.dark;
}

function nextTheme(theme: Theme<NavigatorTheme>) {
  return nextIsDark(theme) ? DarkTheme : LightTheme;
}

function ToggleThemeInner(props: ThemeProps<NavigatorTheme>) {
  const {theme, updateTheme} = props;

  const {setIsDark} = useIsDark();

  const toggleTheme = useCallback(() => {
    setIsDark(nextIsDark(theme));
    updateTheme(nextTheme(theme));
  }, [theme]);

  return <Button title={`to ${theme.dark ? 'Light' : 'Dark'})`} onPress={toggleTheme} />;
}

export const ToggleTheme = withTheme(ToggleThemeInner);
