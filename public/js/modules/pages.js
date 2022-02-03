export const CART_PAGE = 'CART_PAGE';
export const CHECKOUT_PAGE = 'CHECKOUT_PAGE';
export const HOME_PAGE = 'HOME_PAGE';

export const pagesData = {
  page: HOME_PAGE,
};

export const pagesMethods = {
  navigateToCartPage: function () {
    this.page = CART_PAGE;
  },
  navigateToCheckoutPage: function () {
    this.page = CHECKOUT_PAGE;
  },
  navigateToHomePage: function () {
    this.page = HOME_PAGE;
  },
};

export const pagesComputed = {
  isShowCartPage: function () {
    return this.page === CART_PAGE;
  },
  isShowCheckoutPage: function () {
    return this.page === CHECKOUT_PAGE;
  },
  isShowHomePage: function () {
    return this.page === HOME_PAGE;
  },
  pageTitle: function () {
    switch (this.page) {
      case CART_PAGE:
        return 'Cart';
      case CHECKOUT_PAGE:
        return 'Checkout';
      case HOME_PAGE:
        return 'Lessons';
    }
  },
};
