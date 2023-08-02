import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { Colors, theme } from '@infrastructure/theme';

export const expenseItemStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    backgroundColor: Colors.light.background,
  },
  container: {
    margin: 0,
  },
});

export const StyledDataContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.x6};
  column-gap: ${theme.spacing.x6};
`;

export const Title = styled.Text`
  width: 60%;
  color: ${theme.colors.light.onBackground};
  font-size: ${theme.fontSizes.x7};
  font-weight: 800;
`;

export const Price = styled.Text`
  width: 40%;
  color: ${theme.colors.light.onBackground};
  padding: ${theme.spacing.x4};
  font-size: ${theme.fontSizes.x6};
  border-width: 1px;
  border-radius: ${theme.spacing.x6};
  background: ${theme.colors.light.primaryContainer};
  border-color: ${theme.colors.light.onPrimaryContainer};
  font-weight: 700;
`;
