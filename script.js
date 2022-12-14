getName = document.getElementById("name");
mode = document.getElementById("mode");
body = document.querySelector("body");
bodyEl = document.querySelector(".body");
button = document.querySelectorAll("button");
navContainer = document.querySelector(".nav-container");
social = document.querySelector(".social");

aboutContainer = document.querySelector(".about-container");
project = document.querySelector(".project-container");
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
  social.classList.toggle("active");
});
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });
// const hidden = document.querySelectorAll(".hidden, .hiddenRight, .hiddenTop");
// hidden.forEach((el) => observer.observe(el));
AOS.init({ duration: 1200, once: false, offset: 300, easing: "ease-in-out" });
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Form successfully submitted"))
    .catch((error) => alert(error));
  document.querySelector(".email").value = "";
  document.querySelector(".message").value = "";
};

document.querySelector("form").addEventListener("submit", handleSubmit);
