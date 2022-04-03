let preload = document.querySelector(".preLoad");
window.addEventListener("load", () => {
  setTimeout(() => {
    preload.classList.add("preLoadHidden");
  }, 1000);
});
