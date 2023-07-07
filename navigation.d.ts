// navigation.d.ts
import { RootStackParamList } from '@infrastructure/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
