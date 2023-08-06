import Card from '@components/Card';
import { Button, Image } from '@rneui/themed';

import { style } from './style';

const AddExpense = () => {
  return (
    <Card containerStyle={style.cardContainer} wrapperStyle={style.cardWrapper}>
      <Image source={require('@assets/rupee.png')} style={style.image} />
      <Button
        buttonStyle={style.button}
        title={'Add Expense'}
        titleStyle={style.btnTitle}
      />
    </Card>
  );
};

export default AddExpense;
