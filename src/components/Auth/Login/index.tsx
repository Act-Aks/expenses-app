import { Colors } from '@infrastructure/theme';

import {
  ButtonLabel,
  FormButton,
  FormInputContainer,
  FormInputs,
  GradientForm,
  Input,
} from '../style';

const Login = () => {
  return (
    <GradientForm
      colors={[Colors.purple900, Colors.blue800, Colors.purple900]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}>
      <FormInputContainer>
        <FormInputs>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </FormInputs>
        <FormButton>
          <ButtonLabel>{'Login'}</ButtonLabel>
        </FormButton>
      </FormInputContainer>
    </GradientForm>
  );
};

export default Login;
