import { Login, Register } from '@components';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants';
import { Colors } from '@infrastructure/theme';
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

const AccountScreen: React.FC<object> = () => {
  const [screen, showScreen] = useState<WindowScreen>('LOGIN');
  const {
    animation,
    imageAnimationStyle,
    buttonAnimationStyle,
    formAnimationStyle,
    closeBtnAnimationStyle,
  } = useAccountAnimationStyles({ value: 1 });

  const handleLoginPress = () => {
    animation.value = 0;
    showScreen('LOGIN');
  };
  const handleRegisterPress = () => {
    animation.value = 0;
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
          </ButtonContainer>

          <FormContainer style={[StyleSheet.absoluteFill, formAnimationStyle]}>
            <FormContents>
              <CloseButton style={closeBtnAnimationStyle}>
                <CloseText
                  onPress={() => {
                    dismissKeyboard();
                    animation.value = 1;
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
