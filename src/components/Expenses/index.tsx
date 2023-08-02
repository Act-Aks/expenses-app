import { ScrollView, StyleSheet, Text } from 'react-native';

import { Card } from '@components';
import { Colors } from '@infrastructure/theme';
import useExpensesContext from '@services/expenses/expensesContext';

import ExpenseItem from './ExpenseItem';

const Expenses = () => {
  const {
    state: { expenses },
  } = useExpensesContext();

  if (expenses.length === 0) {
    return (
      <Card>
        <Text style={styles.emptyState}>{'No Expenses Added'}</Text>
      </Card>
    );
  }

  return (
    <Card containerStyle={styles.card}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {expenses?.map(expense => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </ScrollView>
    </Card>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.onSecondaryContainer,
    padding: 10,
  },
  scrollView: {
    gap: 12,
    backgroundColor: Colors.light.onSecondaryContainer,
  },
  emptyState: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: Colors.light.onPrimaryContainer,
    fontWeight: 'bold',
  },
});
