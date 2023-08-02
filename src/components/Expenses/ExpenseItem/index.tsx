import React from 'react';

import { Card } from '@components';
import { ExpenseData } from '@typings';

import ExpenseDate from '../ExpenseDate';
import { expenseItemStyle, Price, StyledDataContainer, Title } from './style';

interface ExpenseItemProps extends ExpenseData {}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ title, amount, date }) => {
  return (
    <Card
      containerStyle={expenseItemStyle.container}
      wrapperStyle={expenseItemStyle.wrapper}>
      <ExpenseDate date={date} />
      <StyledDataContainer>
        <Title numberOfLines={2}>{title}</Title>
        <Price numberOfLines={1}>{`Rs. ${amount}`}</Price>
      </StyledDataContainer>
    </Card>
  );
};

export default ExpenseItem;
