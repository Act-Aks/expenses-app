import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

import {
  ExpensesActions,
  expensesReducer,
  ExpensesReducer,
} from '@reducers/expenses';
import { ExpensesState } from '@reducers/States';
import useAuthenticationContext from '@services/auth/authContext';
import { ExpenseData } from '@typings';
import { clearExpenses, getExpenses, saveExpense } from '@utils/AsyncStorage';

const initialState: ExpensesState = {
  expenses: [
    {
      id: '1',
      date: '2023-07-28T12:41:42.295Z',
      title: 'new test',
      amount: 200,
    },
    {
      id: '2',
      date: '2023-07-28T12:41:42.295Z',
      title: 'new test',
      amount: 200,
    },
  ],
  addNewExpense: () => undefined,
  setExpenses: () => undefined,
};

interface Context {
  state: ExpensesState;
  dispatch?: React.Dispatch<ExpensesActions>;
}

const ExpensesContext = createContext<Context>({
  state: initialState,
});

interface ExpensesProviderProps {
  children: React.ReactNode;
}

export const ExpensesProvider = ({ children }: ExpensesProviderProps) => {
  const { user } = useAuthenticationContext();
  const [state, dispatch] = useReducer<ExpensesReducer>(
    expensesReducer,
    initialState,
  );
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user && user.uid) {
      loadExpenses(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && state.expenses.length) {
      saveExpense(user.uid, state.expenses);
    }
    console.log(state.expenses);
  }, [user, state.expenses]);

  const addNewExpense = (expense: ExpenseData) => {
    dispatch({ type: 'AddExpense', payload: expense });
  };

  const setExpenses = (expenses: ExpenseData[]) => {
    dispatch({ type: 'SetExpense', payload: expenses });
  };

  const loadExpenses = async (id: string) => {
    setLoading(true);
    const savedExpenses = await getExpenses(id);
    if (savedExpenses) {
      setExpenses(savedExpenses);
    }
    setLoading(false);
  };

  const clearAllExpenses = (id: string) => {
    clearExpenses(id);
  };

  const contextValue: ExpensesState = {
    ...state,
    addNewExpense,
    setExpenses,
    clearAllExpenses,
    isLoading,
  };

  return (
    <ExpensesContext.Provider value={{ state: contextValue, dispatch }}>
      {children}
    </ExpensesContext.Provider>
  );
};

const useExpensesContext = () => {
  const context = useContext(ExpensesContext);

  if (context === null) {
    throw new Error('Error in ExpensesContext');
  }

  return context;
};

export default useExpensesContext;
