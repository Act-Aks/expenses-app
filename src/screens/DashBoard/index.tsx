import { View } from 'react-native';

import { AddExpense, Expenses } from '@components';

const DashBoard = () => {
  return (
    <View>
      <AddExpense />
      <Expenses />
    </View>
  );
};

export default DashBoard;
