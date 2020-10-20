import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {WizardScreenDefinition} from '../../parts/WizardScreenDefinition';
import {FormWizardParams, FormWizardScreenProps} from './FormWizardNavigator';

const Definition: WizardScreenDefinition<FormWizardParams> = {
  name: 'Confirm',
  component: Component,
  options: {
    headerTitle: '👀 Confirm',
  },
};
export default Definition;

function Component({navigation}: FormWizardScreenProps<typeof Definition.name>) {
  return (
    <View>
      <Text>Confirm Component</Text>
      <Button title="Next" onPress={() => navigation.navigate('Complete')} />
    </View>
  );
}
