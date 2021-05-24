import { FC } from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import { useAppSelector, items } from '../../../store/hooks/rtkHooks';

import classes from './CheckoutSummary.module.css';

const CheckoutSummary: FC<{
  checkoutCancelled: () => void;
  checkoutContinued: () => void;
}> = (props) => {
  const burgerItems = useAppSelector(items);
  return (
    <div className={classes.CheckoutSummary}>
      <h1 className={classes.CheckoutSummaryTitle}>
        We hope you like your burger!
      </h1>
      <div>
        <Burger items={burgerItems} />
        <Button onClick={props.checkoutCancelled} btnType="Danger">
          CANCEL
        </Button>
        <Button onClick={props.checkoutContinued} btnType="Success">
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
