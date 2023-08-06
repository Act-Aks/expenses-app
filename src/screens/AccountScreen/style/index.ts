import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

import { SCREEN_HEIGHT } from '@constants';

export const StyledScreen = styled(SafeAreaView)({
  flex: 1,
});

export const GradientView = styled(LinearGradient)`
  justify-content: flex-end;
`;

export const AnimatedView = styled(Animated.View)({
  position: 'relative',
  zIndex: '1',
});

export const CloseButton = styled(Animated.View)(props => ({
  backgroundColor: props.theme.colors.purple300,
  shadowOpacity: '0.5',
  shadowRadius: '5px',
  shadowColor: props.theme.colors.purple950,
  borderWidth: '2px',
  borderColor: props.theme.colors.purple500,
  shadowOffset: '0px 5px',
  elevation: '5',
  borderRadius: '20px',
  height: '40px',
  width: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: '3px',
  zIndex: '2',
}));

export const CloseText = styled(Text)(props => ({
  color: props.theme.colors.purple500,
  fontWeight: 'bold',
  fontSize: '16px',
  height: '100%',
  width: '100%',
  borderRadius: '20px',
  textAlign: 'center',
  textAlignVertical: 'center',
}));

export const ButtonContainer = styled(View)({
  gap: '16px',
  height: `${SCREEN_HEIGHT / 3}px`,
  padding: '16px',
  zIndex: '1',
});

export const FormContainer = styled(Animated.View)({
  justifyContent: 'center',
  alignSelf: 'center',
});

export const FormContents = styled(View)({
  position: 'relative',
  width: '100%',
  padding: '20px',
});

export const StyledPressable = styled(Pressable)(props => ({
  backgroundColor: props.theme.colors.purple950,
  padding: '16px',
  borderRadius: '40px',
  borderWidth: '2px',
  borderColor: 'white',
}));

export const ButtonLabel = styled(Text)(props => ({
  fontWeight: 'bold',
  fontSize: '16px',
  alignSelf: 'center',
  color: props.theme.colors.white,
}));
