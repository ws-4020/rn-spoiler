import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, ThemeContext} from 'react-native-elements';

export const Component = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={StyleSheet.flatten([StyleSheet.absoluteFillObject, styles.container, {backgroundColor: theme.colors?.primary}])}>
      <Text h1 style={styles.textColor}>
        Hello, World!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#fefefe',
  },
});
