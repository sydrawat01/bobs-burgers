import { FC, FormEvent, useRef, useState } from 'react';

import { Customer } from '../../../models/Customer';

import Modal from '../../../components/UI/Modal/Modal';

import classes from './ContactData.module.css';

const ContactData: FC<{ order: (data?: Customer) => void }> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const [showModal, setShowModal] = useState<boolean>(false);

  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();

    const customer = {
      name: nameInputRef.current!.value,
      email: emailInputRef.current!.value,
      address: {
        street: streetInputRef.current!.value,
        zip: postalInputRef.current!.value,
        city: cityInputRef.current!.value,
      },
    };
    // Basic validation
    const { name, email, address } = customer;
    const { street, zip, city } = address;
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      street.trim().length === 0 ||
      zip.trim().length < 5 ||
      city.trim().length === 0
    ) {
      setShowModal(true);
    } else {
      props.order(customer);
    }
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

        <button className={classes.Button}>ORDER</button>
      </form>
    </div>
  );
  return (
    <div className={classes.ContactData}>
      <h3>Enter Your Contact Details</h3>
      {form}
      {showModal && (
        <Modal show={showModal} close={() => setShowModal(false)}>
          <h2 style={{ color: 'crimson' }}>Please enter valid details!</h2>
        </Modal>
      )}
    </div>
  );
};

export default ContactData;
