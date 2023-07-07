import { Login, Register } from '@components';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen: React.FC<object> = () => {
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
