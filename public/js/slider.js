$(".owl-carousel").owlCarousel({
  loop: true,
  dots: false,
  stagePadding: 15,
  margin: 10,
  autoplay: true,
  nav: true,
  navText: [
    '<span className="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
    '<span className="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
