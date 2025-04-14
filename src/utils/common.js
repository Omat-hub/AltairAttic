export const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 800) {
    return { right: !menuOpened ? "-100%" : "0" };
  }
  return {};
};

export const sliderSettings = {
  slidesPerView: 1,
  spaceCenter: 30,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
  },
};
