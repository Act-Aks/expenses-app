import styled from 'styled-components/native';

import { theme } from '@infrastructure/theme';

export const StyledExpenseDate = styled.View`
  width: 25%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-style: solid;
  border-radius: ${theme.spacing.x6};
  background: ${theme.colors.light.onSecondaryContainer};
  padding: ${theme.spacing.x2};
`;

export const StyledMonth = styled.Text`
  font-weight: bold;
  font-size: ${theme.fontSizes.x6};
  color: ${theme.colors.light.onSecondary};
`;

export const StyledYear = styled.Text`
  font-size: ${theme.fontSizes.x6};
  color: ${theme.colors.light.onSecondary};
`;

export const StyledDay = styled.Text`
  font-weight: bold;
  font-size: ${theme.fontSizes.x9};
  color: ${theme.colors.light.onSecondary};
`;
