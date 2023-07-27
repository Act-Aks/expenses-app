import {
  Icon as NativeElementIcon,
  IconProps as NativeElementIconProps,
} from '@rneui/themed';

export enum IconType {
  MaterialCommunityIcons = 'material-community',
  MaterialIcons = 'material',
  Ionicons = 'ionicon',
  FontAwesome = 'font-awesome',
  FontAwesome5 = 'font-awesome-5',
  AntDesign = 'antdesign',
  Entypo = 'entypo',
  SimpleLineIcons = 'simple-line-icon',
  Octicons = 'octicon',
  Foundation = 'foundation',
  EvilIcons = 'evilicon',
}

type IconProps = {
  type: IconType;
  name: string;
  color?: string;
  size?: number;
} & NativeElementIconProps;

const Icon: React.FC<IconProps> = ({
  type,
  name,
  color,
  size = 24,
  ...props
}: IconProps) => {
  return (
    name && (
      <NativeElementIcon
        {...props}
        name={name}
        type={type}
        size={size}
        color={color}
      />
    )
  );
};

export default Icon;
