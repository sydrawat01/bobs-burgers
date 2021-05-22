import { FC } from 'react';

import classes from './Backdrop.module.css';

const Backdrop: FC<{ show: boolean; onClose: () => void }> = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.onClose} />
  ) : null;

export default Backdrop;
