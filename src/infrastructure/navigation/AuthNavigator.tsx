import { AuthStackParamsList } from '@infrastructure/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen } from '@screens';

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={'Account'} component={AccountScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
