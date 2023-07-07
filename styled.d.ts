/// @typescript-eslint/no-empty-interface
import { theme } from '@infrastructure/theme';
import 'styled-components';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
