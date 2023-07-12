import { Colors } from '@infrastructure/theme';
import useAuthenticationContext from '@services/auth/authContext';
import { useState } from 'react';

import {
  ButtonLabel,
  FormButton,
  FormInputContainer,
  FormInputs,
  GradientForm,
  Input,
} from '../style';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { onRegister, isLoading } = useAuthenticationContext();

  const handleOnChangeEmail = (text: string) => setEmail(text);
  const handleOnChangePassword = (text: string) => setPassword(text);
  const handleOnChangeConfirmPassword = (text: string) =>
    setConfirmPassword(text);

  const handleRegisterAccount = () =>
    onRegister(email, password, confirmPassword);

  return (
    <GradientForm
      colors={[Colors.purple900, Colors.orange600, Colors.purple900]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      loading={isLoading}>
      <FormInputContainer>
        <FormInputs>
          <Input placeholder="Email" onChangeText={handleOnChangeEmail} />
          <Input placeholder="Password" onChangeText={handleOnChangePassword} />
          <Input
            placeholder="Confirm password"
            onChangeText={handleOnChangeConfirmPassword}
          />
        </FormInputs>
        <FormButton onPress={handleRegisterAccount}>
          <ButtonLabel>{'Register'}</ButtonLabel>
        </FormButton>
      </FormInputContainer>
    </GradientForm>
  );
};

export default Register;
