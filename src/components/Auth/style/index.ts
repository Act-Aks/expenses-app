import { LinearGradient } from 'expo-linear-gradient';
import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styled from 'styled-components';

import { Colors } from '@infrastructure/theme';

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

export const FormButton = styled(Pressable)(props => ({
  backgroundColor: props.theme.colors.cyan600,
  padding: '16px',
  borderRadius: '40px',
  borderWidth: '2px',
  borderColor: 'white',
  shadowColor: props.theme.colors.white,
  shadowOffset: '0px 4px',
  shadowOpacity: '0.35',
  shadowRadius: '5px',
  elevation: '5',
}));

export const ButtonLabel = styled(Text)(props => ({
  fontWeight: 'bold',
  fontSize: '16px',
  alignSelf: 'center',
  color: props.theme.colors.white,
}));
