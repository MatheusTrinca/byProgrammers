// OnBoarding Screen
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';

// Constants
import {images, theme} from '../../constants';
const {onBoarding1, onBoarding2, onBoarding3} = images;

// Theme
const {COLORS, FONTS, SIZES} = theme;

// Dummy Data
const onBoardings = [
  {
    title: "Let's Travelling",
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, ullam!',
    img: onBoarding1,
  },
  {
    title: 'Navigation',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, ullam!',
    img: onBoarding2,
  },
  {
    title: 'Destination',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, ullam!',
    img: onBoarding3,
  },
];

const OnBoarding = () => {
  const [completed, setCompleted] = useState(false);

  const scrollX = new Animated.Value(0);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });
    return () => scrollX.removeListener();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        snapToAlignment="center"
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}>
        {onBoardings.map((item, index) => (
          <View key={index} style={{width: SIZES.width}}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={item.img}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: '10%',
                left: 40,
                right: 40,
              }}>
              <Text
                style={{...FONTS.h1, color: COLORS.gray, textAlign: 'center'}}>
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.gray,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                }}>
                {item.description}
              </Text>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 150,
                height: 60,
                paddingLeft: 20,
                justifyContent: 'center',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                backgroundColor: COLORS.blue,
              }}>
              <Text style={{...FONTS.h1, color: COLORS.white}}>
                {completed ? "Let's go" : 'Skip'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, {width: dotSize, height: dotSize}]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '30%' : '23%',
  },
});

// 15:50
