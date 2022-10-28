getName = document.getElementById("name");
mode = document.getElementById("mode");
body = document.querySelector("body");
bodyEl = document.querySelector(".body");
button = document.querySelectorAll("button");
navContainer = document.querySelector(".nav-container");

aboutContainer = document.querySelector(".about-container");
project = document.querySelector(".project");
const text = "Zakariyah Robiah";
setInterval(writeName, 200);
let index = 1;
function writeName() {
  getName.innerText = text.slice(0, index);
  index++;
  // if (index > text.length) {
  //   index = 1;
  // }
}
mode.addEventListener("change", () => {
  body.classList.toggle("active");
  // bodyEl.classList.toggle("active");
  navContainer.classList.toggle("active");

  aboutContainer.classList.toggle("active");
  for (i = 0; i < button.length; i++) {
    button[i].classList.toggle("active");
  }
  project.classList.toggle("active");
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => observer.observe(el));
