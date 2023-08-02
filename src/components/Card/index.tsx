import { Card as RNCard, CardProps as RNCardProps } from '@rneui/themed';

import { styles as cardStyles } from './style';

interface CardProps extends RNCardProps {
  children?: React.ReactNode;
}

const Card = ({ containerStyle, wrapperStyle, ...props }: CardProps) => {
  return (
    <RNCard
      containerStyle={[cardStyles.container, containerStyle]}
      wrapperStyle={[cardStyles.wrapper, wrapperStyle]}>
      {props.children}
    </RNCard>
  );
};

export default Card;
