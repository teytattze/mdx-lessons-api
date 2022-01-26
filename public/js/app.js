import { sortOptions } from './constants/sort.const.js';
import {
  getItemAndIndexFromArray,
  getSortedArrayOfObject,
} from './lib/utils.js';
import {
  CART_PAGE,
  CHECKOUT_PAGE,
  COURSES_PAGE,
} from './constants/page.const.js';
import { getLessons } from './services/lessons.service.js';

const app = Vue.createApp({
  data: function () {
    return {
      cartItems: [],
      checkoutToastOpen: false,
      checkoutDetails: {
        firstName: '',
        surname: '',
        email: '',
        phoneNo: '',
      },
      page: COURSES_PAGE,
      lessons: [],
      navbarShadow: '',
      searchTerm: '',
      selectedSortOption: '',
      sortOptions: [...Object.keys(sortOptions)],
    };
  },

  methods: {
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
    getLessonAndIndexById: function (id) {
      return getItemAndIndexFromArray(this.lessons, id);
    },
    getCartItemAndIndexById: function (id) {
      return getItemAndIndexFromArray(this.cartItems, id);
    },
    decreaseLessonSlot: function (id, quantity) {
      const { data: lesson } = this.getLessonAndIndexById(id);
      lesson.slot -= quantity;
    },
    increaseLessonSlot: function (id, quantity) {
      const { data: lesson } = this.getLessonAndIndexById(id);
      lesson.slot += quantity;
    },
    getSortOptionObj: function (key) {
      return sortOptions[key];
    },
    isCourseFull: function (id) {
      const lessonIndex = this.lessons.findIndex((lesson) => lesson.id === id);
      return this.lessons[lessonIndex].slot === 0;
    },
    navigateToCartPage: function () {
      this.page = CART_PAGE;
    },
    navigateToCheckoutPage: function () {
      this.page = CHECKOUT_PAGE;
    },
    navigateToCoursesPage: function () {
      this.page = COURSES_PAGE;
    },
    handleScroll() {
      if (window.pageYOffset > 50) {
        this.navbarShadow = 'shadow-lg';
      } else {
        this.navbarShadow = '';
      }
    },
    handleSubmitCheckout() {},
  },

  computed: {
    cartItemsNumber: function () {
      let totalItem = 0;
      this.cartItems.forEach((item) => {
        totalItem += item.quantity;
      });
      return totalItem;
    },
    sortedLessons: function () {
      if (!this.selectedSortOption) {
        return this.lessons;
      }
      const option = sortOptions[this.selectedSortOption];
      return getSortedArrayOfObject(this.lessons, option.field, {
        order: option.order,
      });
    },
    filteredLessons: function () {
      return this.sortedLessons.filter((lesson) =>
        lesson.subject.toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
    },
    isCartHasItem: function () {
      return this.cartItems.length > 0;
    },
    isShowCartPage: function () {
      return this.page === CART_PAGE;
    },
    isShowCheckoutPage: function () {
      return this.page === CHECKOUT_PAGE;
    },
    isShowCoursesPage: function () {
      return this.page === COURSES_PAGE;
    },

    pageTitle: function () {
      switch (this.page) {
        case CART_PAGE:
          return 'Cart';
        case CHECKOUT_PAGE:
          return 'Checkout';
        case COURSES_PAGE:
          return 'Courses';
      }
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  created: async function () {
    this.lessons = await getLessons();
  },
});

app.mount('#app');
