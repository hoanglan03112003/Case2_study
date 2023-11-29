let SlideIndex = 0;
function MoveSlide(n) {
  const slides = document.querySelectorAll(".slide");
  const slidecontainer = document.querySelector(".slides");
  SlideIndex = (SlideIndex + n + slides.length) % slides.length;
  const offset = -SlideIndex * 100;
  slidecontainer.style.transform = `translateX(${offset}%)`;

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === SlideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

const slides = document.querySelectorAll(".slide");
const dotcontainer = document.querySelector(".dots");

slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === SlideIndex) {
    dot.classList.add("active");
  }
  dotcontainer.appendChild(dot);
});
