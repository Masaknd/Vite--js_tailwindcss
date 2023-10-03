import "../tailwindwcss/tailwind.css";


/*------------------------------------------------------
 Background Images: redefining absolute paths for Build
------------------------------------------------------*/
// import bgPrimary from '../images/bg-main@2x.png'
// document.querySelector('.bg-primary').style.background = `url(${bgPrimary})`
// import bgSecondary from '../images/bg-sub@2x.png'
// document.querySelector('.bg-secondary').style.background = `url(${bgSecondary})`


/*------------------------------------------------------
 Hamburger Menu
------------------------------------------------------*/
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const hamburgerTop = document.querySelector(".hamburger-top");
const hamburgerMiddle = document.querySelector(".hamburger-middle");
const hamburgerBottom = document.querySelector(".hamburger-bottom");
const mobMenus = document.querySelectorAll(".mobile-menu");
// const body = document.getElementsByTagName("body");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  logo.classList.toggle("js-text-color");
  hamburgerTop.classList.toggle("js-bg-color");
  hamburgerMiddle.classList.toggle("js-bg-color");
  hamburgerBottom.classList.toggle("js-bg-color");
}

btn.onclick = function () {
  if (btn.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

mobMenus.forEach((mobMenu) => {
  mobMenu.addEventListener("click", closeMenu);
});

function closeMenu() {
  btn.classList.toggle("open");
  menu.classList.add("hidden");
  logo.classList.toggle("js-text-color");
  hamburgerTop.classList.toggle("js-bg-color");
  hamburgerMiddle.classList.toggle("js-bg-color");
  hamburgerBottom.classList.toggle("js-bg-color");
  document.body.style.overflow = "auto";
}

/*------------------------------------------------------
 Scroll Events
------------------------------------------------------*/
const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY > 700) {
    btnTop.classList.add("active");
  } else {
    btnTop.classList.remove("active");
  }
});

/*------------------------------------------------------
 Header Scroll Animation
------------------------------------------------------*/
const header = document.getElementById("header");
const windowHeight = window.innerHeight;
const documentHeight = document.documentElement.scrollHeight;
const windowBottom = windowHeight - documentHeight;

let beforePos = 0; // Scroll position before the animation starts

// Scroll function to hide and show the header
function scrollAnimation() {
  let elemTop = document.getElementById("about").offsetTop; //scroll up to 'about' position
  let scroll = window.scrollY; // current scroll position

  if (scroll === beforePos) {
    return;
  } else if (elemTop > scroll || 0 > scroll - beforePos || windowBottom + scroll == 0) {
    header.classList.remove("js-header-hide"); // remove class to hide header
    header.classList.add("js-header-show"); // add class to show header
  } else {
    header.classList.remove("js-header-show"); // remove class to show header
    header.classList.add("js-header-hide"); // add class to hide header
  }
  beforePos = scroll; // update the present scroll position
}

// When scrolling, trigger the scroll function "scrollAnimation"
window.addEventListener("scroll", () => {
  scrollAnimation();
});

// When the page is loaded, trigger the scroll function "scrollAnimation"
window.addEventListener("load", () => {
  scrollAnimation();
});
