const navBtn = document.getElementById("nav-toggle");
const link = document.getElementById("nav-link");

navBtn.addEventListener("click", () =>{
    link.classList.toggle("show-link");


const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    e.preventDefault();
    link.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    let position = element.offsetTop - 170;

    window.scrollTo({
        left: 0,
        top: position,
        behavior: "smooth"
    });
});
});
