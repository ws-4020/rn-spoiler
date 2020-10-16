import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {Button, Text} from 'react-native';

import {RouteParams} from '../RouteParams';
import {HeaderTitle} from '../basics';
import {BaseScreen} from '../parts';

type Props = {
  route: RouteProp<RouteParams, 'Home'>;
  navigation: StackNavigationProp<RouteParams, 'Home'>;
};

export const HomeScreen = ({route: {params}, navigation}: Props) => {
  return (
    <BaseScreen>
      <Text>Home Screen</Text>
      <Text>{params.now}</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </BaseScreen>
  );
};

export const HomeHeader = () => (
  <HeaderTitle>
    <Text>🏠 Home</Text>
  </HeaderTitle>
);
