import { AccountScreen } from '@screens';
import { PropsWithChildren } from 'react';

interface AuthNavigatorProps extends PropsWithChildren {}

const AuthNavigator: React.FC<AuthNavigatorProps> = () => {
  return <AccountScreen />;
};

export default AuthNavigator;
