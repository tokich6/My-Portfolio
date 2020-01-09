
function classToggle() {
  const navs = document.querySelectorAll('.item');
  const menu = document.querySelector('.main-nav');
  const bar = document.querySelector('.bar_container');
  navs.forEach(nav => nav.classList.toggle('toggleShow'));
  menu.classList.toggle("navStyle");
  bar.classList.toggle('change');
}
document.querySelector('.link-toggle').addEventListener('click', classToggle);



// document.addEventListener ('mouseup', function (event) {
//   const links = document.getElementsByClassName("item");
//   const menu = document.querySelector('.main-nav');
//   const bar = document.querySelector('.bar_container');
//   let i;
//   for (i = 0; i < links.length; i++) {
//     let link = links[i];
//     console.log(link);
//     if (!event.target.matches('.link-toggle')) {
//       if (link.classList.contains('toggleShow') && menu.classList.contains('navStyle') && bar.classList.contains('change')) {
//         link.classList.remove('toggleShow');
//         menu.classList.remove('navStyle');
//         bar.classList.remove('change');
//       }
//     }
//   }
// });

