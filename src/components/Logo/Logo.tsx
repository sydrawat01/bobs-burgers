import { FC } from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo: FC = () => {
  return (
    <div className={classes.Logo}>
      <img src={BurgerLogo} alt="BurgerBuilder" />
      <h3>Bob's Burgers</h3>
    </div>
  );
};

export default Logo;
