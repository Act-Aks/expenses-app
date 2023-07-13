import { NavigationProp } from '@react-navigation/native';

type Navigation = NavigationProp<ReactNavigation.RootParamList>;
type Account = undefined;
type Profile = undefined;
type DashBoard = undefined;
type Splash = undefined;
type Tabs = 'DashBoardTab' | 'ProfileTab';

export type { Account, DashBoard, Navigation, Profile, Splash, Tabs };

export const NavigationScreens = {
  Account: 'Account',
  DashBoard: 'DashBoard',
  Profile: 'Profile',
  Splash: 'Splash',
} as const;

export type TabScreensParamList = {
  [Tab in Tabs]: undefined;
};

export type RootStackParamList = {
  [NavigationScreens.Account]: Account;
  [NavigationScreens.DashBoard]: DashBoard;
  [NavigationScreens.Profile]: Profile;
  [NavigationScreens.Splash]: Splash;
} & TabScreensParamList;
