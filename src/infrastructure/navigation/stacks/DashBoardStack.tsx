import { RootStackParamList } from '@infrastructure/types';
import { createStackNavigator } from '@react-navigation/stack';
import { DashBoard } from '@screens';

const Stack = createStackNavigator<RootStackParamList>();

const DashBoardStack = () => {
  return (
    <Stack.Navigator initialRouteName={'DashBoard'} screenOptions={{}}>
      <Stack.Screen name={'DashBoard'} component={DashBoard} />
    </Stack.Navigator>
  );
};

export default DashBoardStack;
