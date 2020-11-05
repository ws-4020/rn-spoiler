import React from 'react';
import {StyleSheet} from 'react-native';
import {Text as RNEText, TextProps} from 'react-native-elements';

const Text: React.FC<TextProps> = ({style, children, ...props}) => {
  return (
    <RNEText style={[styles.text, style]} {...props}>
      {children}
    </RNEText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    marginBottom: 16,
  },
});
