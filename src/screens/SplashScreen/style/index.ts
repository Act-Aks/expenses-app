import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

export const SplashContainer = styled(SafeAreaView)({
  display: 'flex',
  flex: 1,
});

export const AnimatedView = styled(Animated.View)``;

export const SplashGradient = styled(LinearGradient)``;
