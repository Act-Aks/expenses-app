import { SCREEN_WIDTH } from '@constants';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const useAccountAnimationStyles = ({ value }: { value: number }) => {
  const animation = useSharedValue(value ?? 0);

  const imageAnimationStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      animation.value,
      [0, 1],
      [-SCREEN_WIDTH, 0],
    );

    return {
      transform: [
        {
          translateX: withTiming(interpolation, { duration: 1000 }),
        },
      ],
    };
  });

  const buttonAnimationStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(animation.value, [0, 1], [250, 0]);

    return {
      opacity: withTiming(animation.value, { duration: 500 }),
      transform: [
        {
          translateY: withTiming(interpolation, { duration: 1000 }),
        },
      ],
    };
  });

  const closeBtnAnimationStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(animation.value, [0, 1], [180, 360]);

    return {
      opacity: withTiming(animation.value === 1 ? 0 : 1, {
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
        animation.value === 0
          ? withDelay(600, withTiming(1, { duration: 600 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  return {
    animation,
    buttonAnimationStyle,
    closeBtnAnimationStyle,
    formAnimationStyle,
    imageAnimationStyle,
  };
};

export default useAccountAnimationStyles;
