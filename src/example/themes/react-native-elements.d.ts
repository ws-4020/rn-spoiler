import {Colors, FullTheme} from 'react-native-elements';

declare module 'react-native-elements' {
  // react-native-elementsの型定義に不足しているプロパティを定義する
  export interface Colors {
    black: string;
    white: string;
  }

  export interface FullTheme {
    colors: Colors;
  }
}

// テーマの定義において、ColorだけはIFの全プロパティを定義させたい
export type Theme = Partial<Omit<FullTheme, 'colors'>> & {colors: Colors};
