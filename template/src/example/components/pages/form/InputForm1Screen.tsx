import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {WizardScreenDefinition} from '../../parts';
import {FormWizardParams, FormWizardScreenProps} from './FormWizardNavigator';

// この画面をどのようにNavigatorに登録するかを定義します。
const Definition: WizardScreenDefinition<FormWizardParams> = {
  // この画面のナビゲーション内での名前です。navigation.navigate('Input1')のようにして、この画面に遷移してくることが出来ます。
  name: 'Input1',
  // この画面で表示するコンポーネントです。
  component: Component,
  // この画面を表示するときにNavigatorが利用するオプションです。
  options: {
    // タイトルはデフォルトでは`name`の値が利用されますが、ここでは少し変更しています。
    headerTitle: '🖋 Input 1',
  },
};
export default Definition;

function Component({navigation}: FormWizardScreenProps<typeof Definition.name>) {
  return (
    <View>
      <Text>Input Form 1 Component</Text>
      <Button onPress={() => navigation.navigate('Input2')}>Next</Button>
    </View>
  );
}
