import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.module.css';
const Toolbar: FC<{ drawerToggle: () => void }> = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggle} />
      <div className={classes.Logo}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
