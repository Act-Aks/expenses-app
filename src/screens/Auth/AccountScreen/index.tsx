import { Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import Login from '../Login';
import Register from '../Register';

const AccountScreen: React.FC<object> = () => {
  const animation = useSharedValue(0);

  return (
    <SafeAreaView className="flex-1 justify-center bg-slate-200">
      <Text className="flex justify-center text-center">AccountScreen</Text>
      <View className="flex-col justify-center items-center bg-blue-300 p-4">
        <Login />
        <Register />
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
