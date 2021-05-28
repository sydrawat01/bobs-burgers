import { ChangeEvent, FocusEvent, useState } from 'react';

export const InputValidation = (validationFn: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const valueIsValid = validationFn(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.currentTarget.value);
    setIsTouched(true);
  };

  const inputBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};
