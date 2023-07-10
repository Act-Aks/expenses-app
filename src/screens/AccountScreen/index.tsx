import { Login, Register } from '@components';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, { ClipPath, Ellipse, Image } from 'react-native-svg';

import {
  AnimatedView,
  ButtonContainer,
  ButtonLabel,
  Close,
  CloseButton,
  FormContainer,
  StyledPressable,
  StyledScreen,
} from './style';

type WindowScreen = 'LOGIN' | 'REGISTER';

const AccountScreen: React.FC<object> = () => {
  const { height, width } = Dimensions.get('window');
  const [window, showWindow] = useState<WindowScreen>();
  const imageAnimation = useSharedValue(1);

  const imageAnimationStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imageAnimation.value,
      [0, 1],
      [-height / 2, 0],
    );

    return {
      transform: [
        {
          translateY: withTiming(interpolation, { duration: 1000 }),
        },
      ],
    };
  });

  const buttonAnimationStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imageAnimation.value, [0, 1], [250, 0]);

    return {
      opacity: withTiming(imageAnimation.value, { duration: 500 }),
      transform: [
        {
          translateY: withTiming(interpolation, { duration: 1000 }),
        },
      ],
    };
  });

  const closeBtnAnimationStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imageAnimation.value, [0, 1], [180, 360]);

    return {
      opacity: withTiming(imageAnimation.value === 1 ? 0 : 1, {
        duration: 1000,
      }),
      transform: [
        { rotate: withTiming(interpolation + 'deg', { duration: 1000 }) },
      ],
    };
  });

  const formAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imageAnimation.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const handleLoginPress = () => {
    imageAnimation.value = 0;
    showWindow('LOGIN');
  };
  const handleRegisterPress = () => {
    imageAnimation.value = 0;
    showWindow('REGISTER');
  };

  return (
    <StyledScreen>
      <AnimatedView style={[StyleSheet.absoluteFill, imageAnimationStyle]}>
        <Svg height={height} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse
              cx={SCREEN_WIDTH / 2}
              rx={SCREEN_HEIGHT}
              ry={SCREEN_HEIGHT}
            />
          </ClipPath>
          <Image
            href={require('@assets/main.png')}
            height={height}
            width={width}
            preserveAspectRatio={'xMidyMid slice'}
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <CloseButton style={closeBtnAnimationStyle}>
          <Close onPress={() => (imageAnimation.value = 1)}>{'X'}</Close>
        </CloseButton>
      </AnimatedView>

      <ButtonContainer>
        <AnimatedView style={buttonAnimationStyle}>
          <StyledPressable onPress={handleLoginPress}>
            <ButtonLabel>{'LOGIN'}</ButtonLabel>
          </StyledPressable>
        </AnimatedView>
        <AnimatedView style={buttonAnimationStyle}>
          <StyledPressable onPress={handleRegisterPress}>
            <ButtonLabel>{'REGISTER'}</ButtonLabel>
          </StyledPressable>
        </AnimatedView>
        <FormContainer style={[StyleSheet.absoluteFill, formAnimationStyle]}>
          <Login />
          {window && window === 'REGISTER' && <Register />}
        </FormContainer>
      </ButtonContainer>
    </StyledScreen>
  );
};

export default AccountScreen;
