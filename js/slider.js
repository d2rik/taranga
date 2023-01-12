const allSlider = document.querySelectorAll(".sliderImg");
const sliderCounter = document.querySelector(".slider-counter");
for (let i = 0; i < allSlider.length; i++) {
    sliderCounter.innerHTML += `<div class="cirlce"></div>`;
  }
function showDivs(n) {
  let allImg = document.querySelectorAll(".sliderImg");
  let cirlce = document.querySelectorAll(".cirlce");
  let i;
  if (n > allImg.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = allImg.length;
  }
  for (i = 0; i < allImg.length; i++) {
    allImg[i].style.display = "none";
    cirlce[i].style.backgroundColor = "white";
  }
  allImg[slideIndex - 1].style.display = "block";
  cirlce[slideIndex - 1].style.backgroundColor = "black";
}
let slideIndex = Math.round(allSlider.length/2);
showDivs(slideIndex);

function plusDivs(x) {
  showDivs((slideIndex += x));
}
//slider changing

