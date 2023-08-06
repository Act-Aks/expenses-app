import { StyleSheet } from 'react-native';

import { Colors } from '@infrastructure/theme';

export const style = StyleSheet.create({
  cardContainer: {
    padding: 16,
  },
  cardWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 70,
    resizeMode: 'stretch',
  },
  button: {
    width: '100%',
    alignSelf: 'flex-end',
    backgroundColor: Colors.purple900,
    borderRadius: 8,
  },
  btnTitle: {
    color: Colors.purple.default,
  },
});
