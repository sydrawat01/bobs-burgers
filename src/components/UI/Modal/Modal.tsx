import { FC } from 'react';

// import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const ModalOverlay: FC = (props) => {
  return <div className={classes.Modal}>{props.children}</div>;
};

export default ModalOverlay;
