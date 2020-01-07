

function myFunction(x) {
  x.classList.toggle("change");
}

function classToggle() {
    const navs = document.querySelectorAll('.item')
    navs.forEach(nav => nav.classList.toggle('toggleShow'));
  }
  document.querySelector('.link-toggle').addEventListener('click', classToggle);

  
function changeColor (y) {
  const menu = document.querySelector('.main-nav')
  menu.classList.toggle("navStyle");
     
} 

document.querySelector('.link-toggle').addEventListener('click', changeColor);

// window.onclick = function(event) {
//   if(!event.target.matches('.link-toggle')) {
//     var dropdowns = document.getElementsByClassName("item");  
//                 var i; 
//                 for (i = 0; i < dropdowns.length; i++) { 
//                     var openDropdown = dropdowns[i]; 
//                     if (openDropdown.classList.contains('toggleShow')) { 
//                         openDropdown.classList.remove('toggleShow'); 
//                     }
//     }
//   } 
//  }



   

    