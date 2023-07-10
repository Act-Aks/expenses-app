import { Pressable, Text, TextInput, View } from 'react-native';
import styled from 'styled-components';

export const FormInputContainer = styled(View)({
  gap: '16px',
});

export const FormInputs = styled(View)({
  gap: '8px',
});

export const Input = styled(TextInput).attrs(props => ({
  placeholderTextColor: props.theme.colors.bg.purple700,
}))(props => ({
  gap: '8px',
  height: '50px',
  borderWidth: '1px',
  borderColor: props.theme.colors.bg.purple700,
  borderRadius: '25px',
  padding: '12px',
}));

export const LoginFormButton = styled(Pressable)(props => ({
  backgroundColor: props.theme.colors.bg.purple500,
  padding: '16px',
  borderRadius: '40px',
  borderWidth: '2px',
  borderColor: 'white',
  shadowColor: props.theme.colors.bg.gray600,
  shadowOffset: '0px 4px',
  shadowOpacity: '0.35',
  shadowRadius: '5px',
  elevation: '5',
}));

export const ButtonLabel = styled(Text)(props => ({
  fontWeight: 'bold',
  fontSize: '16px',
  alignSelf: 'center',
  color: props.theme.colors.bg.white,
}));
