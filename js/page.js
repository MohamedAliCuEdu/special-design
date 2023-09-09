// links-list:
let dropBtn = document.querySelector("nav button");
let links = document.querySelector("nav .links");

dropBtn.addEventListener("click", () => {
  links.classList.toggle("open");
});
//_________________________
//skills progress animation:

let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.scrollY;
  
  document.querySelectorAll(".skill-load").forEach((skill) => {
    // Skills Offset Top
    let skillOffsetTop = skill.offsetTop;
    // Skills Outer Height
    let skillOuterHeight = skill.offsetHeight;

    console.log(skill.offsetTop);
    if (windowScrollTop > ourSkills.offsetTop + skillOuterHeight + skillOffsetTop - windowHeight) {
      skill.firstElementChild.style.width = skill.firstElementChild.dataset.progress;
    }
  });
};
//_________________________
// gallery pop-up:
let allImg = [
  { name: "image one", src: "./imgs/01.jpg" },
  { name: "image two", src: "./imgs/02.jpg" },
  { name: "image three", src: "./imgs/03.jpg" },
  { name: "image four", src: "./imgs/04.jpg" },
  { name: "image five", src: "./imgs/05.jpg" },
  { name: "image six", src: "./imgs/06.png" },
  { name: "image seven", src: "./imgs/07.jpg" },
  { name: "image eight", src: "./imgs/08.jpg" },
  { name: "image nine", src: "./imgs/09.jpg" },
  { name: "", src: "./imgs/10.jpg" },
];

let imgsBox = document.querySelector(".imgs-box");

allImg.forEach((img) => {
  let ele = document.createElement("img");
  ele.src = img.src;
  ele.alt = img.name;

  imgsBox.appendChild(ele);
});

let galleryImgs = document.querySelectorAll(".gallery .imgs-box img");

galleryImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    // [1] create popup-overlay element:
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    // [2] create popup-box element:
    let popUp = document.createElement("div");
    popUp.className = "popup-box";

    // [3] create heading for image name:
    if (img.alt) {
      // last img have no alt for testing condition:
      let imgName = document.createElement("h3");
      imgName.textContent = img.alt;
      popUp.append(imgName);
    }

    // [4] close popup by closeBtn and overlay:
    let closeBtn = document.createElement("span");
    closeBtn.textContent = "X";

    closeBtn.addEventListener("click", () => {
      popUp.remove();
      overlay.remove();
    });
    overlay.addEventListener("click", () => {
      popUp.remove();
      overlay.remove();
    });
    popUp.append(closeBtn);

    // [4] clone img element in popup:
    popUp.append(img.cloneNode(true));

    // [4] append new elements in body:
    document.body.appendChild(popUp);
    document.body.appendChild(overlay);
  });
});
