import { Login, Register } from '@components';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants';
import { Colors } from '@infrastructure/theme';
import useFadeAnimation from '@utils/animations/useFadeAnimation';
import { useState } from 'react';
import { Keyboard, StyleSheet } from 'react-native';
import Svg, { ClipPath, Ellipse, Image } from 'react-native-svg';

import {
  AnimatedView,
  AvoidKeyboard,
  ButtonContainer,
  ButtonLabel,
  CloseButton,
  CloseText,
  FormContainer,
  FormContents,
  GradientView,
  StyledPressable,
  StyledScreen,
} from './style';
import useAccountAnimationStyles from './useAccountAnimationStyles';

type WindowScreen = 'LOGIN' | 'REGISTER';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface AccountScreenProps extends Record<string, any> {}

const AccountScreen: React.FC<AccountScreenProps> = () => {
  const [screen, showScreen] = useState<WindowScreen>('LOGIN');
  const { fadeAnimatedStyle } = useFadeAnimation({});
  const {
    imageAnimationStyle,
    buttonAnimationStyle,
    formAnimationStyle,
    closeBtnAnimationStyle,
    setAnimationValue,
  } = useAccountAnimationStyles({ value: 1 });

  const handleLoginPress = () => {
    setAnimationValue(0);
    showScreen('LOGIN');
  };
  const handleRegisterPress = () => {
    setAnimationValue(0);
    showScreen('REGISTER');
  };
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <StyledScreen>
      <AvoidKeyboard onPress={dismissKeyboard}>
        <GradientView
          colors={[Colors.purple400, Colors.blue400, Colors.purple400]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={StyleSheet.absoluteFill}>
          <AnimatedView style={[StyleSheet.absoluteFill, imageAnimationStyle]}>
            <Svg height={SCREEN_HEIGHT} width={SCREEN_WIDTH}>
              <ClipPath id="clipPathId">
                <Ellipse
                  cx={SCREEN_WIDTH / 2}
                  rx={SCREEN_HEIGHT}
                  ry={SCREEN_HEIGHT}
                />
              </ClipPath>
              <Image
                href={require('@assets/main.png')}
                height={SCREEN_HEIGHT}
                width={SCREEN_WIDTH}
                preserveAspectRatio={'xMidyMid slice'}
                clipPath="url(#clipPathId)"
              />
            </Svg>
          </AnimatedView>

          <ButtonContainer>
            <AnimatedView style={[fadeAnimatedStyle, buttonAnimationStyle]}>
              <StyledPressable onPress={handleLoginPress}>
                <ButtonLabel>{'LOGIN'}</ButtonLabel>
              </StyledPressable>
            </AnimatedView>
            <AnimatedView style={[fadeAnimatedStyle, buttonAnimationStyle]}>
              <StyledPressable onPress={handleRegisterPress}>
                <ButtonLabel>{'REGISTER'}</ButtonLabel>
              </StyledPressable>
            </AnimatedView>
          </ButtonContainer>

          <FormContainer style={[StyleSheet.absoluteFill, formAnimationStyle]}>
            <FormContents>
              <CloseButton style={closeBtnAnimationStyle}>
                <CloseText
                  onPress={() => {
                    dismissKeyboard();
                    setAnimationValue(1);
                  }}>
                  {'X'}
                </CloseText>
              </CloseButton>
              {screen === 'LOGIN' ? <Login /> : <Register />}
            </FormContents>
          </FormContainer>
        </GradientView>
      </AvoidKeyboard>
    </StyledScreen>
  );
};

export default AccountScreen;
