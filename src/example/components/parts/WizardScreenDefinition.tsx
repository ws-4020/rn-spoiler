import {RouteConfig, StackNavigationState} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/routers';
import {PropsWithChildren} from 'react';
import {NativeStackNavigationEventMap, NativeStackNavigationOptions} from 'react-native-screens/lib/typescript/types';

export type WizardScreenDefinition<ParamList extends ParamListBase> = PropsWithChildren<
  RouteConfig<ParamList, keyof ParamList, StackNavigationState, NativeStackNavigationOptions, NativeStackNavigationEventMap>
>;
