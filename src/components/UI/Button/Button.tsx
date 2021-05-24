import { FC } from 'react';

import classes from './Button.module.css';

const Button: FC<{ btnType: string; onClick: () => void }> = (props) => {
  const btnClasses = `${classes.Button} ${classes[props.btnType]}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
