import React, {useContext, useMemo} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Text, ThemeContext} from 'react-native-elements';
import Animated, {Easing, Value, timing, Clock, block, startClock, cond, set, useCode, not, clockRunning, eq} from 'react-native-reanimated';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const screenWidth = Dimensions.get('window').width;
const progress = (clock: Clock, from: number, to: number) => {
  const progress = {
    finished: new Value(0),
    position: new Value(from),
    time: new Value(0),
    frameTime: new Value(0),
  };
  const config = {
    duration: 2000,
    toValue: to,
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    // we run the step here that is going to update position
    cond(not(clockRunning(clock)), set(progress.time, 0), timing(clock, progress, config)),
    cond(eq(progress.finished, 1), [set(progress.finished, 0), set(progress.position, from), set(progress.frameTime, 0), set(progress.time, 0)]),
    progress.position,
  ]);
};

const Arrow = () => {
  const from = (-screenWidth / 2) * 0.85;
  const to = (screenWidth / 2) * 0.4;
  const {x, opacity, clock} = useMemo(
    () => ({
      x: new Value(from),
      opacity: new Value(1),
      clock: new Clock(),
    }),
    [],
  );

  useCode(() => block([cond(not(clockRunning(clock)), startClock(clock)), set(x, progress(clock, from, to)), set(opacity, progress(clock, 1, 0))]), [
    x,
    clock,
  ]);

  return (
    <Animated.View style={{transform: [{translateX: x}], opacity, flex: 1, justifyContent: 'center'}}>
      <FontAwesome5Icon name="angle-right" style={StyleSheet.flatten([styles.textColor, styles.arrowStyle])} />
    </Animated.View>
  );
};

const HelloWorld = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={StyleSheet.flatten([StyleSheet.absoluteFillObject, styles.container, {backgroundColor: theme.colors?.primary}])}>
      <Arrow />
      <Text h1 style={styles.textColor}>
        Hello, World!
      </Text>
      <View style={styles.caption}>
        <Text style={StyleSheet.flatten([styles.textColor, styles.captionText])}>Swipe right to show menu</Text>
      </View>
      <Arrow />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    marginVertical: 20,
  },
  captionText: {
    fontSize: 30,
  },
  textColor: {
    color: '#fefefe',
  },
  arrowStyle: {
    fontSize: 100,
  },
});

export default {
  name: 'Hello World',
  component: HelloWorld,
  options: {headerShown: false},
};
