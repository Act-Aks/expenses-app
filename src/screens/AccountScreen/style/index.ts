import { SCREEN_HEIGHT } from '@constants';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

export const StyledScreen = styled(SafeAreaView)({
  flex: 1,
  justifyContent: 'flex-end',
});

export const AnimatedView = styled(Animated.View)({});

export const CloseButton = styled(Animated.View)(props => ({
  backgroundColor: props.theme.colors.bg.white,
  shadowOpacity: '0.5',
  shadowRadius: '5px',
  shadowColor: props.theme.colors.bg.black,
  shadowOffset: '0px 5px',
  elevation: '5',
  borderRadius: '20px',
  height: '40px',
  width: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  top: '-20px',
}));

export const Close = styled(Text)(props => ({
  color: props.theme.colors.bg.black,
  fontWeight: 'bold',
  fontSize: '16px',
}));

export const ButtonContainer = styled(View)({
  gap: '16px',
  height: `${SCREEN_HEIGHT / 3}px`,
  padding: '16px',
});

export const FormContainer = styled(Animated.View)(props => ({
  height: `${SCREEN_HEIGHT / 3}px`,
  padding: '16px',
  zIndex: '-1',
  gap: '16px',
}));

export const StyledPressable = styled(Pressable)(props => ({
  backgroundColor: props.theme.colors.bg.purple500,
  padding: '16px',
  borderRadius: '40px',
  borderWidth: '2px',
  borderColor: 'white',
}));

export const ButtonLabel = styled(Text)(props => ({
  fontWeight: 'bold',
  fontSize: '16px',
  alignSelf: 'center',
  color: props.theme.colors.bg.white,
}));
