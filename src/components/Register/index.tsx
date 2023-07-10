import { Pressable, Text, TextInput, View } from 'react-native';

const Register = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ gap: 8, backgroundColor: 'red' }}>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
      </View>
      <Pressable>
        <Text>REGISTER</Text>
      </Pressable>
    </View>
  );
};

export default Register;
