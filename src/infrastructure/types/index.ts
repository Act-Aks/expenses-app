import { NavigationProp } from '@react-navigation/native';

type Navigation = NavigationProp<ReactNavigation.RootParamList>;
type Account = undefined;
type Home = undefined;
type Splash = undefined;

export type { Account, Home, Navigation, Splash };

export type TabsStackParamsList = {
  DashBoard: undefined;
  Profile: undefined;
};

export type RootStackParamsList = {
  Home: Home;
  Splash: Splash;
};

export type AuthStackParamsList = {
  Account: Account;
};
