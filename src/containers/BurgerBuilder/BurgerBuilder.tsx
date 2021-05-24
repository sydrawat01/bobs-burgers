import { FC, useState } from 'react';

import {
  addIngredient,
  removeIngredient,
} from '../../store/actions/burgerActions';
import {
  useAppDispatch,
  useAppSelector,
  items,
} from '../../store/hooks/rtkHooks';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const BurgerBuilder: FC = () => {
  const dispatch = useAppDispatch();
  const ingredients = useAppSelector(items);
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const orderHandler = () => {
    setShowModal(true);
  };

  const disabledInfo = { ...ingredients.ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0 ? 1 : 0;
  }

  return (
    <div style={{ paddingTop: '25px', background: '#fbe6a6' }}>
      <Burger items={ingredients} />
      <BuildControls
        items={ingredients}
        addIngredient={(ingredient: string) =>
          dispatch(addIngredient(ingredient))
        }
        removeIngredient={(ingredient: string) =>
          dispatch(removeIngredient(ingredient))
        }
        disabled={disabledInfo}
        order={orderHandler}
      />
      <Modal show={showModal} close={closeModalHandler}>
        <OrderSummary ingredients={ingredients} close={closeModalHandler} />
      </Modal>
    </div>
  );
};

export default BurgerBuilder;
