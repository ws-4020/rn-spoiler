import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App.tsx';

// https://github.com/facebook/jest/issues/6434#issuecomment-525576660
jest.useFakeTimers();

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<App />);
});
