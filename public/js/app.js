import { getLessons } from './services/lessons.service.js';
import { pagesData, pagesMethods, pagesComputed } from './modules/pages.js';
import {
  lessonsComputed,
  lessonsData,
  lessonsMethods,
} from './modules/lessons.js';
import { cartComputed, cartData, cartMethods } from './modules/cart.js';
import {
  checkoutComputed,
  checkoutData,
  checkoutMethods,
  checkoutWatch,
} from './modules/checkout.js';
import { uiData, uiMethods } from './modules/ui.js';

const app = Vue.createApp({
  data: function () {
    return {
      ...uiData,
      ...pagesData,
      ...lessonsData,
      ...cartData,
      ...checkoutData,
    };
  },
  methods: {
    ...uiMethods,
    ...pagesMethods,
    ...lessonsMethods,
    ...cartMethods,
    ...checkoutMethods,
  },
  computed: {
    ...pagesComputed,
    ...lessonsComputed,
    ...cartComputed,
    ...checkoutComputed,
  },
  watch: {
    ...checkoutWatch,
  },
  beforeMount: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  created: async function () {
    this.lessons = await getLessons();
  },
});

app.mount('#app');
