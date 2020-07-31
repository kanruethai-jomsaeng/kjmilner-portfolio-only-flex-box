const navBtn = document.getElementById("nav-toggle");
const link = document.getElementById("nav-link");

navBtn.addEventListener("click", () =>{
    link.classList.toggle("show-link");
});