// header: changes the background color when a header item is clicked.

let headerLinks = document.querySelectorAll("header a");
headerLinks.forEach((item) => {
  item.addEventListener("click", () => {
    headerLinks.forEach((item) => item.classList.remove("header-active"));
    item.classList.add("header-active");
  });
});

//When scrolling to the Design section, the active header should display 'Design'

addEventListener("scroll", (event) => {
  if (window.scrollY > 300) {
    document.querySelectorAll("header a")[0].classList.remove("header-active");
    document.querySelectorAll("header a")[1].classList.add("header-active");
  } else {
    document.querySelectorAll("header a")[0].classList.add("header-active");
    document.querySelectorAll("header a")[1].classList.remove("header-active");
  }
});
