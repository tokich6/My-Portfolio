function myFunction(x) {
  x.classList.toggle("change");
}

function classToggle() {
    const navs = document.querySelectorAll('.item')
    
    navs.forEach(nav => nav.classList.toggle('toggleShow'));
  }
  
  document.querySelector('.link-toggle')
    .addEventListener('click', classToggle);