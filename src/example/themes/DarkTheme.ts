// テーマ切替用
import {Theme as NavigatorTheme} from '@react-navigation/native';

import {LightTheme} from './LightTheme';
import {Theme} from './react-native-elements';

const _DarkTheme = JSON.parse(JSON.stringify(LightTheme)) as Theme & NavigatorTheme;

_DarkTheme.colors.black = '#ff1100';
_DarkTheme.colors.text = '#ffaa00';
_DarkTheme.dark = true;

export const DarkTheme = _DarkTheme;
