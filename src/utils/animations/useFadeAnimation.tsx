import { useEffect } from 'react';
import {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type UseFadeAnimationProps = {
  value: number;
  end: number;
  duration: number;
};

const useFadeAnimation = ({
  value,
  end,
  duration,
}: Partial<UseFadeAnimationProps>) => {
  const animation = useSharedValue(value ?? 0);
  const fadeAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animation.value,
    };
  });

  useEffect(() => {
    animation.value = withTiming(end ?? 1, {
      duration: duration ?? 1000,
      easing: Easing.linear,
    });

    return () => cancelAnimation(animation);
  }, []);

  return {
    animation,
    fadeAnimatedStyle,
  };
};

export default useFadeAnimation;
