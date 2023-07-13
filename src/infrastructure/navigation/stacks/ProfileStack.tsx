import { RootStackParamList } from '@infrastructure/types';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '@screens';

const Stack = createStackNavigator<RootStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Profile'} screenOptions={{}}>
      <Stack.Screen name={'Account'} component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
