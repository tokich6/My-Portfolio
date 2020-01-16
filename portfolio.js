const links = document.querySelectorAll('.item');
const menu = document.querySelector('.main-nav');
const bar = document.querySelector('.bar_container');


function classToggle() {
  links.forEach(link => link.classList.toggle('toggleShow'));
  menu.classList.toggle('navStyle');
  bar.classList.toggle('change');
}
document.querySelector('.link-toggle').addEventListener('click', classToggle);



window.addEventListener('mouseup', function (event) {
  let i;
  for (i = 0; i < links.length; i++) {
    let link = links[i];
    // if (!event.target.matches('.link-toggle')) {
      if (link.classList.contains('toggleShow') || menu.classList.contains('navStyle') || bar.classList.contains('change')) {
        link.classList.remove('toggleShow');
        menu.classList.remove('navStyle');
        bar.classList.remove('change');
      }
    // }
  }
});

