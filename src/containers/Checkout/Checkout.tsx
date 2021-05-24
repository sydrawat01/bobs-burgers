import { FC } from 'react';
import { useHistory, Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout: FC = () => {
  const history = useHistory();
  const path = `${history.location.pathname}/contact-data`;

  const checkoutCancelledHandler = () => {
    history.replace('/');
  };
  const checkoutContinuedHandler = () => {
    history.replace(path);
  };
  return (
    <div style={{ paddingTop: '25px' }}>
      <CheckoutSummary
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route path={path}>
        <ContactData />
      </Route>
    </div>
  );
};

export default Checkout;
