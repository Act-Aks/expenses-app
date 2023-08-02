import { StyleSheet } from 'react-native';

import { Colors } from '@infrastructure/theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.purple.opacity100,
    shadowColor: Colors.purple.opacity100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  wrapper: {
    borderRadius: 8,
  },
});
