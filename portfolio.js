const menu = document.querySelector(".main-nav"); //ul
const links = document.querySelectorAll(".item"); //3 li links
const bar = document.querySelector(".bar_container"); //the bar
const upArrow = document.getElementById("home"); //back to top arrow

function classToggle() {
  links.forEach((link) => link.classList.toggle("toggleShow"));
  menu.classList.toggle("navStyle");
  bar.classList.toggle("change");
}

bar.addEventListener("click", classToggle);

function hideDropDown() {
  links.forEach((link) => {
    if (link.classList.contains("toggleShow")) {
      link.classList.remove("toggleShow");
    }
  });
  if (menu.classList.contains("navStyle") || bar.classList.contains("change")) {
    menu.classList.remove("navStyle");
    bar.classList.remove("change");
  }
}

document.addEventListener("mouseup", hideDropDown);

// When the user scrolls down 60px from the top of the document, show the upArrow
function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    upArrow.style.display = "block";
  } else {
    upArrow.style.display = "none";
  }
}

onscroll = () => scrollFunction();


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

upArrow.addEventListener("click", topFunction);
