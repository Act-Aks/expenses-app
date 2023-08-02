import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Icon, { IconType } from '@components/Icon';
import { Colors } from '@infrastructure/theme';
import { TabsStackParamsList } from '@infrastructure/types';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { DashBoard, Profile } from '@screens';

type Tab = {
  route: keyof TabsStackParamsList;
  label: string;
  type: IconType;
  activeIcon: string;
  inActiveIcon: string;
  component: () => JSX.Element;
};

interface TabButtonProps extends BottomTabBarButtonProps {
  item: Tab;
}

const TabArray: Array<Tab> = [
  {
    route: 'DashBoard',
    label: 'Dashboard',
    type: IconType.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: DashBoard,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: IconType.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    component: Profile,
  },
];

const Tabs = createBottomTabNavigator<TabsStackParamsList>();

const TabButton = (props: TabButtonProps) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState?.selected;
  const tabTranslateY = useSharedValue(0);

  useEffect(() => {
    if (focused) {
      tabTranslateY.value = withTiming(-10, {
        duration: 300,
        easing: Easing.linear,
      });
    } else {
      tabTranslateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.linear,
      });
    }
  }, [focused]);

  const tabAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: tabTranslateY.value }],
    };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animated.View style={[focused && styles.tab, tabAnimatedStyle]}>
        <Animated.View style={[focused && styles.tabIcon]}>
          <Icon
            type={item.type}
            name={focused ? item.activeIcon : item.inActiveIcon}
            color={focused ? Colors.purple.default : Colors.gray400}
          />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
      }}>
      {TabArray.map(item => {
        const tabBarButton = (props: BottomTabBarButtonProps) => (
          <TabButton {...props} item={item} />
        );

        return (
          <Tabs.Screen
            key={item.route}
            name={item.route}
            component={item.component}
            options={{
              headerTitle: item.label,
              tabBarButton,
            }}
          />
        );
      })}
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.purple500,
  },
  tabBarStyle: {
    height: 60,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    backgroundColor: Colors.purple950,
    borderRadius: 30,
  },
  tabIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    width: '90%',
    borderRadius: 30,
  },
});

export default TabNavigator;
