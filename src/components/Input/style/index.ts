import { StyleSheet, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '@infrastructure/theme';

type WithError = { hasError?: boolean };

export const StyledInput = styled.View`
  background: ${theme.colors.violet300};
  flex-direction: row;
  justify-contents: center;
  align-items: center;
  border-radius: ${theme.spacing.x3};
  border-width: ${theme.spacing.x1};
  border-color: ${(props: WithError) =>
    props.hasError ? theme.colors.red800 : theme.colors.amber100};
`;

export const StyledPressable = styled.Pressable`
  justify-contents: center;
  align-items: center;
  width: 15%;
`;

export const IconContainer = styled.View`
  justify-contents: center;
  align-items: center;
  width: 15%;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  padding: 12px;
  color: ${(props: WithError) =>
    props.hasError ? theme.colors.red700 : theme.colors.purple900};
  font-weight: 600;
`;
