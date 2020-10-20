import {Theme as NavigatorTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

import {ColorPalette} from './ColorPalette';
import {Theme} from './react-native-elements';

const NavigatorColors: NavigatorTheme['colors'] = {
  primary: ColorPalette.blue,
  background: ColorPalette.gray100,
  card: ColorPalette.gray100,
  text: ColorPalette.darkGray,
  border: ColorPalette.gray500,
  notification: ColorPalette.pink,
};

export const LightTheme: Theme & NavigatorTheme = {
  dark: false,
  colors: {
    ...NavigatorColors,
    white: '#fff',
    black: '#000', // 000はきつい 323232とかが
    secondary: '#ca71eb',
    grey0: '#393e42',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    greyOutline: '#bbb',
    searchBg: '#303337',
    success: '#52c41a',
    error: '#ff190c',
    warning: '#faad14',
    disabled: 'hsl(208, 8%, 90%)',
    // Darker color if hairlineWidth is not thin enough
    divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
    platform: {
      ios: {
        primary: '#007aff',
        secondary: '#5856d6',
        success: '#4cd964',
        error: '#ff3b30',
        warning: '#ffcc00',
      },
      android: {
        primary: '#2196f3',
        secondary: '#9C27B0',
        success: '#4caf50',
        error: '#f44336',
        warning: '#ffeb3b',
      },
    },
  },
};
