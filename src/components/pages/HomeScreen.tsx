import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {useLayoutEffect, useState} from 'react';
import {Button, Text} from 'react-native';

import {RouteParams} from '../RouteParams';
import {HeaderTitle} from '../basics';
import {BaseScreen} from '../parts';

type Props = {
  route: RouteProp<RouteParams, 'Home'>;
  navigation: StackNavigationProp<RouteParams, 'Home'>;
};

export const HomeScreen = ({route: {params}, navigation}: Props) => {
  const [now, setNow] = useState(params.now);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Update" onPress={() => setNow(new Date().toISOString())} />,
    });
  });

  return (
    <BaseScreen>
      <Text>Home Screen</Text>
      <Text>{now}</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </BaseScreen>
  );
};

export const HomeHeader = () => (
  <HeaderTitle>
    <Text>🏠 Home</Text>
  </HeaderTitle>
);
