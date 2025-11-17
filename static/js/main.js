// foldable nav
const navToggle = document.getElementById("navToggle");
const sideNav = document.getElementById("sideNav");

navToggle.addEventListener("click", () => {
    sideNav.classList.toggle("collapsed");
});


function cardPop(el){
  el.classList.add('pop');
  setTimeout(()=> el.classList.remove('pop'), 400);
}


document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".nav-toggle");
    const sidenav = document.querySelector(".sidenav");

    if (toggleBtn && sidenav) {
        toggleBtn.addEventListener("click", () => {
            sidenav.classList.toggle("open");
        });
    }
});


