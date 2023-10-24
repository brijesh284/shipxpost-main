/* --------------------------------------------------
 * sticky-Header
 * --------------------------------------------------*/

const header = document.querySelector(".header-sticky");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

/* --------------------------------------------------
 * back to top
 * --------------------------------------------------*/
if ($("#back-to-top").length) {
  var scrollTrigger = 500, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#back-to-top").addClass("show");
      } else {
        $("#back-to-top").removeClass("show");
      }
    };
  backToTop();
  $(window).on("scroll", function () {
    backToTop();
  });
  $("#back-to-top").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
}

/* --------------------------------------------------
 * Our Trusted Brand
 * --------------------------------------------------*/
$(".trusted-brand-slider").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 50,
  autoplayTimeout: 3000, //2000ms = 2s;
  autoplayHoverPause: true,
  nav: false,

  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 7,
    },
  },
});

/* --------------------------------------------------
 * Our Trusted Brand
 * --------------------------------------------------*/
$(".card-mobile").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 50,
  autoplayTimeout: 2000, //2000ms = 2s;
  autoplayHoverPause: true,
  nav: false,

  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

/* --------------------------------------------------
 * shipping-service-SLIDER
 * --------------------------------------------------*/
$(".swiper").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  autoplayTimeout: 2000, //2000ms = 2s;
  autoplayHoverPause: true,
  nav: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

/* --------------------------------------------------
 * purchases-slider
 * --------------------------------------------------*/

$(".purchases-slider").owlCarousel({
  center: true,
  items: 2,
  loop: true,
  autoplayTimeout: 2000,
  autoplay: true,
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
      center: false,
    },
    1000: {
      items: 3,
    },
  },
});

/* --------------------------------------------------
 * services-counter
 * --------------------------------------------------*/

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});

AOS.init({
  duration: 1000,
});

