export const cartData = {
  cartItems: [],
};

export const cartMethods = {
  addOneItemToCart: function (id) {
    const { data: lesson } = this.getLessonAndIndexById(id);
    if (!lesson || lesson.slot <= 0) {
      return;
    }
    const { data: cartItem, index: cartItemIndex } =
      this.getCartItemAndIndexById(lesson.id);

    if (!cartItem) {
      this.cartItems.push({ ...lesson, quantity: 1 });
    } else {
      this.cartItems[cartItemIndex] = {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };
    }

    this.decreaseLessonSlot(lesson.id, 1);
  },
  removeOneItemFromCart: function (id) {
    const { data: lesson } = this.getLessonAndIndexById(id);
    if (!lesson) {
      return;
    }
    const { data: cartItem, index: cartItemIndex } =
      this.getCartItemAndIndexById(lesson.id);
    if (!cartItem) {
      return;
    }

    if (cartItem.quantity === 1) {
      this.cartItems = this.cartItems.filter((item) => item.id !== lesson.id);
    } else if (cartItem.quantity > 1) {
      this.cartItems[cartItemIndex] = {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      };
    }

    this.increaseLessonSlot(lesson.id, 1);
  },
  removeItemsFromCart: function (id) {
    const { data: lesson } = this.getLessonAndIndexById(id);
    if (!lesson) {
      return;
    }
    const { data: cartItem } = this.getCartItemAndIndexById(lesson.id);
    if (!cartItem) {
      return;
    }
    this.cartItems = this.cartItems.filter((item) => item.id !== lesson.id);
    this.increaseLessonSlot(lesson.id, cartItem.quantity);
  },
  getCartItemAndIndexById: function (id) {
    const index = this.cartItems.findIndex((item) => item.id === id);
    return index !== -1
      ? { index, data: this.cartItems[index] }
      : { index, data: this.cartItems[index] };
  },
  clearCartItems: function () {
    this.cartItems = [];
  },
};

export const cartComputed = {
  cartItemsCount: function () {
    return this.cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
  },
  isCartEmpty: function () {
    return this.cartItems <= 0;
  },
};
