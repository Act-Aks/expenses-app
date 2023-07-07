import { NavigationProp } from '@react-navigation/native';

type Navigation = NavigationProp<ReactNavigation.RootParamList>;
type Login = undefined;
type Register = undefined;
type DashBoard = undefined;
type Account = undefined;

export type { Account, DashBoard, Login, Navigation, Register };

export const NavigationScreens = {
  Account: 'Account',
  DashBoard: 'DashBoard',
  Login: 'Login',
  Registration: 'Register',
} as const;

export type RootStackParamList = {
  [NavigationScreens.Account]: Account;
  [NavigationScreens.DashBoard]: DashBoard;
  [NavigationScreens.Login]: Login;
  [NavigationScreens.Registration]: Register;
};
