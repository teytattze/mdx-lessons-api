export const letterOnlyRegex = /^[a-zA-Z ]+$/;
export const phoneNoRegex = /^\d{11}$/;
export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateByRegex = (value, regex) => {
  return regex.test(value);
};

export const validateByLength = (value, { min, max }) => {
  const valueLength = value.length;
  if (min && max) {
    return valueLength >= min && valueLength <= max;
  } else if (!max && min) {
    return valueLength >= min;
  } else if (!min && max) {
    return valueLength <= max;
  } else {
    return true;
  }
};

export const validate = (msg, cb) => {
  if (!msg) {
    msg = 'Error';
  }
  console.log(cb);
  return cb ? '' : msg;
};

export const handleCheckoutFormValidation = (obj) => {
  const { firstName, lastName, email, phoneNo } = obj;
  const errors = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
  };
  errors.firstName = validate(
    'Invalid first name!',
    validateByRegex(firstName, letterOnlyRegex),
  );
  errors.lastName = validate(
    'Invalid last name!',
    validateByRegex(lastName, letterOnlyRegex),
  );
  errors.email = validate(
    'Invalid email address!',
    validateByRegex(email, emailRegex),
  );
  errors.phoneNo = validate(
    'Invalid phone number!',
    validateByRegex(phoneNo, phoneNoRegex),
  );

  return errors;
};
