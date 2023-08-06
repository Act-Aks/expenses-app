import { Pressable, Text, View } from 'react-native';

import useAuthenticationContext from '@services/auth/authContext';

const Profile = () => {
  const { onLogout } = useAuthenticationContext();
  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onLogout}>
      <Text>{'LogOut'}</Text>
    </Pressable>
  );
};

export default Profile;
