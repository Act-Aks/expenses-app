import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import styled from 'styled-components';

import { Colors } from '@infrastructure/theme';

export const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.cyan600,
    padding: 16,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.white,
    shadowColor: Colors.white,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
  },
  disabledBtnStyle: {
    backgroundColor: Colors.gray300,
    borderColor: Colors.red500,
    shadowColor: Colors.gray200,
  },
});

export const GradientForm = styled(LinearGradient)<{ loading?: boolean }>`
  border-radius: 20px;
  border-width: 2px;
  border-color: ${Colors.amber100};
  opacity: ${props => (props.loading ? '0' : '1')};
`;

export const FormInputContainer = styled(View)({
  gap: '16px',
  padding: '16px',
});

export const FormInputs = styled(KeyboardAvoidingView)({
  gap: '8px',
});
