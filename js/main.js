let body = document.body;
let navBar = document.querySelector("nav");
let navLogo = document.querySelector('.navbar [class="navbar-brand"]');
let aboutSection = document.getElementById('about');

console.log( aboutSection.offsetHeight );
console.log(window.scrollY );
console.log(navBar);

window.onscroll=()=>{
    if(window.scrollY >= aboutSection.offsetHeight){
      navBar.style.backgroundColor='#021239b1 !important';
      // aboutSection.style.backgroundColor='orange';
    }
    else{
    navBar.style.backgroundColor='#021239 !important';
    }
};



// ========== mouse events ==========================================
let anchorList = document.querySelectorAll("a");
let btnList = document.querySelectorAll('button');
let mouse = document.getElementById("mouse");

document.onmousemove = function (e) {
  mouse.style.transform = `translate(${e.clientX}px , ${e.clientY}px)`;
};

anchorList.forEach(anchor =>{
   anchor.onmouseenter =()=>{
        mouse.classList.add("mouse-hover");
      };
      anchor.onmouseleave = ()=> {
        mouse.classList.remove("mouse-hover");
      };
    });

btnList.forEach(btn=>{
btn.onmouseenter=()=>{
    mouse.classList.add("mouse-hover");
}
btn.onmouseleave=()=>{
    mouse.classList.remove("mouse-hover");
}
})
// ====================================================
let time = new Date().toDateString();
let date = document.querySelector("footer span");
// date.innerHTML = time;
date.append(time);

// body.style.cssText = `
// @media screen and (min-width:993px) and (max-width:1550px) {
//     .navbar [class="navbar-brand"]{
//     position: relative;
//     top: ${navBar.offsetHeight * 0.2} +'px';
// }
// }`;

// ========= animation ==============================
$(document).ready(function() {
  $(".animsition").animsition(
    // inClass: 'fade-down-small',
    // inDuration: 1500,

  )
})