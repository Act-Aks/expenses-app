import { ExpenseData } from '@typings';

export interface ExpensesState {
  expenses: Array<ExpenseData>;
  setExpenses: (data: Array<ExpenseData>) => void;
  addNewExpense: (expense: ExpenseData) => void;
  clearAllExpenses?: (userId: string) => void;
  isLoading?: boolean;
}
