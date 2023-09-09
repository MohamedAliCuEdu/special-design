//_________________________
// settings box options:
// ________________________
// active btns functions:

function activeBtn(btns) {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });
}
// ________________________
// ===> [1] show settings: <===

let settingBox = document.querySelector(".setting-box");
let settingIcon = document.querySelector(".sh-settings i");

document.querySelector(".sh-settings").onclick = function () {
  settingIcon.classList.toggle("fa-spin");
  settingBox.classList.toggle("open");
};
//_________________________
// ===> [2] color options: <===

let mainColor = localStorage.getItem("mainColor");
let colorInputs = document.querySelectorAll(".color-options .color");

// [1] check main-color in localStorage:
if (mainColor) {
  // set color:
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("mainColor")
  );

  // add active class in same input dataset && remove it from other inputs:
  document.querySelectorAll(".color-options .color").forEach((color) => {
    color.dataset.color === mainColor
      ? color.classList.add("active")
      : color.classList.remove("active");
  });
}

// [2] make function:
colorInputs.forEach((color) => {
  color.addEventListener("click", (e) => {
    // set color in main-color:
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // store value in localStorage => mainColor:
    localStorage.setItem("mainColor", e.target.dataset.color);
  });
});

// [3] add active class && and remove it from others
activeBtn(colorInputs);
//_________________________
// ===> [3] change landing page bg random: <===

let home = document.querySelector(".home");
let bgBtns = document.querySelectorAll(".ch-bg button");

let imgsLength = 5;
let imgsCount = 1;

let bgLoopOn = document.querySelector(".ch-bg .on");
let bgLoopOff = document.querySelector(".ch-bg .off");

// change background (function):
let randomBg = () => {
  imgsCount < imgsLength ? imgsCount++ : (imgsCount = 1);
  home.style.backgroundImage = `url(imgs/0${imgsCount}.jpg)`;
};
let bgLoopID = setInterval(randomBg, 2000);

// [1] check bg_option in localStorage:
if (localStorage.getItem("bg_option")) {
  let bg_option = localStorage.getItem("bg_option");

  bg_option === "on" ? bgLoopID : clearInterval(bgLoopID);

  bgBtns.forEach((btn) => {
    btn.className === bg_option
      ? btn.classList.add("active")
      : btn.classList.remove("active");
  });
}

// [2] add functions in buttons:
bgLoopOn.addEventListener("click", (e) => {
  localStorage.setItem("bg_option", e.target.className);
  bgLoopID = setInterval(randomBg, 2000);
});
bgLoopOff.addEventListener("click", (e) => {
  localStorage.setItem("bg_option", e.target.className);
  clearInterval(bgLoopID);
});

// [3] add active class && and remove it from other:
activeBtn(bgBtns);
//_________________________
// ===> [4] display nav bullets: <===

let navBullets = document.querySelector(".nav-bullets");
let bulletBtns = document.querySelectorAll(".sh-bullets button");

// [1] check bullets in localStorage:
if (localStorage.getItem("bullets")) {
  let bullets = localStorage.getItem("bullets");

  bullets === "on"
    ? (navBullets.style.display = "flex")
    : (navBullets.style.display = "none");

  bulletBtns.forEach((btn) => {
    btn.className === bullets
      ? btn.classList.add("active")
      : btn.classList.remove("active");
  });
}

document.querySelector(".sh-bullets .on").addEventListener("click", () => {
  navBullets.style.display = "flex";
  localStorage.setItem("bullets", "on");
});
document.querySelector(".sh-bullets .off").addEventListener("click", () => {
  navBullets.style.display = "none";
  localStorage.setItem("bullets", "off");
});

activeBtn(bulletBtns);
//_________________________
// ===> [5] reset settings: <===

let reset = document.querySelector(".setting-box .reset");

reset.addEventListener("click", (e) => {
  // clear local storage
  localStorage.clear();

  // reload window
  window.location.reload();
});
