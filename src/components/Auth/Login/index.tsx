import { useState } from 'react';

import Input from '@components/Input';
import { Colors } from '@infrastructure/theme';
import useAuthenticationContext from '@services/auth/authContext';

import {
  ButtonLabel,
  FormButton,
  FormInputContainer,
  FormInputs,
  GradientForm,
} from '../style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, isLoading } = useAuthenticationContext();

  const handleOnChangeEmail = (text: string) => setEmail(text);
  const handleOnChangePassword = (text: string) => setPassword(text);
  const handleLogin = () => onLogin(email, password);

  return (
    <GradientForm
      colors={[Colors.purple900, Colors.blue800, Colors.purple900]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      loading={isLoading}>
      <FormInputContainer>
        <FormInputs>
          <Input placeholder="Email" onChangeText={handleOnChangeEmail} />
          <Input placeholder="Password" onChangeText={handleOnChangePassword} />
        </FormInputs>
        <FormButton onPress={handleLogin}>
          <ButtonLabel>{'Login'}</ButtonLabel>
        </FormButton>
      </FormInputContainer>
    </GradientForm>
  );
};

export default Login;
