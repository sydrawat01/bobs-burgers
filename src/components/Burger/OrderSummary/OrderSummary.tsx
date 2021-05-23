import { FC } from 'react';

const OrderSummary: FC = () => {
  return (
    <>
      <h3>Your Order</h3>
      <p>Ddelicious burger with the ingredients:</p>
      <ul>
        <li>ingredient 1</li>
        <li>ingredient 2</li>
      </ul>
      <p>Continue to Checkout?</p>
    </>
  );
};

export default OrderSummary;
