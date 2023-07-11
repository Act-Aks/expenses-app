import { Colors } from '@infrastructure/theme';

import {
  ButtonLabel,
  FormButton,
  FormInputContainer,
  FormInputs,
  GradientForm,
  Input,
} from '../style';

const Register = () => {
  return (
    <GradientForm
      colors={[Colors.purple900, Colors.orange600, Colors.purple900]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}>
      <FormInputContainer>
        <FormInputs>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
        </FormInputs>
        <FormButton>
          <ButtonLabel>{'Register'}</ButtonLabel>
        </FormButton>
      </FormInputContainer>
    </GradientForm>
  );
};

export default Register;
