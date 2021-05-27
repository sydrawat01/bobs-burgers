import { FC, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Order from '../../components/Order/Order';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import { useAppDispatch, useAppSelector } from '../../store/hooks/rtkHooks';
import { fetchOrders, orderSelector } from '../../store/reducers/orderSlice';

import { Order as OrderData } from '../../models/Order';

const Orders: FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(orderSelector);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchOrders());
    if (error) {
      setShowModal(true);
    }
  }, [dispatch, error]);

  let resArr: OrderData[] = [];
  let fetchedOrders;
  if (data) {
    const resData = Object.values(data);
    for (const i in resData) {
      resArr.push(resData[i]);
    }
    fetchedOrders = resArr.map((order) => (
      <Order
        key={uuidv4()}
        price={order.price}
        name={order.customer?.name}
        ingredients={order.ingredients!}
      />
    ));
  } else {
    fetchedOrders = (
      <h2 style={{ textAlign: 'center', color: '#ccc' }}>No orders placed!</h2>
    );
  }

  return (
    <div style={{ paddingTop: '25px' }}>
      <h1 style={{ textAlign: 'center', color: '#888888' }}>Previous Orders</h1>
      {loading && !error ? <Spinner /> : fetchedOrders}
      {!loading && error && showModal ? (
        <Modal show={showModal} close={() => setShowModal(false)}>
          <h3 style={{ textAlign: 'center' }}>
            Something went wrong in fetching the orders!
          </h3>
        </Modal>
      ) : null}
    </div>
  );
};

export default Orders;
