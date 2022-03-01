const menu = document.querySelector(".main-nav"); //ul
const links = document.querySelectorAll(".item"); //3 li links
const bar = document.querySelector(".bar_container");
const upArrow = document.querySelector("#home"); //back to top arrow

function toggleDropdown() {
  links.forEach((link) => link.classList.toggle("toggleShow"));
  menu.classList.toggle("navStyle");
  bar.classList.toggle("change");
}

bar.addEventListener("click", toggleDropdown);

for (let link of links) {
  link.addEventListener('click', toggleDropdown);
}

// When the user scrolls down 60px from the top of the document, show the upArrow
function showUpArrow() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    upArrow.style.display = "block";
  } else {
    upArrow.style.display = "none";
  }
}

// document.addEventListener("onscroll", showUpArrow);
onscroll = () => showUpArrow();


// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

upArrow.addEventListener("click", scrollToTop);
