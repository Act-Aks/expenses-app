import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
