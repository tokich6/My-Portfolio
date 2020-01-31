const links = document.querySelectorAll('.item');
const menu = document.querySelector('.main-nav');
const bar = document.querySelector('.bar_container');
const upArrow = document.getElementById('home');

function classToggle() {
  links.forEach(link => link.classList.toggle('toggleShow'));
  menu.classList.toggle('navStyle');
  bar.classList.toggle('change');
}
document.querySelector('.link-toggle').addEventListener('click', classToggle);



function hideDropDown (event) {
  event.preventDefault();
  event.stopPropagation();
  let i;
  for (i = 0; i < links.length; i++) {
    let link = links[i];
    if (!event.target.matches('.link-toggle')) {
      if (link.classList.contains('toggleShow') || menu.classList.contains('navStyle') || bar.classList.contains('change')) {
        link.classList.remove('toggleShow');
        menu.classList.remove('navStyle');
        bar.classList.remove('change');
      }
    }
  }
};
window.addEventListener('touchend', hideDropDown);
window.addEventListener('mouseup', hideDropDown);





// When the user scrolls down 60px from the top of the document, show the upArrow
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    upArrow.style.display = "block";
  } else {
    upArrow.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

upArrow.addEventListener('click', topFunction);


