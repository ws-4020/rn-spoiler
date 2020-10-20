// テーマ切替用
import {Theme as NavigatorTheme, useTheme as useNavigatorTheme} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Text, withTheme, Button, ThemeProps} from 'react-native-elements';

import {LightTheme, DarkTheme} from './';
import {useIsDark} from './IsDarkProvider';

const ToggleThemeInner = (props: ThemeProps<NavigatorTheme>) => {
  const {theme, updateTheme} = props;

  const {setIsDark} = useIsDark();

  const navigatorTheme = useNavigatorTheme();

  const toggleTheme = useCallback(() => {
    const nextIsDark = !theme.dark;
    setIsDark(nextIsDark);
    const nextTheme = nextIsDark ? DarkTheme : LightTheme;
    updateTheme(nextTheme);
  }, [theme]);

  return (
    <>
      <Button title={`Toggle Theme (current = ${theme.dark ? 'Dark' : 'Light'})`} onPress={toggleTheme} />
      <Text style={{color: theme.colors.black}}>theme.colors.black = {theme.colors.black}</Text>
      <Text style={{color: navigatorTheme.colors.text}}>navigatorTheme.colors.text = {navigatorTheme.colors.text}</Text>
    </>
  );
};

export const ToggleTheme = withTheme(ToggleThemeInner);
