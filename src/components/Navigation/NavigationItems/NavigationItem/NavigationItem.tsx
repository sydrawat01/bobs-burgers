import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const NavigationItem: FC<{ link: string; exact: boolean }> = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
