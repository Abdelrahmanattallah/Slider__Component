// // ! START SLIDER COMPONENT
// const megaSlide = function () {
//   //Define All The Variables
//   const slider = document.querySelector(".slider"),
//     slides = document.querySelectorAll(".slide"),
//     nextBtn = document.getElementById("nextBtn"),
//     prevBtn = document.getElementById("prevBtn"),
//     slidesLength = slides.length,
//     dotsContainer = document.querySelector(".dots");
//   let curSlide = 0;

//   // goToSlide
//   const goToSlide = function (slide) {
//     slides.forEach((s, i) => {
//       s.style.transform = `translateX(${100 * (i - slide)}%)`;
//     });
//   };

//   // nextSlide
//   const nextSlide = function () {
//     if (curSlide === slidesLength - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }
//     goToSlide(curSlide);
//     activeDot(curSlide);
//   };

//   // prevSlide
//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = slidesLength - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     activeDot(curSlide);
//   };

//   // Create Dots
//   const createDots = function () {
//     slides.forEach((e, i) => {
//       dotsContainer.insertAdjacentHTML(
//         "beforeend",
//         `
//         <button class="dots__dot" data-slide="${i}"></button>
//         `
//       );
//     });
//   };

//   //Active Dot
//   const activeDot = function (slide) {
//     document
//       .querySelectorAll(".dots__dot")
//       .forEach((dot) => dot.classList.remove("dots__dot--active"));
//     document
//       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//       .classList.add("dots__dot--active");
//   };

//   // Init All
//   const initAll = function () {
//     goToSlide(0);
//     createDots();
//     activeDot(0);
//   };
//   initAll();

//   // Event Handler
//   nextBtn.addEventListener("click", nextSlide);
//   prevBtn.addEventListener("click", prevSlide);

//   // Document Event
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowRight") {
//       nextBtn.click();
//     } else if (e.key === "LeftRight") {
//       prevBtn.click();
//     }
//   });

//   //Handle Dots Click
//   dotsContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots__dot")) {
//       const { slide } = e.target.dataset;
//       console.log(e.target);
//       console.log(slide);
//       goToSlide(slide);
//       activeDot(slide);
//     }
//   });
// };

// megaSlide();

//? Second Time Slider Component
//
"use strict";
const megaSlider = function () {
  //Define All Variables
  const slides = document.querySelectorAll(".slide"),
    nextBtn = document.getElementById("nextBtn"),
    PrevBtn = document.getElementById("prevBtn"),
    dotsContainer = document.querySelector(".dots"),
    slidesLength = slides.length;
  let curSlide = 0;

  // !Functions
  //Go To Slide
  const goToSlide = function (slideNum) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slideNum)}%)`;
    });
  };

  //Next Slide
  const nextSlide = function () {
    if (curSlide === slidesLength - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };
  //Previous Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = slidesLength - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };
  // Create The Dots
  const createDots = function () {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `
        <button class="dots__dot" data-slide="${i}"></button>
        `
      );
    });
  };
  // Activate Dot
  const activeDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  // !Events Handlers
  //Next Btn Handler
  nextBtn.addEventListener("click", nextSlide);
  //Previous Btn Handler
  PrevBtn.addEventListener("click", prevSlide);
  // Document Event KeyDown
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      nextBtn.click();
    } else if (e.key === "ArrowLeft") {
      PrevBtn.click();
    }
  });
  // Dots Event CLick
  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      console.log(e.target.dataset);
      goToSlide(slide);
      activeDot(slide);
    }
  });
  // Intials
  const initAll = function () {
    goToSlide(0);
    createDots();
    activeDot(0);
  };
  initAll();
};

megaSlider();
