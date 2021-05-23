import { FC } from 'react';
import classes from './BuildControl.module.css';

const BuildControl: FC<{
  label: string;
  disabled: number;
  added: () => void;
  removed: () => void;
}> = (props) => {
  return (
    <section className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled === 1 ? true : false}
      >
        &#8211;
      </button>
      <button className={classes.More} onClick={props.added}>
        &#43;
      </button>
    </section>
  );
};

export default BuildControl;
