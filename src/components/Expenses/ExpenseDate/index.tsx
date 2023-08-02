import moment from 'moment';

import { StyledDay, StyledExpenseDate, StyledMonth, StyledYear } from './style';

interface ExpenseDateProps {
  date: string;
}

const ExpenseDate = ({ date }: ExpenseDateProps) => {
  const month = moment(date).format('MMMM');
  const day = moment(date).format('DD');
  const year = moment(date).format('YYYY');

  return (
    <StyledExpenseDate>
      <StyledMonth>{month}</StyledMonth>
      <StyledYear>{year}</StyledYear>
      <StyledDay>{day}</StyledDay>
    </StyledExpenseDate>
  );
};

export default ExpenseDate;
