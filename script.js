const menuBtn = document.querySelector(".menu-btn");
const menuClose = document.querySelector(".menu-close");
menuBtn.addEventListener("click", () => {
  let menuOpen = document.querySelector("ul");
    menuOpen.style.display = "block";
    menuBtn.style.display = "none";
    menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  let menuOpen = document.querySelector("ul");
    menuOpen.style.display = "none";
    menuBtn.style.display = "block";
    menuClose.style.display = "none";
});
