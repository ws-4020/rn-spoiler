import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {WizardScreenDefinition} from '../../parts';
import {FormWizardParams, FormWizardScreenProps} from './FormWizardNavigator';

const Definition: WizardScreenDefinition<FormWizardParams> = {
  name: 'Complete',
  component: Component,
  options: {
    headerTitle: '✔️ Complete',
    headerHideBackButton: true,
  },
};
export default Definition;

function Component({navigation}: FormWizardScreenProps<typeof Definition.name>) {
  return (
    <View>
      <Text>Confirm Component</Text>
      <Button onPress={() => navigation.navigate('Home')}>Back to Home</Button>
    </View>
  );
}
