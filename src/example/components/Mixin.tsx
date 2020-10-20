import {NavigationContainer, Theme as NavigatorTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';

import {LightTheme, DarkTheme, Theme, ThemeProvider, IsDarkProvider, useIsDark, SyncThemeWithDeviceSettings} from '../themes';

const Mixin: React.FC = ({children}) => {
  return (
    <IsDarkProvider>
      <MixinInner>{children}</MixinInner>
    </IsDarkProvider>
  );
};

const MixinInner: React.FC = ({children}) => {
  // テーマ切替用
  const {isDark} = useIsDark();
  const theme = useMemo<Theme & NavigatorTheme>(() => (isDark ? DarkTheme : LightTheme), [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <SyncThemeWithDeviceSettings>{children}</SyncThemeWithDeviceSettings>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Mixin;
