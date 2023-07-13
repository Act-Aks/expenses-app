import { RootStackParamList } from '@infrastructure/types';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '@screens';

const Stack = createStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Account'} screenOptions={{}}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={'Account'}
        component={AccountScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
