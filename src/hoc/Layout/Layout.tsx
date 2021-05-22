import { FC, useState } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

const Layout: FC = (props) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const sideDrawerCloseHandler = () => {
    setShowDrawer(false);
  };
  const sideDrawerToggleHandler = () => {
    setShowDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Toolbar drawerToggle={sideDrawerToggleHandler} />
      <SideDrawer open={showDrawer} onClose={sideDrawerCloseHandler} />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
