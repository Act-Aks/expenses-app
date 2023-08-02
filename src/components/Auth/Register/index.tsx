import { useState } from 'react';

import { IconType } from '@components/Icon';
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

const CustomHeadProps = {
  type: IconType.MaterialIcons,
  color: Colors.purple700,
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { onRegister, isLoading } = useAuthenticationContext();
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleOnChangeUsername = (text: string) => setUsername(text);
  const handleOnChangeEmail = (text: string) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
  };
  const handleOnChangePassword = (text: string) => setPassword(text);
  const handleOnChangeConfirmPassword = (text: string) =>
    setConfirmPassword(text);

  const handleRegisterAccount = () =>
    onRegister(email, password, confirmPassword, username);

  return (
    <GradientForm
      colors={[Colors.purple900, Colors.orange600, Colors.purple900]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      loading={isLoading}>
      <FormInputContainer>
        <FormInputs>
          <Input
            placeholder={'Username'}
            onChangeText={handleOnChangeUsername}
            value={username}
            headProps={{ ...CustomHeadProps, name: 'person' }}
          />
          <Input
            placeholder={'Email'}
            onChangeText={handleOnChangeEmail}
            value={email}
            headProps={{ ...CustomHeadProps, name: 'email' }}
            hasError={email.length > 0 ? !isEmailValid : undefined}
          />
          <Input
            placeholder={'Password'}
            onChangeText={handleOnChangePassword}
            value={password}
            headProps={{ ...CustomHeadProps, name: 'lock' }}
            type={'Password'}
          />
          <Input
            placeholder={'Confirm password'}
            onChangeText={handleOnChangeConfirmPassword}
            value={confirmPassword}
            headProps={{ ...CustomHeadProps, name: 'lock' }}
            type={'Password'}
          />
        </FormInputs>
        <FormButton onPress={handleRegisterAccount} disabled={!isEmailValid}>
          <ButtonLabel>{'Register'}</ButtonLabel>
        </FormButton>
      </FormInputContainer>
    </GradientForm>
  );
};

export default Register;
