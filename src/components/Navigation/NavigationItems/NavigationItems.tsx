import { FC } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems: FC = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem exact link="/">
        Burger Builder
      </NavigationItem>
      <NavigationItem exact={false} link="/orders">
        Orders
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
