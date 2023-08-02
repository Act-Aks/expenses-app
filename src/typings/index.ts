import { Navigation } from '@infrastructure/types';

export type ScreenProps = {
  navigation: Navigation;
};

export type ExpenseData = {
  id: string;
  title: string;
  amount: number;
  date: string;
};
