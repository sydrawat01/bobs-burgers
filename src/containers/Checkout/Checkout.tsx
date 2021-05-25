import { FC } from 'react';
import { useHistory, Route } from 'react-router-dom';
import {
  useAppSelector,
  items,
  useAppDispatch,
} from '../../store/hooks/rtkHooks';
import { resetOrder } from '../../store/actions/burgerActions';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout: FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { ingredients, totalPrice } = useAppSelector(items);
  const path = `${history.location.pathname}/contact-data`;

  const checkoutCancelledHandler = () => {
    history.replace('/');
  };
  const checkoutContinuedHandler = () => {
    history.replace(path);
  };

  const pushOrderData = async (data: {}) => {
    const order = {
      ingredients,
      price: totalPrice,
      customer: data,
    };
    fetch(
      'https://codesandbox-burger-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('something went wrong!');
        }
      })
      .then((data) => {
        dispatch(resetOrder());
        history.replace('/orders');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div style={{ paddingTop: '25px' }}>
      <CheckoutSummary
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route path={path}>
        <ContactData order={pushOrderData} />
      </Route>
    </div>
  );
};

export default Checkout;
