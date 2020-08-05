//CHECK SCREEN SIZE//////////////////////////////////////////////////////////

var userAgent = navigator.userAgent;
var hSize = screen.height;
var wSize = screen.width;

console.log(userAgent);

console.log("Alto:", hSize);

console.log("Ancho:", wSize);

//NAV ANIMATION///////////////////////////////////////////////////////////

const mainNAv = document.querySelector(".mainNav");
const navOpener = document.querySelector(".navOpener");
const menuCover = document.querySelectorAll(".menuCover");

console.log(menuCover);

let navOpen = false;

navOpener.addEventListener("click", () => {
  console.log("click");

  if (!navOpen) {
    mainNAv.style.transform = "translateX(0)";
    setTimeout(() => {
      menuCover[3].style.animation = "reveal 1500ms ease-in-out forwards";
      menuCover[2].style.animation = "reveal 1500ms ease-in-out forwards";
      menuCover[1].style.animation = "reveal 1500ms ease-in-out forwards";
      menuCover[0].style.animation = "reveal 1500ms ease-in-out forwards";
    }, 300);
    navOpener.classList.add("open");
    navOpen = true;
  } else {
    if (wSize <= 414) {
      console.log(wSize);
      mainNAv.style.transform = "translateX(-90vw)";
    } else {
      mainNAv.style.transform = "translateX(-25vw)";
    }

    setTimeout(() => {
      menuCover[0].style.animation = "";
      menuCover[1].style.animation = "";
      menuCover[2].style.animation = "";
      menuCover[3].style.animation = "";
    }, 500);

    navOpener.classList.remove("open");
    navOpen = false;
  }
});

//GSAP ANIMATIONS////////////////////////////////////////////////////////////////////////

gsap.from(".footer-info", { y: 50, opacity: 0, duration: 1 });
gsap.from(".social-links", { opacity: 0, y: -50, duration: 1 });
gsap.from(".logo", { opacity: 0, duration: 0.5, x: -50 });
gsap.from(".heroName", { opacity: 0, duration: 0.5, y: -50 });

var tl = gsap.timeline();

gsap.from(".heroImg", { height: 0, duration: 0.7 });
gsap.from(".gradientbg", {
  backgroundPosition: "200px 0px",
  opacity: 0,
  duration: 1,
  delay: 0.7,
});
tl.from(".ctaTitle", { opacity: 0, duration: 0.9, y: 50, delay: 0.5 })
  .from(".ctaP", { opacity: 0, duration: 0.5, y: 50 })
  .from(".ctabutton", { opacity: 0, duration: 0.7, y: 50 });

gsap.from(".gMap", { y: 50, opacity: 0, duration: 1 });
gsap.from(".form-info", { y: 50, opacity: 0, duration: 1 });

gsap.from(".aboutImgContainer", { height: 0, duration: 1 });
gsap.from(".abh2", { x: 50, opacity: 0, duration: 1 });
gsap.from(".abp", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
