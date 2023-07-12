import { Colors } from '@infrastructure/theme';
import { LinearGradient } from 'expo-linear-gradient';
import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styled from 'styled-components';

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

export const Input = styled(TextInput).attrs(props => ({
  placeholderTextColor: props.theme.colors.amber300,
}))(props => ({
  gap: '8px',
  height: '50px',
  borderWidth: '1px',
  borderColor: props.theme.colors.amber100,
  borderRadius: '25px',
  padding: '12px',
  backgroundColor: props.theme.colors.violet500,
  color: props.theme.colors.white,
}));

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
