import {
  emailRegex,
  handleCheckoutFormValidation,
  letterOnlyRegex,
  phoneNoRegex,
  validate,
  validateByRegex,
} from '../lib/validation.js';
import { bulkUpdateLessons } from '../services/lessons.service.js';
import { createOrder } from '../services/orders.service.js';

export const checkoutData = {
  checkoutForm: {
    values: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: '',
    },
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: '',
    },
  },
  isShowCheckoutModal: false,
};

export const checkoutMethods = {
  handleCheckoutFormSubmit: async function (ev) {
    ev.preventDefault();

    this.checkoutForm.errors = handleCheckoutFormValidation(
      this.checkoutForm.values,
    );
    if (
      this.checkoutForm.errors.firstName ||
      this.checkoutForm.errors.lastName ||
      this.checkoutForm.errors.email ||
      this.checkoutForm.errors.phoneNo
    ) {
      return;
    }

    const updatedLessons = this.cartItems.map((item) => ({
      id: item.id,
      slot: item.slot - item.quantity,
    }));
    const orderLessons = this.cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
    const order = {
      firstName: this.checkoutForm.values.firstName,
      lastName: this.checkoutForm.values.lastName,
      email: this.checkoutForm.values.email,
      phoneNo: this.checkoutForm.values.phoneNo,
      lessons: orderLessons,
    };

    try {
      await bulkUpdateLessons(updatedLessons);
      await createOrder(order);
      this.isShowCheckoutModal = true;
    } catch (err) {
      console.log(err);
    }
  },
  handleCheckoutModal: function () {
    this.clearCheckoutForm();
    this.clearCartItems();
    this.isShowCheckoutModal = !this.isShowCheckoutModal;
    this.navigateToHomePage();
  },
  clearCheckoutForm: function () {
    this.checkoutForm.values.firstName = '';
    this.checkoutForm.values.lastName = '';
    this.checkoutForm.values.email = '';
    this.checkoutForm.values.phoneNo = '';

    this.checkoutForm.errors.firstName = '';
    this.checkoutForm.errors.lastName = '';
    this.checkoutForm.errors.email = '';
    this.checkoutForm.errors.phoneNo = '';
  },
};

export const checkoutComputed = {
  isCheckoutButtonDisabled: function () {
    if (
      !this.checkoutForm.values.firstName ||
      !this.checkoutForm.values.lastName ||
      !this.checkoutForm.values.email ||
      !this.checkoutForm.values.phoneNo
    ) {
      return true;
    }
    if (
      !this.checkoutForm.errors.firstName &&
      !this.checkoutForm.errors.lastName &&
      !this.checkoutForm.errors.email &&
      !this.checkoutForm.errors.phoneNo
    ) {
      return false;
    }
    return true;
  },
};

export const checkoutWatch = {
  'checkoutForm.values.firstName': function (value) {
    if (value) {
      this.checkoutForm.errors.firstName = validate(
        'Invalid first name!',
        validateByRegex(value, letterOnlyRegex),
      );
    }
  },
  'checkoutForm.values.lastName': function (value) {
    if (value) {
      this.checkoutForm.errors.lastName = validate(
        'Invalid first name!',
        validateByRegex(value, letterOnlyRegex),
      );
    }
  },
  'checkoutForm.values.email': function (value) {
    if (value) {
      this.checkoutForm.errors.email = validate(
        'Invalid email address!',
        validateByRegex(value, emailRegex),
      );
    }
  },
  'checkoutForm.values.phoneNo': function (value) {
    if (value) {
      this.checkoutForm.errors.phoneNo = validate(
        'Invalid phone number!',
        validateByRegex(value, phoneNoRegex),
      );
    }
  },
};
