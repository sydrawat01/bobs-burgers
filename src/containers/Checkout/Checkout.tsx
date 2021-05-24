import { FC, useState } from 'react';
import { useHistory, Route } from 'react-router-dom';
import { useAppSelector, items } from '../../store/hooks/rtkHooks';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

const Checkout: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const history = useHistory();
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
    setIsLoading(true);
    setError(null);
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
        setIsLoading(false);
        if (!res.ok) {
          throw new Error('something went wrong!');
        } else {
          history.replace('/orders');
        }
      })
      .catch((err) => {
        setError(err.message);
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
