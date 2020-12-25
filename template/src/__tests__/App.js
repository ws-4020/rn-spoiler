import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import {act, create} from 'react-test-renderer';

import {App} from '../App';

it('renders correctly', async () => {
  await act(async () => {
    create(<App />);
  });
});
