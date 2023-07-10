import { Login, Register } from '@components';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Image } from 'react-native-svg';

const AccountScreen: React.FC<object> = () => {
  const { height, width } = Dimensions.get('window');

  return (
    <SafeAreaView className="flex-1 justify-end">
      <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
        <Image
          href={require('@assets/main.png')}
          height={height}
          width={width}
          preserveAspectRatio={'xMidyMid slice'}
        />
      </Svg>
      <View className=" flex-col p-4 gap-3">
        <View className="h-14 justify-center items-center bg-purple-500 border rounded-full  border-white">
          <Text className="font-bold text-xl text-white">{'LOGIN'}</Text>
        </View>
        <View className="h-14 justify-center items-center bg-purple-500 border rounded-full border-white">
          <Text className="font-bold text-xl text-white">{'REGISTER'}</Text>
        </View>
      </View>
      {/* <Login />
        <Register /> */}
    </SafeAreaView>
  );
};

export default AccountScreen;
