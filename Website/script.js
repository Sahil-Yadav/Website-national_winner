// // All the vars
// const slides = document.querySelector(".main-wrap");
// const allSlides = document.querySelectorAll(".main");
// const navigate = document.querySelector(".navigate");
// const dots = document.querySelectorAll(".dot");
// const dot1 = document.querySelector(".dot1");
// const dot2 = document.querySelector(".dot2");
// const dot3 = document.querySelector(".dot3");
// const dot4 = document.querySelector(".dot4");
// const dot5 = document.querySelector(".dot5");
// const home = document.querySelector(".home");
// const learnLinks = document.querySelectorAll(".learn-link");
// const learnLink1 = document.querySelector(".lLink1");
// const learnLink2 = document.querySelector(".lLink2");
// const learnLink3 = document.querySelector(".lLink3");
// const learnLink4 = document.querySelector(".lLink4");
// const learnLink5 = document.querySelector(".lLink5");
// const body = document.querySelector("body");
// const upArrow1 = document.querySelector(".up-arrow1");
// const upArrow2 = document.querySelector(".up-arrow2");
// const upArrow3 = document.querySelector(".up-arrow3");
// const upArrow4 = document.querySelector(".up-arrow4");
// const upArrow5 = document.querySelector(".up-arrow5");
// const upA = document.querySelectorAll(".upArrows");
// const head = document.querySelector(".head");
// const logo = document.querySelector(".logo");
// const about1Link = document.querySelector(".about-one-link");
// const about1Text = document.querySelector(".about-one-text");

// //Buttons
// const prvBtn = document.querySelector(".back-arrow");
// const nxtBtn = document.querySelector(".arrow");

// //Counter
// let counter = 0;
// const size = allSlides[0].clientWidth;

// prvBtn.addEventListener(`click`, () => {
//   counter = 0;
//   slides.style.transform = "translateX(" + -size * counter + "px)";
//   dot1.classList.add("backColor");
//   dot2.classList.remove("backColor");
//   dot3.classList.remove("backColor");
//   dot4.classList.remove("backColor");
//   dot5.classList.remove("backColor");
//   nxtBtn.classList.remove("hide");
//   prvBtn.style.display = "none";
// });

// home.addEventListener(`click`, () => {
//   counter = 0;
//   slides.style.transform = "translateX(" + -size * counter + "px)";
//   dot1.classList.add("backColor");
//   dot2.classList.remove("backColor");
//   dot3.classList.remove("backColor");
//   dot4.classList.remove("backColor");
//   dot5.classList.remove("backColor");
//   nxtBtn.classList.remove("hide");
//   prvBtn.style.display = "none";
//   body.style.overflowY = "hidden";
// });
// logo.addEventListener(`click`, () => {
//   counter = 0;
//   slides.style.transform = "translateX(" + -size * counter + "px)";
//   dot1.classList.add("backColor");
//   dot2.classList.remove("backColor");
//   dot3.classList.remove("backColor");
//   dot4.classList.remove("backColor");
//   dot5.classList.remove("backColor");
//   nxtBtn.classList.remove("hide");
//   prvBtn.style.display = "none";
//   body.style.overflowY = "hidden";
// });

// //Dot page change
// dot1.addEventListener(`click`, () => {
//   counter = 0;
//   dot1.classList.add("backColor");
//   dot2.classList.remove("backColor");
//   dot3.classList.remove("backColor");
//   dot4.classList.remove("backColor");
//   dot5.classList.remove("backColor");
//   nxtBtn.classList.remove("hide");
//   prvBtn.style.display = "none";
//   slides.style.transform = "translateX(" + -size * counter + "px)";
// });
// dot2.addEventListener(`click`, () => {
//   counter = 1;
//   dot1.classList.remove("backColor");
//   dot2.classList.add("backColor");
//   dot3.classList.remove("backColor");
//   dot4.classList.remove("backColor");
//   dot5.classList.remove("backColor");
//   nxtBtn.classList.remove("hide");
//   prvBtn.style.display = "none";
//   slides.style.transform = "translateX(" + -size * counter + "px)";
// });
// dot3.addEventListener(`click`, () => {
//   counter = 2;
//   dot1.classList.remove("backColor");
//   dot2.classList.remove("backColor");
//   dot3.classList.add("backColor");
//   dot4.classList.remove("backColor");
//   dot5.classList.remove("backColor");
//   nxtBtn.classList.remove("hide");
//   prvBtn.style.display = "none";
//   slides.style.transform = "translateX(" + -size * counter + "px)";
// });
// dot4.addEventListener(`click`, () => {
//   counter = 3;
//   dot1.classList.remove("backColor");
//   dot2.classList.remove("backColor");
//   dot3.classList.remove("backColor");
//   dot4.classList.add("backColor");
//   dot5.classList.remove("backColor");
//   nxtBtn.classList.remove("hide");
//   prvBtn.style.display = "none";
//   slides.style.transform = "translateX(" + -size * counter + "px)";
// });
// dot5.addEventListener(`click`, () => {
//   counter = 4;
//   dot1.classList.remove("backColor");
//   dot2.classList.remove("backColor");
//   dot3.classList.remove("backColor");
//   dot4.classList.remove("backColor");
//   dot5.classList.add("backColor");
//   nxtBtn.classList.add("hide");
//   prvBtn.style.display = "inline";
//   slides.style.transform = "translateX(" + -size * counter + "px)";
// });

// // == Slider Continue ==
// slides.style.transform = "translateX(" + -size * counter + "px)";

// //Button listner
// nxtBtn.addEventListener(`click`, function () {
//   if (dot4.classList.contains("backColor")) {
//     nxtBtn.classList.add("hide");
//     prvBtn.style.display = "inline";
//   }
//   if (counter >= allSlides.length - 1) return;
//   slides.style.transition = "transform 0.8s ease-in-out";
//   counter++;
//   let colorChange = document.querySelector(".backColor");
//   colorChange.classList.remove("backColor");
//   colorChange.nextElementSibling.classList.add("backColor");
//   slides.style.transform = "translateX(" + -size * counter + "px)";
// });

// learnLinks.forEach((e) => {
//   e.addEventListener(`click`, () => {
//     head.classList.add("hide");
//     body.style.overflowY = "visible";
//     nxtBtn.classList.add("hide");
//     dots.forEach((e) => {
//       e.classList.add("hide");
//     });
//   });
// });

// learnLink1.addEventListener(`click`, () => {
//   slides.style.transform = "translate(0%, -100%)";
// });
// learnLink2.addEventListener(`click`, () => {
//   slides.style.transform = "translate(-20%, -100%)";
// });
// learnLink3.addEventListener(`click`, () => {
//   slides.style.transform = "translate(-40%, -100%)";
// });
// learnLink4.addEventListener(`click`, () => {
//   slides.style.transform = "translate(-60%, -100%)";
// });
// learnLink5.addEventListener(`click`, () => {
//   slides.style.transform = "translate(-80%, -100%)";
//   nxtBtn.classList.add("hide");
//   prvBtn.classList.add("hide");
// });

// upA.forEach((e) => {
//   e.addEventListener(`click`, () => {
//     head.classList.remove("hide");
//     body.style.overflowY = "hidden";
//     nxtBtn.classList.remove("hide");
//     dots.forEach((e) => {
//       e.classList.remove("hide");
//     });
//   });
// });

// upArrow1.addEventListener(`click`, () => {
//   slides.style.transform = "translate(0%, 0.000001%)";
// });
// upArrow2.addEventListener(`click`, () => {
//   slides.style.transform = "translate(-20%,  0.000001%)";
// });
// upArrow3.addEventListener(`click`, () => {
//   slides.style.transform = "translate(-40%,  0.000001%)";
// });
// upArrow4.addEventListener(`click`, () => {
//   slides.style.transform = "translate(-60%,  0.000001%)";
// });
// upArrow5.addEventListener(`click`, () => {
//   slides.style.transform = "translate(-80%,  0.000001%)";
//   nxtBtn.classList.add("hide");
//   prvBtn.classList.remove("hide");
// });

// function read1() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");
//   const aboutTwo = document.querySelector(".about-two");
//   const aboutOne = document.querySelector(".about-one");
//   const bMore = document.querySelector(".bMore");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.fontSize = "0px";
//     bMore.style.fontSize = "0px";
//     aboutTwo.style.width = "100%";
//     aboutOne.style.width = "100%";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.fontSize = "18px";
//     bMore.style.fontSize = "18px";
//     aboutTwo.style.width = "0%";
//     aboutOne.style.width = "200%";
//   }
// }
// function read2() {
//   var dots2 = document.getElementById("dots2");
//   var moreText2 = document.getElementById("more2");
//   var btnText2 = document.getElementById("myBtn2");
//   const aboutThree = document.querySelector(".about-three");
//   const aboutFour = document.querySelector(".about-four");
//   const bMore2 = document.querySelectorAll(".bMore2");

//   if (dots2.style.display === "none") {
//     dots2.style.display = "inline";
//     btnText2.innerHTML = "Read more";
//     moreText2.style.fontSize = "0px";
//     bMore2.forEach((e) => {
//       e.style.fontSize = "0px";
//     });
//     aboutThree.style.width = "100%";
//     aboutFour.style.width = "100%";
//     aboutFour.style.position = "none";
//     aboutFour.style.right = "0%";
//   } else {
//     dots2.style.display = "none";
//     btnText2.innerHTML = "Read less";
//     moreText2.style.fontSize = "18px";
//     bMore2.forEach((e) => {
//       e.style.fontSize = "18px";
//     });
//     aboutThree.style.width = "0%";
//     aboutFour.style.width = "200%";
//     aboutFour.style.position = "relative";
//     aboutFour.style.right = "88%";
//   }
// }
// function read3() {
//   var dots3 = document.getElementById("dots3");
//   var moreText3 = document.getElementById("more3");
//   var btnText3 = document.getElementById("myBtn3");
//   const aboutTwo2 = document.querySelector(".about-two2");
//   const aboutOne2 = document.querySelector(".about-one2");
//   const bMore30 = document.querySelectorAll(".bMore30");

//   if (dots3.style.display === "none") {
//     dots3.style.display = "inline";
//     btnText3.innerHTML = "Read more";
//     moreText3.style.fontSize = "0px";
//     bMore30.forEach((e) => {
//       e.style.fontSize = "0px";
//     });
//     aboutTwo2.style.width = "100%";
//     aboutOne2.style.width = "100%";
//   } else {
//     dots3.style.display = "none";
//     btnText3.innerHTML = "Read less";
//     moreText3.style.fontSize = "18px";
//     bMore30.forEach((e) => {
//       e.style.fontSize = "18px";
//     });
//     aboutTwo2.style.width = "0%";
//     aboutOne2.style.width = "200%";
//   }
// }
// function read4() {
//   var dots4 = document.getElementById("dots4");
//   var moreText4 = document.getElementById("more4");
//   var btnText4 = document.getElementById("myBtn4");
//   const aboutThree2 = document.querySelector(".about-three2");
//   const aboutFour2 = document.querySelector(".about-four2");
//   const bMore40 = document.querySelectorAll(".bMore40");

//   if (dots4.style.display === "none") {
//     dots4.style.display = "inline";
//     btnText4.innerHTML = "Read more";
//     moreText4.style.fontSize = "0px";
//     bMore40.forEach((e) => {
//       e.style.fontSize = "0px";
//     });
//     aboutThree2.style.width = "100%";
//     aboutFour2.style.width = "100%";
//     aboutFour2.style.position = "none";
//     aboutFour2.style.right = "0%";
//   } else {
//     dots4.style.display = "none";
//     btnText4.innerHTML = "Read less";
//     moreText4.style.fontSize = "18px";
//     bMore40.forEach((e) => {
//       e.style.fontSize = "18px";
//     });
//     aboutThree2.style.width = "0%";
//     aboutFour2.style.width = "200%";
//     aboutFour2.style.position = "relative";
//     aboutFour2.style.right = "88%";
//   }
// }
// function read5() {
//   var dots5 = document.getElementById("dots5");
//   var moreText5 = document.getElementById("more5");
//   var btnText5 = document.getElementById("myBtn5");
//   const aboutTwo3 = document.querySelector(".about-two3");
//   const aboutOne3 = document.querySelector(".about-one3");
//   const bMore3 = document.querySelectorAll(".bMore3");

//   if (dots5.style.display === "none") {
//     dots5.style.display = "inline";
//     btnText5.innerHTML = "Read more";
//     moreText5.style.fontSize = "0px";
//     bMore3.forEach((e) => {
//       e.style.fontSize = "0px";
//     });
//     aboutTwo3.style.width = "100%";
//     aboutOne3.style.width = "100%";
//   } else {
//     dots5.style.display = "none";
//     btnText5.innerHTML = "Read less";
//     moreText5.style.fontSize = "18px";
//     bMore3.forEach((e) => {
//       e.style.fontSize = "18px";
//     });
//     aboutTwo3.style.width = "0%";
//     aboutOne3.style.width = "200%";
//   }
// }
// function read6() {
//   var dots6 = document.getElementById("dots6");
//   var moreText6 = document.getElementById("more6");
//   var btnText6 = document.getElementById("myBtn6");
//   const aboutThree3 = document.querySelector(".about-three3");
//   const aboutFour3 = document.querySelector(".about-four3");
//   const bMore60 = document.querySelectorAll(".bMore60");

//   if (dots6.style.display === "none") {
//     dots6.style.display = "inline";
//     btnText6.innerHTML = "Read more";
//     moreText6.style.fontSize = "0px";
//     bMore60.forEach((e) => {
//       e.style.fontSize = "0px";
//     });
//     aboutThree3.style.width = "100%";
//     aboutFour3.style.width = "100%";
//     aboutFour3.style.position = "none";
//     aboutFour3.style.right = "0%";
//   } else {
//     dots6.style.display = "none";
//     btnText6.innerHTML = "Read less";
//     moreText6.style.fontSize = "18px";
//     bMore60.forEach((e) => {
//       e.style.fontSize = "18px";
//     });
//     aboutThree3.style.width = "0%";
//     aboutFour3.style.width = "200%";
//     aboutFour3.style.position = "relative";
//     aboutFour3.style.right = "88%";
//   }
// }
// function read7() {
//   var dots7 = document.getElementById("dots7");
//   var moreText7 = document.getElementById("more7");
//   var btnText7 = document.getElementById("myBtn7");
//   const aboutOne4 = document.querySelector(".about-one4");
//   const aboutTwo4 = document.querySelector(".about-two4");

//   if (dots7.style.display === "none") {
//     dots7.style.display = "inline";
//     btnText7.innerHTML = "Read more";
//     moreText7.style.fontSize = "0px";
//     aboutOne4.style.width = "100%";
//     aboutTwo4.style.width = "100%";
//   } else {
//     dots7.style.display = "none";
//     btnText7.innerHTML = "Read less";
//     moreText7.style.fontSize = "18px";
//     aboutOne4.style.width = "200%";
//     aboutTwo4.style.width = "0%";
//   }
// }
// function read8() {
//   var dots8 = document.getElementById("dots8");
//   var moreText8 = document.getElementById("more8");
//   var btnText8 = document.getElementById("myBtn8");
//   const aboutThree4 = document.querySelector(".about-three4");
//   const aboutFour4 = document.querySelector(".about-four4");
//   const bMore8 = document.querySelectorAll(".bMore8");

//   if (dots8.style.display === "none") {
//     dots8.style.display = "inline";
//     btnText8.innerHTML = "Read more";
//     moreText8.style.fontSize = "0px";
//     bMore8.forEach((e) => {
//       e.style.fontSize = "0px";
//     });
//     aboutThree4.style.width = "100%";
//     aboutFour4.style.width = "100%";
//     aboutFour4.style.position = "none";
//     aboutFour4.style.right = "0%";
//   } else {
//     dots8.style.display = "none";
//     btnText8.innerHTML = "Read less";
//     moreText8.style.fontSize = "18px";
//     bMore8.forEach((e) => {
//       e.style.fontSize = "18px";
//     });
//     aboutThree4.style.width = "0%";
//     aboutFour4.style.width = "200%";
//     aboutFour4.style.position = "relative";
//     aboutFour4.style.right = "88%";
//   }
// }
// function read9() {
//   var dots9 = document.getElementById("dots9");
//   var moreText9 = document.getElementById("more9");
//   var btnText9 = document.getElementById("myBtn9");
//   const aboutTwo5 = document.querySelector(".about-two5");
//   const aboutOne5 = document.querySelector(".about-one5");

//   if (dots9.style.display === "none") {
//     dots9.style.display = "inline";
//     btnText9.innerHTML = "Read more";
//     moreText9.style.fontSize = "0px";
//     aboutTwo5.style.width = "100%";
//     aboutOne5.style.width = "100%";
//   } else {
//     dots9.style.display = "none";
//     btnText9.innerHTML = "Read less";
//     moreText9.style.fontSize = "18px";
//     aboutTwo5.style.width = "0%";
//     aboutOne5.style.width = "200%";
//   }
// }
// function read10() {
//   var dots10 = document.getElementById("dots10");
//   var moreText10 = document.getElementById("more10");
//   var btnText10 = document.getElementById("myBtn10");
//   const aboutThree5 = document.querySelector(".about-three5");
//   const aboutFour5 = document.querySelector(".about-four5");
//   const bMore10 = document.querySelectorAll(".bMore10");

//   if (dots10.style.display === "none") {
//     dots10.style.display = "inline";
//     btnText10.innerHTML = "Read more";
//     moreText10.style.fontSize = "0px";
//     bMore10.forEach((e) => {
//       e.style.fontSize = "0px";
//     });
//     aboutThree5.style.width = "100%";
//     aboutFour5.style.width = "100%";
//     aboutFour5.style.position = "none";
//     aboutFour5.style.right = "0%";
//   } else {
//     dots10.style.display = "none";
//     btnText10.innerHTML = "Read less";
//     moreText10.style.fontSize = "18px";
//     bMore10.forEach((e) => {
//       e.style.fontSize = "18px";
//     });
//     aboutThree5.style.width = "0%";
//     aboutFour5.style.width = "200%";
//     aboutFour5.style.position = "relative";
//     aboutFour5.style.right = "88%";
//   }
// }

// window.onresize = function () {
//   location.reload();
// };
