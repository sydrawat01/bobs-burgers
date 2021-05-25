import { FC, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Order from '../../components/Order/Order';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

interface resultType {
  ingredients: {
    [ingredient: string]: number;
  };
  customer: {
    address: {
      [addressItem: string]: string;
    };
  };
  price: number;
}

interface dataType {
  [key: string]: resultType;
}

const Orders: FC = () => {
  const [data, setData] = useState<dataType>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const req = await fetch(process.env.REACT_APP_ORDERS!);
      setIsLoading(false);
      if (!req.ok) throw new Error('Unable to reach server at the moment!');
      const res = await req.json();
      setData(res);
    } catch (err) {
      setShowModal(true);
      setError(err.message);
    }
  };

  let resArr: resultType[] = [];
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
        ingredients={order.ingredients}
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
      {isLoading && !error ? <Spinner /> : fetchedOrders}
      {!isLoading && error ? (
        <Modal show={showModal} close={() => setShowModal(false)}>
          {error}
        </Modal>
      ) : null}
    </div>
  );
};

export default Orders;
