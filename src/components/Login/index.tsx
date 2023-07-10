import { TextInput, View } from 'react-native';

import {
  ButtonLabel,
  FormInputContainer,
  FormInputs,
  Input,
  LoginFormButton,
} from './style';

const Login = () => {
  return (
    <FormInputContainer>
      <FormInputs>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </FormInputs>
      <LoginFormButton>
        <ButtonLabel>{'LOG IN'}</ButtonLabel>
      </LoginFormButton>
    </FormInputContainer>
  );
};

export default Login;
