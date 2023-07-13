import AuthStack from './stacks/AuthStack';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface AuthNavigatorProps extends Record<string, any> {}

const AuthNavigator: React.FC<AuthNavigatorProps> = () => {
  return <AuthStack />;
};

export default AuthNavigator;
