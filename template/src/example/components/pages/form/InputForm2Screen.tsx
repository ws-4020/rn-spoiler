import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {WizardScreenDefinition} from '../../parts';
import {FormWizardParams, FormWizardScreenProps} from './FormWizardNavigator';

const Definition: WizardScreenDefinition<FormWizardParams> = {
  name: 'Input2',
  component: Component,
  options: {
    headerTitle: '🖋 Input 2',
  },
};
export default Definition;

function Component({navigation}: FormWizardScreenProps<typeof Definition.name>) {
  return (
    <View>
      <Text>Input Form 2 Component</Text>
      <Button onPress={() => navigation.navigate('Confirm')}>Next</Button>
    </View>
  );
}
