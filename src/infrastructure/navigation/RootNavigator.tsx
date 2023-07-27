import { RootStackParamsList } from '@infrastructure/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name={'Home'} component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
