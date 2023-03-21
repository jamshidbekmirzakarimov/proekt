let elInputColor = document.querySelector(".js-color");
let elInputWidth = document.querySelector(".js-width");
let elInputHeight = document.querySelector(".js-height");
let elInputShadow = document.querySelector(".js-shadow");
let elInputBorder = document.querySelector(".js-border-radius");
let elBox = document.querySelector(".box");
let elBtn = document.querySelector(".js-btn");


elInputColor.addEventListener("input", (evt) => {
  elBox.style.backgroundColor = evt.target.value;
});


elInputWidth.addEventListener("input", (evt) => {
  elBox.style.width = evt.target.value;
});



elInputHeight.addEventListener("input", (evt) => {
  elBox.style.height = evt.target.value;
});



elInputBorder.addEventListener("input", (evt) => {
  elBox.style.borderRadius = evt.target.value;
});



elInputShadow.addEventListener("input", (evt) => {
  elBox.style.boxShadow = evt.target.value;
});

