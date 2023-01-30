const header = document.querySelector("header");

header.style.transform = "translateY(-100%)";

setTimeout(() => {
  header.style.transform = "translateY(0)";
}, 500);
