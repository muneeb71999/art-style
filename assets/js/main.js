const btn = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".navbar-right");

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
});

$("html").scroll(function () {
  $(".navbar");
});

$(window).bind("scroll", function () {
  var navHeight = 10;

  if ($(window).scrollTop() > navHeight) {
    console.log("working");
    $(".navbar").addClass("scroll");
  } else {
    $(".navbar").removeClass("scroll");
  }
});

// Slick Slider
$(".started-slider").slick({
  variableWidth: true,
  arrows: true,
  prevArrow: $(".started-slider-arrow-left"),
  nextArrow: $(".started-slider-arrow-right"),
});

$(".art-slider").slick({
  arrows: true,
  variableWidth: true,
  prevArrow: $(".art-slider-btn-prev"),
  nextArrow: $(".art-slider-btn-next"),
});

$(".hero-slider").slick({
  arrows: true,
  infinite: false,
  variableWidth: true,
  prevArrow: $(".hero-slider-btn-prev"),
  nextArrow: $(".hero-slider-btn-next"),
});

const heroCards = $(".hero-card");

// On before slide change
$(".hero-slider").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    $(heroCards[currentSlide]).removeClass("active");
    $(".hero-slider-current-slide").text(`0${nextSlide + 1}`);
    $(heroCards[nextSlide]).addClass("active");
  }
);
