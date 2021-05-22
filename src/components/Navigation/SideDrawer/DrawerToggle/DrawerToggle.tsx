import classes from './DrawerToggle.module.css';

import { FC } from 'react';

const DrawerToggle: FC<{ clicked: () => void }> = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
