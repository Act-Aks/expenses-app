import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants';
import { Colors } from '@infrastructure/theme';
import useFadeAnimation from '@utils/animations/useFadeAnimation';
import { StyleSheet } from 'react-native';
import Svg, { ClipPath, Ellipse, Image } from 'react-native-svg';

import { AnimatedView, SplashContainer, SplashGradient } from './style';

const SplashScreen: React.FC<object> = () => {
  const { fadeAnimatedStyle } = useFadeAnimation({});

  return (
    <SplashContainer>
      <AnimatedView style={[StyleSheet.absoluteFill, fadeAnimatedStyle]}>
        <SplashGradient
          colors={[Colors.purple400, Colors.blue400, Colors.purple400]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={StyleSheet.absoluteFill}>
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
        </SplashGradient>
      </AnimatedView>
    </SplashContainer>
  );
};

export default SplashScreen;
