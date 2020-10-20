// テーマ切替用
import React, {ReactNode, useContext} from 'react';
import {FullTheme, ThemeContext, ThemeProvider as RNThemeProvider, ThemeProviderProps, ThemeProps} from 'react-native-elements';

type Props<T> = ThemeProviderProps<T> & {children: ReactNode};

export function ThemeProvider<T>({children, ...props}: Props<T>) {
  return <RNThemeProvider {...props}>{children}</RNThemeProvider>;
}

export function useTheme() {
  const {theme} = useContext(ThemeContext) as ThemeProps<FullTheme>;
  return theme;
}
