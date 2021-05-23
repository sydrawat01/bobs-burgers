import { FC } from 'react';

import Burger from '../../components/Burger/Burger';

const BurgerBuilder: FC = () => {
  return (
    <div style={{ paddingTop: '25px', background: '#fbe6a6' }}>
      <Burger />
      <h1>Burger Build Controls</h1>
    </div>
  );
};

export default BurgerBuilder;
