import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationProvider } from '@services/auth/authContext';

import AuthNavigator from './AuthNavigator';

export const Navigator = () => {
  return (
    <AuthenticationProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </AuthenticationProvider>
  );
};
