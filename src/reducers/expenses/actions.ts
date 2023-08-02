import { ExpenseData } from '@typings';

export const ACTIONS = {
  ADD_EXPENSE: 'AddExpense',
  SET_EXPENSES: 'SetExpense',
} as const;

type ADD_EXPENSE = {
  type: typeof ACTIONS.ADD_EXPENSE;
  payload: ExpenseData;
};

type SET_EXPENSES = {
  type: typeof ACTIONS.SET_EXPENSES;
  payload: ExpenseData[];
};

export type ExpensesActions = ADD_EXPENSE | SET_EXPENSES;
