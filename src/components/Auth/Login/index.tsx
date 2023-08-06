import { useState } from 'react';

import { IconType } from '@components/Icon';
import Input from '@components/Input';
import { Colors } from '@infrastructure/theme';
import { Button } from '@rneui/themed';
import useAuthenticationContext from '@services/auth/authContext';
import { checkIfEmailIsValid } from '@utils';

import { FormInputContainer, FormInputs, GradientForm, styles } from '../style';

const CustomHeadProps = {
  type: IconType.MaterialIcons,
  color: Colors.blue700,
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const { onLogin, isLoading } = useAuthenticationContext();

  const handleOnChangeEmail = (text: string) => {
    setEmail(text);
    const isValid = checkIfEmailIsValid(email);
    setIsEmailValid(isValid);
  };
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
          <Input
            placeholder={'Email'}
            placeholderTextColor={Colors.blue700}
            onChangeText={handleOnChangeEmail}
            value={email}
            headProps={{ ...CustomHeadProps, name: 'mail' }}
            hasError={email.length > 0 ? !isEmailValid : undefined}
          />
          <Input
            type={'Password'}
            placeholder={'Password'}
            onChangeText={handleOnChangePassword}
            placeholderTextColor={Colors.blue700}
            value={password}
            headProps={{ ...CustomHeadProps, name: 'lock' }}
          />
        </FormInputs>

        <Button
          title={'Login'}
          loading={isLoading}
          disabled={!isEmailValid}
          onPress={handleLogin}
          buttonStyle={styles.buttonStyle}
          disabledStyle={styles.disabledBtnStyle}
        />
      </FormInputContainer>
    </GradientForm>
  );
};

export default Login;
