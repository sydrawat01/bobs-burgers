import { FC, useState } from 'react';
import { useHistory, Route } from 'react-router-dom';
import {
  useAppSelector,
  items,
  useAppDispatch,
} from '../../store/hooks/rtkHooks';

import { Order } from '../../models/Order';
import {
  placeOrder,
  newOrderSelector,
} from '../../store/reducers/newOrderSlice';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import { Customer } from '../../models/Customer';

const Checkout: FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { ingredients, totalPrice } = useAppSelector(items);
  const { loading, error } = useAppSelector(newOrderSelector);
  const path = `${history.location.pathname}/contact-data`;

  const [showModal, setShowModal] = useState<boolean>(false);

  const checkoutCancelledHandler = () => {
    history.replace('/');
  };
  const checkoutContinuedHandler = () => {
    history.replace(path);
  };

  const pushOrderData = async (data?: Customer) => {
    const order: Order = {
      ingredients,
      price: totalPrice,
      customer: data,
    };
    await dispatch(placeOrder(order));
    if (!loading) {
      history.replace('/orders');
    }
  };

  return (
    <>
      <div style={{ paddingTop: '25px' }}>
        <CheckoutSummary
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
        <Route path={path}>
          <ContactData order={pushOrderData} />
        </Route>
      </div>
      {loading && !error && <Spinner />}
      {!loading && error && showModal && (
        <Modal show={showModal} close={() => setShowModal(false)}>
          <h3 style={{ textAlign: 'center' }}>
            Something went wrong in placing the order! Please try again!
          </h3>
        </Modal>
      )}
    </>
  );
};

export default Checkout;
