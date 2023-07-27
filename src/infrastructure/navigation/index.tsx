import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from '@screens';
import useAuthenticationContext from '@services/auth/authContext';

import AuthNavigator from './AuthNavigator';
import RootNavigator from './RootNavigator';

export const Navigator = () => {
  const { isAuthenticated, isLoading } = useAuthenticationContext();

  return (
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : isAuthenticated ? (
        <RootNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};
