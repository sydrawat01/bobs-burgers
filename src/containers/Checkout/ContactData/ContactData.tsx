import { FC, FormEvent } from 'react';

import { Customer } from '../../../models/Customer';
import { InputValidation } from '../../../utils/InputValidation';
import {
  baseValidation,
  emailValidation,
  zipValidation,
} from '../../../utils/validationFunctions';

import classes from './ContactData.module.css';

const ContactData: FC<{ order: (data?: Customer) => void }> = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = InputValidation(baseValidation);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = InputValidation(emailValidation);

  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
  } = InputValidation(baseValidation);

  const {
    value: zip,
    isValid: zipIsValid,
    hasError: zipHasError,
    valueChangeHandler: zipChangeHandler,
    inputBlurHandler: zipBlurHandler,
  } = InputValidation(zipValidation);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = InputValidation(baseValidation);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && streetIsValid && zipIsValid && cityIsValid)
    formIsValid = true;

  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();

    if (formIsValid) {
      const customer = {
        name,
        email,
        address: {
          street,
          zip,
          city,
        },
      };
      props.order(customer);
    }
  };

  const NameClass = !nameHasError
    ? classes.InputElement
    : `${classes.InputElement} ${classes.Invalid}`;
  const EmailClass = !emailHasError
    ? classes.InputElement
    : `${classes.InputElement} ${classes.Invalid}`;
  const StreetClass = !streetHasError
    ? classes.InputElement
    : `${classes.InputElement} ${classes.Invalid}`;
  const CityClass = !cityHasError
    ? classes.InputElement
    : `${classes.InputElement} ${classes.Invalid}`;
  const ZipClass = !zipHasError
    ? classes.InputElement
    : `${classes.InputElement} ${classes.Invalid}`;

  const form = (
    <div className={classes.Input}>
      <form onSubmit={confirmHandler}>
        <label htmlFor="name" className={classes.Label}></label>
        <input
          className={NameClass}
          placeholder="Name"
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={classes['Error-text']}>Name should not be empty!</p>
        )}

        <label htmlFor="email" className={classes.Label}></label>
        <input
          className={EmailClass}
          placeholder="E-mail"
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className={classes['Error-text']}>Enter a valid e-mail!</p>
        )}

        <label htmlFor="street" className={classes.Label}></label>
        <input
          className={StreetClass}
          placeholder="Street"
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && (
          <p className={classes['Error-text']}>Street should not be empty!</p>
        )}

        <label htmlFor="city" className={classes.Label}></label>
        <input
          className={CityClass}
          placeholder="City"
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && (
          <p className={classes['Error-text']}>City should not be empty!</p>
        )}

        <label htmlFor="postal" className={classes.Label}></label>
        <input
          className={ZipClass}
          placeholder="ZIP CODE"
          type="text"
          id="postal"
          maxLength={5}
          minLength={5}
          onChange={zipChangeHandler}
          onBlur={zipBlurHandler}
        />
        {zipHasError && (
          <p className={classes['Error-text']}>
            Enter a vaild zipcode of 5 digits!
          </p>
        )}

        <button className={classes.Button} disabled={!formIsValid}>
          ORDER
        </button>
      </form>
    </div>
  );
  return (
    <div className={classes.ContactData}>
      <h3>Enter Your Contact Details</h3>
      {form}
    </div>
  );
};

export default ContactData;
