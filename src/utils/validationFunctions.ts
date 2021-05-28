export const baseValidation = (value?: string) => value?.trim() !== '';

export const emailValidation = (value: string) => {
  const reg = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return reg.test(value.trim());
};

export const zipValidation = (value?: string) => {
  const reg = new RegExp('^\\d+$');
  return value?.trim().length === 5 && reg.test(value.trim());
};
