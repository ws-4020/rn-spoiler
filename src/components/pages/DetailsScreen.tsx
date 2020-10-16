import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {Button, Text} from 'react-native';

import {RouteParams} from '../RouteParams';
import {Description, HeaderTitle} from '../basics';
import {BaseScreen} from '../parts';

type Props = {
  route: RouteProp<RouteParams, 'Details'>;
  navigation: StackNavigationProp<RouteParams, 'Details'>;
};

export const DetailsScreen = ({route: {params}, navigation}: Props) => {
  return (
    <BaseScreen>
      <Text>Details Screen</Text>
      <Text>Hello, {params?.name}</Text>
      <Description>同じ画面にnavigateしても、画面はスタックには追加されません。</Description>
      <Button title="Go to Details... again" onPress={() => navigation.navigate('Details')} />
      <Description>navigateではなくpushを使うと、同じ画面でも強制的にスタックに追加することが出来ます。</Description>
      <Button title="Force to go to Details... again" onPress={() => navigation.push('Details')} />
      <Description>navigate先の画面がスタックに存在する場合は、その画面までスタックがpopされます。</Description>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home', {now: new Date().toISOString()})} />
      <Description>一つ前のスタックに「戻る」ことができます。</Description>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Description>スタックの先頭の画面に戻ることも出来ます。</Description>
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </BaseScreen>
  );
};

export const DetailsHeader = () => (
  <HeaderTitle>
    <Text>📜 Details</Text>
  </HeaderTitle>
);
