export const uiData = {
  navbarShadow: '',
};

export const uiMethods = {
  handleScroll() {
    if (window.pageYOffset > 50) {
      this.navbarShadow = 'shadow-lg';
    } else {
      this.navbarShadow = '';
    }
  },
};
