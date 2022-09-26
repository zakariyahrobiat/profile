getName = document.getElementById("name");
mode = document.getElementById("mode");
body = document.querySelector("body");
bodyEl = document.querySelector(".body");
button = document.querySelectorAll("button");
navContainer = document.querySelector(".nav-container");
contactContainer = document.querySelector(".contact-container");
aboutContainer = document.querySelector(".about-container");
const text = "Zakariyah Robiah";
setInterval(writeName, 200);
let index = 1;
function writeName() {
  getName.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }
}
mode.addEventListener("change", () => {
  body.classList.toggle("active");
  bodyEl.classList.toggle("active");
  navContainer.classList.toggle("active");
  contactContainer.classList.toggle("active");
  aboutContainer.classList.toggle("active");
  for (i = 0; i < button.length; i++) {
    button[i].classList.toggle("active");
  }
});
// writeName();
