import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native-elements';
import {createNativeStackNavigator, NativeStackNavigationProp} from 'react-native-screens/native-stack';

import {AppRouteProps} from '../../MainNavigator';
import InputForm1Screen from './InputForm1Screen';
import InputForm2Screen from './InputForm2Screen';
import InputFormCompleteScreen from './InputFormCompleteScreen';
import InputFormConfirmScreen from './InputFormConfirmScreen';

// このウィザードで利用する画面と、それらの画面が受け取るパラメータの一覧です。
export type FormWizardParams = {
  Input1: undefined;
  Input2: undefined;
  Confirm: undefined;
  Complete: undefined;
};

// このウィザードで利用する画面がComponentのPropsとして受け取る値の型です。
export type FormWizardScreenProps<T extends keyof FormWizardParams> = {
  route: RouteProp<FormWizardParams, T>;
  navigation: NativeStackNavigationProp<FormWizardParams, T> & NativeStackNavigationProp<AppRouteProps, keyof AppRouteProps>;
};

// ウィザード内でナビゲーションするためのスタックを定義します。
const Stack = createNativeStackNavigator<FormWizardParams>();

// デフォルトでは戻る先の画面名は表示しないようにしています。
const defaultScreenOptions = {headerBackTitle: '', headerBackTitleVisible: false};

// このウィザードで表示する画面の一覧を定義します。
const screens = [InputForm1Screen, InputForm2Screen, InputFormConfirmScreen, InputFormCompleteScreen];

// 画面をナビゲータに登録します。
function Component() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      {screens.map((screen) => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
}

export default {
  name: 'Wizard',
  component: Component,
  options: {
    tabBarIcon: () => <Text>🖋</Text>,
  },
};
