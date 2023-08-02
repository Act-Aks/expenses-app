import { ExpensesState } from '@reducers/States';

import { ACTIONS, ExpensesActions } from './actions';

export type ExpensesReducer = React.Reducer<ExpensesState, ExpensesActions>;

export const expensesReducer: ExpensesReducer = (state, action) => {
  let newState = { ...state };
  const { type, payload } = action;

  switch (type) {
  case ACTIONS.ADD_EXPENSE:
    newState.expenses = [...state.expenses, payload];
    break;
  case ACTIONS.SET_EXPENSES:
    newState.expenses = payload;
    break;

  default:
    newState = state;
    throw new Error(`No case for type ${type} found in expensesReducer`);
  }

  return newState;
};
