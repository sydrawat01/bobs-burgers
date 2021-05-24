import { FC, FormEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

const ContactData: FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const history = useHistory();

  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  const form = (
    <div className={classes.Input}>
      <form onSubmit={confirmHandler}>
        <label htmlFor="name" className={classes.Label}></label>
        <input
          className={classes.InputElement}
          placeholder="Name"
          type="text"
          id="name"
          ref={nameInputRef}
        />
        <label htmlFor="street" className={classes.Label}></label>
        <input
          className={classes.InputElement}
          placeholder="Street"
          type="text"
          id="street"
          ref={streetInputRef}
        />
        <label htmlFor="postal" className={classes.Label}></label>
        <input
          className={classes.InputElement}
          placeholder="ZIP CODE"
          type="text"
          id="postal"
          ref={postalInputRef}
        />
        <label htmlFor="city" className={classes.Label}></label>
        <input
          className={classes.InputElement}
          placeholder="City"
          type="text"
          id="city"
          ref={cityInputRef}
        />
        <label htmlFor="email" className={classes.Label}></label>
        <input
          className={classes.InputElement}
          placeholder="E-mail"
          type="email"
          id="email"
          ref={emailInputRef}
        />

        <Button btnType="Success" onClick={() => history.replace('/orders')}>
          ORDER
        </Button>
      </form>
    </div>
  );
  return (
    <div className={classes.ContactData}>
      <h4>Please Enter Your Contact Data</h4>
      {form}
    </div>
  );
};

export default ContactData;
