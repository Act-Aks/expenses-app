import { useState } from 'react';
import { TextInputProps } from 'react-native';

import Icon, { IconProps, IconType } from '@components/Icon';
import { Colors } from '@infrastructure/theme';

import {
  IconContainer,
  StyledInput,
  StyledPressable,
  StyledTextInput,
} from './style';

type InputType = 'Password' | 'Normal';

type InputProps = TextInputProps & {
  headProps?: IconProps;
  tailProps?: IconProps;
  type?: InputType;
  hasError?: boolean;
};

const Input = ({
  placeholder,
  value,
  onChangeText,
  headProps,
  tailProps,
  type = 'Normal',
  autoCapitalize = 'none',
  placeholderTextColor = Colors.purple.opacity30,
  hasError,
}: InputProps) => {
  const [hidePassword, setHidePassword] = useState(true);

  const onPressEyeIcon = () => setHidePassword(t => !t);

  const renderIcon = (iconProps: IconProps) => (
    <IconContainer>
      <Icon size={24} {...iconProps} />
    </IconContainer>
  );

  return (
    <StyledInput hasError={hasError}>
      {headProps && renderIcon(headProps)}
      <StyledTextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        secureTextEntry={type === 'Password' && hidePassword}
        autoCapitalize={autoCapitalize}
        hasError={hasError}
      />
      {type === 'Password' ? (
        <StyledPressable onPress={onPressEyeIcon}>
          <Icon
            size={24}
            type={IconType.Entypo}
            name={hidePassword ? 'eye' : 'eye-with-line'}
            color={Colors.purple700}
          />
        </StyledPressable>
      ) : (
        tailProps && renderIcon(tailProps)
      )}
    </StyledInput>
  );
};

export default Input;
